/* eslint-disable react/no-unescaped-entities */


const PreviousTokens = () => {
  return (
   <div>
     <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
      <div className="bg-[#131B2E] p-6 rounded-lg shadow-lg" style={{ opacity: 1 }}>
        <div className="relative min-h-screen flex flex-col justify-between">
        
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <a
              href="https://t.me/anasfazal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition flex items-center space-x-2"
            >
              <span>Get your access code for the true experience!</span>
            </a>
          </div>
          
          <div className=" z-10 flex-1">
            <div className="text-center py-12">
              <p className="text-gray-500">You haven't created any tokens yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default PreviousTokens;
