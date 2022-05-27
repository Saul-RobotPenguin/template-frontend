import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <h1>Templates App</h1>
      <Navbar />


      {props.children}
    </>
  );
};

export default Layout;
