import Image from "next/image";
const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto">
      <a href="/" className="relative h-4 w-16">
        <Image src="/images/logo.svg" fill={true} />
      </a>
      <nav>
        <ul className="flex items-center">
          <li>
            <a href=""></a>
            Home
          </li>
          <li>
            <a href="#">What is GPT?</a>
          </li>
          <li>
            <a href="#">Open AI</a>
          </li>
          <li>
            <a href="#">Case Studies</a>
          </li>
          <li>
            <a href="#">Library</a>
          </li>
        </ul>
      </nav>
      <div>
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>
      </div>
    </header>
  );
};

export default Header;
