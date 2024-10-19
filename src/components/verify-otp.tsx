import Layout from "../layout";

const VerifyOtp = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center h-screen px-10 bg-white">
        {/* Left Text Section */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-6">Cuvette</h1>
          <p className="text-gray-600 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>

        {/* Right Signup Section */}
        <div className="w-1/3 p-10 bg-white border border-purple-200 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-2">Sign Up</h2>
          <p className="text-center text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text
          </p>

          <div className="space-y-4">
            {/* Email OTP */}
            <div className="flex items-center border rounded-lg p-4">
              <span className="text-gray-600 text-xl mr-4">📧</span>
              <p className="text-lg flex-1">Email OTP</p>
              <span className="text-green-500 text-2xl">✔️</span>
            </div>

            {/* Mobile OTP */}
            <div className="flex items-center border rounded-lg p-4">
              <span className="text-gray-600 text-xl mr-4">📞</span>
              <p className="text-lg flex-1">Mobile OTP</p>
              <span className="text-green-500 text-2xl">✔️</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyOtp;
