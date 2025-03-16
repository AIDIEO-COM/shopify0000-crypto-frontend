import { useNavigate } from "react-router-dom";

const dashboardItems = [
    {
      emoji: "🪙",
      title: "Create Token",
      description:
        "Create and deploy your own custom token on the Solana blockchain.",
        link:"/dashboard/create-token"
    },
    {
      emoji: "📜",
      title: "Previous Tokens Created",
      description:
        "View and manage all the tokens you have created in the past.",
        link:"/dashboard/previous-tokens"
    },
    {
      emoji: "📊",
      title: "Statistics",
      description: "See detailed statistics and performance of your tokens.",
      link:"/dashboard/statistics"
    },
    {
      emoji: "⚙️",
      title: "Settings",
      description: "Adjust your account settings and preferences.",
      link:"/dashboard/settings"
    },
  ];

const DashboardItems = () => {
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-2 z-50 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto lg:p-6">
        {dashboardItems.map((item, index) => (
          <button
          onClick={() => navigate(item.link)}
            key={index}
            className="group cursor-pointer relative flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0A0F1E] hover:bg-[#131B2E] transition-all duration-300 border border-[#1E2334]"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r opacity-30 blur-xl transition-all duration-300"
              style={{ transform: "scale(1.00812)" }}
            ></div>
            <div className="relative z-10 text-center">
              <span className="text-4xl">{item.emoji}</span>
              <p className="mt-3 text-lg font-semibold text-gray-300">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-gray-400">{item.description}</p>
            </div>
          </button>
        ))}
      </div>
    );
};

export default DashboardItems;