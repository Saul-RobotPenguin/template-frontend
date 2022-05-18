import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <h1>Templates App</h1>
      <Navbar />

      {props.children}

      <Footer />
    </div>
  );
};

export default Layout;
