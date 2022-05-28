import "./Home.css";

const Intro = () => {
  return (
    <nav classNme="top_menu">
      <ul>
        <li>
          <a className="active" onclick="">
            HOME
          </a>
        </li>
        <li>
          <a onclick="">ADVERTISERS</a>
        </li>
        <li>
          <a onclick="">PUBLISHERS</a>
        </li>
        <li>
          <a onclick="">INFLUENCERS</a>
        </li>
        <li>
          <a onclick="">AD FORMATS</a>
        </li>
        <li>
          <a onclick="">BLOG</a>
        </li>
        <li>
          <a onclick="">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
};

export default Intro;
