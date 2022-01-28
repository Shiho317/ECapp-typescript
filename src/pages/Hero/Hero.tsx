import { Link } from "react-router-dom";
import { Wrapper } from "./Hero.style";
import HeroImage from '../../images/hero-bg-img.webp';
import SailingIcon from '@mui/icons-material/Sailing';

const Hero = () => {

  return (
    <Wrapper>
      <div className="header">
        <h1>SailFurniture</h1>
        <SailingIcon/>
      </div>
      <div className="image-wrap">
        <img src={HeroImage} alt="background"/>
        <div className="title">
          <h1>Great style is easy.</h1>
          <p>The best way to buy beautiful modern furniture.</p>
        </div>
        <div className="start-btn">
          <Link to='./login'>
            <button>GET STARTED</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
};

export default Hero