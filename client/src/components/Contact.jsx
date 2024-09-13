import Button from "./ui/Button";

function Contact() {
  return (
    <section id="contact" className="contact_section py-20">
      <div className="container mx-auto px-4 h-full w-full lg:w-6/12">
        <div className="contact-title text-center flex items-end justify-center mb-10">
          <h1 className="font-bold text-5xl md:w-auto bg-gradient-to-r from-openpurple to-white text-transparent bg-clip-text">
            Get in Touch
            <div className="dot inline-block w-4 h-4 bg-openpurple rounded-full ms-1"></div>
          </h1>
        </div>
        <div className="contact-text text-center mb-10">
          <p className="text-primary-white/60">
            Looking for a skilled frontend developer who brings creativity,
            efficiency, and modern web solutions to life? I’m passionate about
            transforming ideas into stunning, responsive websites that leave
            lasting impressions. Whether you’re starting a new project or
            enhancing an existing one, I’m here to help make it a success. Feel
            free to reach out, and let’s discuss how we can collaborate to
            create something extraordinary!
          </p>
        </div>
        <div className="contact-btn flex justify-center">
            <Button text={"Contact Me"} to={"https://wa.me/201145667099"} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
