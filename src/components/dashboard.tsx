import { useState } from "react";
import Layout from "../layout";

const Dashboard = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [candidates, setCandidates] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    console.log("Form submitted with candidates: ", candidates);

    // Hide the form after submission
    setIsFormVisible(false);
  };

  // Function to handle adding an email to the candidates list
  const handleAddCandidate = () => {
    if (email && !candidates.includes(email)) {
      setCandidates((prev) => [...prev, email]);
      setEmail(""); // Clear the input field after adding
    }
  };

  // Function to remove a candidate from the list
  const handleRemoveCandidate = (candidateToRemove: string) => {
    setCandidates((prev) =>
      prev.filter((candidate) => candidate !== candidateToRemove)
    );
  };

  return (
    <Layout>
      <main className="border-t border-gray-300 flex w-full">
        <section className="w-1/6 border-r border-gray-300 min-h-screen">
          Home
        </section>

        <section className="w-5/6 p-8">
          {!isFormVisible ? (
            // Button to show the form
            <button
              onClick={() => setIsFormVisible(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Create Interview
            </button>
          ) : (
            // The form to be shown after clicking the button
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Job Title</label>
                <input
                  type="text"
                  placeholder="Enter Job Title"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-700">Job Description</label>
                <textarea
                  placeholder="Enter Job Description"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-700">Experience Level</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Select Experience Level</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Add Candidate</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="email"
                    placeholder="xyz@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleAddCandidate}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Display the list of added candidates */}
              <div>
                <label className="block text-gray-700">Added Candidates</label>
                <ul className="list-disc pl-5 space-y-1">
                  {candidates.map((candidate, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      {candidate}
                      <button
                        type="button"
                        onClick={() => handleRemoveCandidate(candidate)}
                        className="text-red-500 ml-2"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setIsFormVisible(false)} // Hide the form when canceled
                  className="bg-red-500 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
    </Layout>
  );
};

export default Dashboard;
