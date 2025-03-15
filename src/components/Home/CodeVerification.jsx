import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CodeVerification = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [error, setError] = useState(false);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError(false); // Reset error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    setTimeout(() => {
      setIsLoading(false);
      setError(true);
    }, 2000); // Simulating a 2-second loading period
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
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                error ? "border-red-400 " : "border-purple-400/50"
              } text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 ${
                error ? "focus:ring-red-400" : "focus:ring-purple-400"
              } transition-all`}
              required
              value={code}
              onChange={handleCodeChange}
            />
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Invalid code. Please try again.</span>
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 cursor-pointer to-teal-500 text-white font-medium hover:from-purple-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>Verify Code</span>
              )}
            </button>
            <button
            onClick={() => navigate('/dashboard')}
              type="button"
              className="w-full mt-4 py-3 px-6 cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all relative overflow-hidden group"
            >
              <span>Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CodeVerification;
