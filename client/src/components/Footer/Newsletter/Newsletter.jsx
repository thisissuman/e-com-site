import "./Newsletter.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">New Letter</span>
        <span className="big-text">Sign of latest update</span>
        <div className="form">
          <input type="text" placeholder="Email Adress" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with your Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
