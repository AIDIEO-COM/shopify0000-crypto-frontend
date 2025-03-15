import CryptoPrices from "@/components/Dashboard/CryptoPrices";
import DashboardItems from "@/components/Dashboard/DashboardItems";
import BgAnimation from "@/components/ui/BgAnimation";

const Dashboard = () => {
  return (
    <main>
      <BgAnimation />
      <section>
        <DashboardItems />
      </section>
      <section>
        <CryptoPrices />
      </section>
    </main>
  );
};

export default Dashboard;
