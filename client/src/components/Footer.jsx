import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/logo.png";

function Footer() {
  return (
    <footer className="footer_section py-10 border-t border-primary-white/40">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between">
          <div className="links">
            <ul className="flex space-x-5 items-center">
              <li>
                <Link
                  target="_blank"
                  href={"https://github.com/yousef1242"}
                  className="text-primary-white font-bold text-xl"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://wa.me/201145667099"}
                  className="text-primary-white font-bold text-xl"
                >
                  whatsapp
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"mailto:yousefahmedelshahed@gmail.com"}
                  className="text-primary-white font-bold text-xl"
                >
                  Gmail
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo">
            <Image
              className="w-16 h-16"
              src={logo}
              alt="yousef ahmed | frontend developer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
