import { Component } from "react";
import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import img_profile from "./../../media/images/profile/profile_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faInfoCircle,
  faWalking,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import "./../styles/Menu.css";

class Menu extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="menu-main">
            <div className="profile-img">
              <Image src={img_profile} thumbnail />
            </div>
          </div>
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                <p>Sobre mi</p>
                <FontAwesomeIcon icon={faInfoCircle} />
              </Link>
            </li>
            <li>
              <Link to="/formacion" activeClassName="active">
                <p>Formación</p>
                <FontAwesomeIcon icon={faUserTie} />
              </Link>
            </li>
            <li>
              <Link to="/experiencia" activeClassName="active">
                <p>Experiencia</p>
                <FontAwesomeIcon icon={faWalking} />
              </Link>
            </li>
            <li>
              <Link to="/habilidades" activeClassName="active">
                <p>Habilidades</p>
                <FontAwesomeIcon icon={faAddressBook} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Menu;
