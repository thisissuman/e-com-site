import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            natus praesentium nihil nobis. Impedit, cupiditate est blanditiis
            repudiandae assumenda necessitatibus, accusamus, laboriosam porro
            commodi sapiente maiores animi nobis et at.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Odisha, 760007, ganjam</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Mob: 7894887909</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: sumanmaharana222888@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speaker</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theater</span>
          <span className="text">Projecters</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">KIRA DEVSTORE CREATED BY SUMAN. </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
