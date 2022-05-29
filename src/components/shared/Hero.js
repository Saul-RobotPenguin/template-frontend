import './Hero.css';
import ResumeCard from './ResumeCard';

const Hero = () => {
  return (
    <>
    <header className="container">
      <section className="hero">
        <div className="rectangle">
          </div>
        <ResumeCard />

        <div className="left">
          <h1>Your Next <br />job is waiting <br /><span>for you</span></h1>
          <p>With Cover Letter.io our superior generator with make the difference between whether or not you application is a success!</p>
          <a className='btn' > More below </a>
        </div>
        <div className="right">
        
        </div>
      </section>
    </header>
    <ResumeCard />
    </>
  );
}

export default Hero;