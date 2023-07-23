import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/homeSection.module.css";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeSection = () => {
  return (
    <>
      <section id="home-section" className={classes.homeSection}>
        <div className="container">
          <div>
            <h1 className="mb-4">Hello 👋</h1>
            <h1 className="mb-5">I'm Yousef Ahmed</h1>
            <div className={classes.typewriter}>
              <div className={classes.typewriterText}>
                I'm full stack developer .
              </div>
            </div>
            <Link
              href={`/#about-section`}
              className="w-100 text-center d-block"
            >
              <FontAwesomeIcon icon={faAnglesDown} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
