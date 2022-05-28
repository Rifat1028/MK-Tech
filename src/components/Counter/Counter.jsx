import "./Counter.css";
import { FaSmile } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Counter = () => {
  return (
    <div class="counter-up">
      <div class="content">
        <div class="box">
          <div class="icon">
            <i>
              <FaSmile />
            </i>
          </div>
          <div class="amount">
            <div class="counter">1BN+</div>
          </div>
          <div class="text">Daily Impressions</div>
        </div>
        <div class="box">
          <div class="icon">
            <i>
              <FaMoneyCheck />
            </i>
          </div>
          <div class="amount">
            <div class="counter">$500K+</div>
          </div>
          <div class="text">Paid</div>
        </div>
        <div class="box">
          <div class="icon">
            <i>
              <FaGlobe />
            </i>
          </div>
          <div class="amount">
            <div class="counter">8k+</div>
          </div>
          <div class="text">Global Publishers</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
