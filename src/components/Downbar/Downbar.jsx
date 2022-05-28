import "./Downbar.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Downbar = () => {
  return (
    <div class="bottom_layout">
      <div class="bottom_intro">
        <div class="intro">
          <h4>We are soical</h4>
          <p>Follow us</p>
          <a class="down_button" href="" target="_blank">
            <FaFacebook />
          </a>
          <a class="down_button" href="" target="_blank">
            <FaTwitter />
          </a>
          <a class="down_button" href="" target="_blank">
            <FaInstagram />
          </a>
        </div>
        <div class="bottom_service_info">
          <h4>Links</h4>
          <p onclick="">ADVERTISERS</p>
          <p onclick="">PUBLISHERS</p>
          <p onclick="">INFLUENCERS</p>
          <p onclick="">AD FORMATS</p>
        </div>
        <div class="offer">
          <h4>Documentation</h4>
          <p onclick="">TERMS & CONDITIONS</p>
          <p onclick="">PRIVACY POLICY</p>
          <p onclick="">CANCELLATION POLICY</p>
          <p onclick="">BLOG</p>
        </div>
        <div class="support">
          <h4>Support</h4>
          <p onclick="">FAQ</p>
          <p onclick="">MEDIA KIT</p>
          <p onclick="">CONTACT US</p>
        </div>
      </div>
    </div>
  );
};

export default Downbar;
