import Layout from "../shared/Layout";
import Hero from "../shared/Hero";
import Templates from "./Templates";
import Footer from "../shared/Footer";
// import "../../App.css";
const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Templates />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
