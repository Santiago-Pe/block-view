import { ContanierItems } from "../components";
import Title from "../ui-components/title/title";

const Home = () => {
  return (
    <>
      <section className="py-4 px-2">
        <Title text="Top 10 Coins" level={1} />
        <ContanierItems />
      </section>
    </>
  );
};

export default Home;
