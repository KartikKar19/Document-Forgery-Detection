import './HeroSection.css';
import heroImg from '../images/demo_heroimg.png';
import rect from '../images/Group1.png';

function HeroSection() {
    return(
        <div className="hero">      
            <h1 className="hero_text">Uncover Truth<br></br> in  Every  Claim</h1>
            <p className='hero_subtext'>Ensure the integrity of your medical insurance claims with advanced AI technology. <br></br>Our solution seamlessly detects document forgery, 
                protecting your business from fraud and safeguarding your customers' trust.</p>
            <button className='btn'>Get Started</button>
            <br></br>
            <img src={rect} alt="" className='rect' id="rect1"></img>
            <img src={heroImg} alt="hero img" id="hero_img"></img>
            <img src={rect} alt="" className='rect' id="rect2"></img>
        </div>
    );
}

export default HeroSection;