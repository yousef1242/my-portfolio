import Link from "next/link";
import classes from "../styles/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faHome,
  faListCheck,
  faWalkieTalkie,
} from "@fortawesome/free-solid-svg-icons";
import { faSketch } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <>
      <main className={`col-3 ${classes.sidebar}`}>
        <div>
          <Link href={`/#home-section`}>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link href={`/#about-section`}>
            <FontAwesomeIcon icon={faAddressCard} />
            <span>About</span>
          </Link>
          <Link href={`/#skills-section`}>
            <FontAwesomeIcon icon={faSketch} />
            <span>Skills</span>
          </Link>
          <Link href={`/#projects-section`}>
            <FontAwesomeIcon icon={faListCheck} />
            <span>Projects</span>
          </Link>
          <Link className={classes.letsTalk} href={`/#talk-section`}>
            <FontAwesomeIcon icon={faWalkieTalkie} />
            <span>Lets Talk</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Sidebar;
