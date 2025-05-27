import CodeVerification from "@/components/Home/CodeVerification";
import CryptoStats from "@/components/Home/CryptoStats";
import Header from "@/components/Home/Header";
import TradingViewWidget from "@/components/Home/TradingViewWidget";

const Home = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="pb-12">
        {/* <SOLPriceChart /> */}
        <TradingViewWidget />
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
