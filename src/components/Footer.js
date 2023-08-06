import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-container bg-[#031B34]">
      <section className="flex flex-col justify-center items-center py-44">
        <h2 className="text-6xl leading-[5rem] mb-16 text-center font-extrabold text-transparent bg-main-gradient bg-clip-text">
          Do you want to step in to the future before others?
        </h2>
        <Link
          href="#"
          className="text-lg hover:no-underline px-6 rounded py-5 border border-white
          hover:bg-white hover:text-primary transition-colors duration-500"
        >
          Request Early Access
        </Link>
      </section>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6">
          <Link href="/" className="relative inline-block h-8 w-28 mb-6">
            <Image src="/images/logo.svg" fill={true} />
          </Link>
          <p className="text-xs">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="col-span-6 mt-14 lg:mt-0 lg:col-span-2">
          <h4 className="text-sm mb-9 font-bold">Links</h4>
          <ul className="flex flex-col gap-y-7 text-xs font-medium">
            <li>
              <Link href="#">Overons</Link>
            </li>
            <li>
              <Link href="#">Social Media</Link>
            </li>
            <li>
              <Link href="#">Counters</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 mt-14 lg:mt-0 lg:col-span-2">
          <h4 className="text-sm mb-9 font-bold">Company</h4>
          <ul className="flex flex-col gap-y-7 text-xs font-medium">
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 mt-14 lg:mt-0 lg:col-span-2">
          <h4 className="text-sm mb-9 font-bold">Get in touch</h4>
          <ul className="flex flex-col gap-y-7 text-xs font-medium">
            <li>
              <a
                href="https://maps.google.com/maps?q=Crechterwoord+K12+182+DK+Alknjkcb"
                target="_blank"
              >
                Crechterwoord K12 182 DK Alknjkcb
              </a>
            </li>
            <li>
              <a href="tel:085-132567">085-132567</a>
            </li>
            <li>
              <a href="mailto:info@payme.net">info@payme.net</a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 flex flex-col items-center py-20 pb-7 text-center text-xs font-medium">
          <p>© 2021 GPT-3. All rights reserved.</p>
          <p className="mt-5 mb-2">
            <span>Developped by &nbsp;</span>
            <a
              href="https://rifkyniyas.vercel.app/"
              target="_blank"
              className="font-bold text-primary"
            >
              Rifky Niyas
            </a>
          </p>
          <p>
            <span>Designed by &nbsp;</span>
            <a
              href="https://www.arshakir.com/"
              target="_blank"
              className="font-bold text-primary"
            >
              A.R. Shakir
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
