import CodeVerification from "@/components/Home/CodeVerification";
import CryptoStats from "@/components/Home/CryptoStats";
import Header from "@/components/Home/Header";
import SOLPriceChart from "@/components/Home/SOLPriceChart";

const Home = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <SOLPriceChart />
      </section>
      <section>
        <CodeVerification />
      </section>
      <section>
        <CryptoStats />
      </section>
    </>
  );
};

export default Home;
