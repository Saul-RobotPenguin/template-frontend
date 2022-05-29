import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <h1>Cover Letter.io</h1>
      <Navbar />

      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
