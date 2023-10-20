import avatar from "../../../img/person.jpg";
import facebook from "../../../img/facebook-logo.svg";
import git from "../../../img/github-logo.svg";
import insta from "../../../img/instagram-logo.svg";
import "./Contact.css";
function Contact() {
  return (
    <div className="info">
      <img src={avatar} className="avatar"></img>
      <p className="name">Lê Tấn Việt</p>
      <div className="logo">
        <a href="https://www.facebook.com/nohacknick">
          <img src={facebook}></img>
        </a>
        <a href="https://github.com/vietlucoder">
          <img src={git}></img>
        </a>
        <a href="https://github.com/vietlucoder">
          <img src={insta}></img>
        </a>
      </div>
    </div>
  );
}

export default Contact;
