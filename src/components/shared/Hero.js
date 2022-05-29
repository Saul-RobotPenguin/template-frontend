import './Hero.css';

const Hero = () => {
  return (

    <header className="">
      <section className="hero">
        <div className="rectangle">
          </div>
        <div className="left">
          <h1>Your Next <br />job is waiting <br /><span>for you</span></h1>
          <p>With Cover Letter.io our superior generator with make the difference between whether or not you application is a success!</p>
          <a className='btn' > More below </a>
        </div>
        {/* <div className="right">
          <img src="https://insights.dice.com/wp-content/uploads/2019/12/shutterstock_1378191401.jpg" alt="" />
        </div> */}
      </section>
    </header>
  );
}

export default Hero;