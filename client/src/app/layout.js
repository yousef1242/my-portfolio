import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Yousef Ahmed | Expert Frontend Developer",
  description:
    "Yousef Ahmed is a frontend developer specializing in building responsive, user-friendly websites and web applications using React.js, Next.js, and Tailwind CSS.",
  keywords:
    "Frontend Developer, React.js Developer, Next.js Developer, JavaScript, Tailwind CSS, Web Development, Responsive Design, UI/UX, Freelance Developer",
  openGraph: {
    title: "Yousef Ahmed | Expert Frontend Developer",
    description:
      "Professional frontend development services specializing in React.js, Next.js, and Tailwind CSS.",
    url: "https://yousefahmed.online",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  canonical: "https://yousefahmed.online",
  author: "Yousef Ahmed",
  icons: {icon : ["./assets/logo.png"]},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ background: "#0a0a0a", color: "#ededed" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blackcolor overflow-x-hidden max-w-full scroll-smooth relative`}
      >
        <div className="overlay-squares absolute top-0 left-0 w-full h-full z-[-1] invert bg-[url(../app/assets/squares-bg.png)]"></div>
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}