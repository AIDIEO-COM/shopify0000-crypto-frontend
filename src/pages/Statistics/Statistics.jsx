

const Statistics = () => {
  return (
    <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
      <div className="bg-[#131B2E] p-6 rounded-lg shadow-lg" style={{ opacity: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        

          {/* Token Performance Card */}
          <div
            className="bg-navy-800 rounded-2xl p-6 border border-blue-500/20"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-line-chart w-6 h-6 text-blue-400"
              >
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
              <h3 className="text-xl font-bold text-blue-400">Token Performance</h3>
            </div>
            <div className="h-64 flex items-center justify-center text-blue-300/60">
              Chart coming soon
            </div>
          </div>

          {/* Token Distribution Card */}
          <div
            className="bg-navy-800 rounded-2xl p-6 border border-blue-500/20"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bar-chart w-6 h-6 text-blue-400"
              >
                <line x1="12" x2="12" y1="20" y2="10"></line>
                <line x1="18" x2="18" y1="20" y2="4"></line>
                <line x1="6" x2="6" y1="20" y2="16"></line>
              </svg>
              <h3 className="text-xl font-bold text-blue-400">Token Distribution</h3>
            </div>
            <div className="h-64 flex items-center justify-center text-blue-300/60">
              Chart coming soon
            </div>
          </div>

          {/* Token Analytics Card */}
          <div
            className="bg-navy-800 rounded-2xl p-6 border border-blue-500/20 md:col-span-2"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pie-chart w-6 h-6 text-blue-400"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
              <h3 className="text-xl font-bold text-blue-400">Token Analytics</h3>
            </div>
            <div className="h-64 flex items-center justify-center text-blue-300/60">
              Chart coming soon
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Statistics;
