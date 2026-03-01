import "./Footer.css";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import whatsapp from "../img/whatsapp.png";
import logo from "../img/logo1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {}
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>

        {}
        <div className="footer-block">
          <h4>Address</h4>
          <p>
            Svoboda str. 35 <br/>
            Kyiv <br/>
            Ukraine
          </p>
        </div>

        {}
        <div className="footer-block">
          <h4>Contact us</h4>
          <div className="socials">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
