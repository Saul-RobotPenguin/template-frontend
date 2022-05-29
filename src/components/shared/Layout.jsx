import Navbar from "./Navbar";
import Footer from "./Footer";

// import '../../App.css';

const Layout = (props) => {
  return (
    <>
      {/* <h1>Cover Letter.io</h1> */}
      <Navbar />


      {props.children}
      
    </>
  );
};

export default Layout;
