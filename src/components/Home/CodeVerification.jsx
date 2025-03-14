import { useState } from "react";

const CodeVerification = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
      <div className="w-full backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 transition-transform duration-300">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="code" className="block text-purple-200 font-medium">
              Purchase Code Verification
            </label>
            <input
              id="code"
              type="text"
              placeholder="Enter your Purchase Code"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-400/50 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              required
              value={code}
              onChange={handleCodeChange}
            />
          </div>
          <div>
            {" "}
            <button
              type="submit"
              className="w-full py-3 cursor-pointer px-6 rounded-lg bg-gradient-to-r from-purple-500 to-teal-500 text-white font-medium hover:from-purple-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span>Verify Code</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button
              type="button"
              className="w-full cursor-pointer mt-4 py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all relative overflow-hidden group"
            >
              <span>Free Trial</span>
              <div className="absolute cursor-pointer inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CodeVerification;
