import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/talkSection.module.css";
import {
  faEnvelopeCircleCheck,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const TalkSection = () => {
  return (
    <>
      <section id="talk-section" className={classes.talkSection}>
        <div className="container">
          <div className="row m-0">
            <div className="col-12 col-sm-6 mb-4">
              <div className={`card ${classes.card}`}>
                <div className={classes.iconDiv}>
                  <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                </div>
                <div className={classes.wayOfTalkDiv}>
                  <Link
                    href={`mailto:yousefahmedelshahed@gmail.com`}
                    target="_blank"
                  >
                    yousefahmedelshahed@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 mb-4">
              <div className={`card ${classes.card}`}>
                <div className={classes.iconDiv}>
                  <FontAwesomeIcon icon={faMobile} />
                </div>
                <div className={classes.wayOfTalkDiv}>
                  <Link href={`http://wa.me/+01145667099`} target="_blank">
                    01145667099
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 mb-4">
              <div className={`card ${classes.card}`}>
                <div className={classes.iconDiv}>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className={classes.wayOfTalkDiv}>
                  <Link
                    href={`https://www.instagram.com/fluxetech/`}
                    target="_blank"
                  >
                    https://www.instagram.com/fluxetech/
                  </Link>
                </div>
              </div>
            </div>{" "}
            <div className="col-12 col-sm-6 mb-4">
              <div className={`card ${classes.card}`}>
                <div className={classes.iconDiv}>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className={classes.wayOfTalkDiv}>
                  <Link
                    href={`https://www.facebook.com/profile.php?id=100089912867862`}
                    target="_blank"
                  >
                    https://www.facebook.com/profile.php?id=100089912867862
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TalkSection;
