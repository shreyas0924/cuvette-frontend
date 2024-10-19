// src/pages/VerifyOtp.tsx
import { useEffect, useState } from "react";
import Layout from "../layout";
import { Link, useNavigate } from "react-router-dom";

interface VerificationStatus {
  email: boolean;
  phone: boolean;
}

const VerifyOtp = () => {
  const navigate = useNavigate()
  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus>({
      email: false,
      phone: false,
    });

  const [otp, setOtp] = useState("");

  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const verifyEmailOTP = async () => {
    if (!otp) return;
    setIsVerifying(true);
    setErrorMessage(null); // Reset error message before new attempt

    try {
      // Call backend API to verify the OTP
      const response = await fetch(
        "http://localhost:3000/api/companies/verifyEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "1js20cs157@gmail.com",
            otp,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // OTP verification succeeded
        setVerificationStatus((prev) => ({
          ...prev,
          email: true,
        }));
      } else {
        // Handle error message from API
        setErrorMessage(
          data.error || "Failed to verify OTP. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred during verification.");
      console.error("OTP verification failed:", error);
    } finally {
      setIsVerifying(false);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return (
    <Layout>
      {/* Left Text Section */}
      <div className=" grid grid-cols-2 ">
        <h1 className="text-4xl font-bold mb-6">Cuvette</h1>
        <p className="text-gray-600 max-w-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
      </div>

      {/* Right Signup Section */}
      <div className="w-1/2 p-10 bg-white border border-purple-200 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-2">Sign Up</h2>
        <p className="text-center text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text
        </p>

        <div className="space-y-4">
          {/* Email OTP */}
          <div className="space-y-2">
            <div className="flex items-center border rounded-lg p-4">
              <span className="text-gray-600 text-xl mr-4">📧</span>
              {!verificationStatus.email ? (
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter Email OTP"
                    className="flex-1 outline-none"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                  />
                  <button
                    onClick={verifyEmailOTP}
                    disabled={isVerifying || !otp}
                    className={`px-4 py-1 rounded-md text-white ${
                      isVerifying || !otp
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    {isVerifying ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Verifying
                      </span>
                    ) : (
                      "Verify"
                    )}
                  </button>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-between">
                  <p className="text-lg">Email OTP</p>
                  <span className="text-green-500 text-2xl">✓</span>
                </div>
              )}
            </div>

            {/* Display error message if OTP verification fails */}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
          </div>

          {/* Mobile OTP - Not functional */}
          {/* <div className="space-y-2">
            <div className="flex items-center border rounded-lg p-4">
              <span className="text-gray-600 text-xl mr-4">📞</span>
              {!verificationStatus.phone ? (
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter Mobile OTP"
                    className="flex-1 outline-none"
                    value={otpValues.phone}
                    onChange={(e) =>
                      setOtpValues((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    maxLength={6}
                  />
                  <button className="px-4 py-1 rounded-md text-white bg-gray-400 cursor-not-allowed">
                    Verify
                  </button>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-between">
                  <p className="text-lg">Mobile OTP</p>
                  <span className="text-green-500 text-2xl">✓</span>
                </div>
              )}
            </div>
          </div> */}

          {/* Proceed Button - Only shown when email is verified */}
          {verificationStatus.email && (
            <Link
              to={`/dashboard`}
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-6"
            >
              Proceed
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default VerifyOtp;
