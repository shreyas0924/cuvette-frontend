import { useState, FormEvent } from "react";
import Layout from "../layout";
import { useNavigate } from "react-router-dom";

export interface SignUpFormData {
  name: string;
  phone: string;
  companyName: string;
  email: string;
  employeeSize: string;
}

export default function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    phone: "",
    companyName: "",
    email: "",
    employeeSize: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/companies/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 201) {
        console.log("Company registered successfully");
        // You can add a success message or redirect the user here
        // For example:
        // setSuccessMessage('Registration successful! Please check your email for verification.');
        // or
        navigate("/verify");
      } else {
        console.error("Registration failed");
        // You can add an error message here
        // For example:
        // setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error("Error registering company:", error);
      // You can add an error message here
      // For example:
      // setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="my-auto max-w-lg w-full font-sans text-justify text-[#292929B2] text-lg  bg-white ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley
      </div>
      <div className="min-h-screen  flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md border border-gray-100">
          <div>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Sign Up
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Lorem Ipsum is simply dummy text
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    name="phoneNo"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone no."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="companyName"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="companyEmail"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Company Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="employeeSize"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Employee Size"
                    value={formData.employeeSize}
                    onChange={(e) =>
                      setFormData({ ...formData, employeeSize: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600">
              By clicking on proceed you will accept our{" "}
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Terms
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Conditions
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
