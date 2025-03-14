import Banner from "@/components/Home/Banner";
import CodeVerification from "@/components/Home/CodeVerification";
import CryptoStats from "@/components/Home/CryptoStats";

const Home = () => {
  return (
    <>
      <section>
        <Banner />
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
