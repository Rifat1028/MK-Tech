import "./Intro.css";
import { FaMicrophone } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

const Intro = () => {
  return (
    <div class="inner_content">
      <div class="inner_top">
        <div class="info"></div>
        <div class="info_home1">
          <h2>Main Head</h2>
          <h3>Head 2</h3>
          <p>Text</p>
          <button class="try_button" onclick="">
            <FaPaperPlane />
            Try
          </button>{" "}
        </div>
      </div>

      <div class="process_title">
        <h2>AVAILABLE FOR EVERYONE</h2>
      </div>
      <div class="work_process">
        <div class="info_home2">
          <div class="info_home21">
            <i>
              <FaMicrophone />
            </i>
          </div>
          <div class="info_home22">
            <p>
              <strong>TEXT 1</strong>
            </p>
            <button class="task_button" onclick="">
              text 1
            </button>
          </div>
        </div>
        <div class="info_home2">
          <div class="info_home21">
            <i>
              {" "}
              <FaPaperPlane />{" "}
            </i>
          </div>
          <div class="info_home22">
            <p>
              <strong>TEXT 2</strong>
            </p>
            <button class="task_button" onclick="">
              text 2
            </button>
          </div>
        </div>
        <div class="info_home2">
          <div class="info_home21">
            <i>
              <FaSignal />
            </i>
          </div>
          <div class="info_home22">
            <p>
              <strong>TEXT 3</strong>
            </p>
            <button class="task_button" onclick="">
              text 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
