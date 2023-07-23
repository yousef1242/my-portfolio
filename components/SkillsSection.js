import Image from "next/image";
import classes from "../styles/skillsSection.module.css";

const SkillsSection = () => {
  const skillsArray = [
    { img: "https://clipground.com/images/html-logo-png-3.png" },
    {
      img: "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5351_-_CSS3-512.png",
    },
    {
      img: "https://th.bing.com/th/id/OIP.fxMFAWgcs9ASnyZoIMeLJAAAAA?pid=ImgDet&rs=1",
    },
    {
      img: "https://th.bing.com/th/id/R.3cb8875905a40a08e2c1e5e69aa901f0?rik=XMIS3uyAqBvIsg&riu=http%3a%2f%2fnightdeveloper.net%2fwp-content%2fuploads%2f2018%2f01%2f1200px-React-icon.svg_-768x542.png&ehk=siHbxiKD%2bSZf0XEeVofUKnQbMOesi%2bD9xFFoocXot1s%3d&risl=&pid=ImgRaw&r=0",
    },
    { img: "https://nomadcoders.co/logos/next.png" },
    { img: "https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png" },
    {
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2152454423/settings_images/F1USRDEYRxObo2cGd3kZ_expressjs-logo.png",
    },
    {
      img: "https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01.png",
    },
    {
      img: "https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png",
    },
    {
      img: "https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png",
    },
    {
      img: "https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png",
    },
    {
      img: "https://th.bing.com/th/id/R.a694ef704a74fb3b7a92fa38d45c3feb?rik=30E%2bJid7U4HTLA&pid=ImgRaw&r=0",
    },
  ];
  return (
    <>
      <section id="skills-section" className={classes.skillsSection}>
        <div className="container">
          <h3>MY SKILLS</h3>
          <div className="row m-0">
            {skillsArray.map((skill, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className={`card ${classes.card}`}>
                  <img src={skill.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
