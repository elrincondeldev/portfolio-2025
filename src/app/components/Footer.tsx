import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-10 items-center md:items-start roboto max-w-[1100px] justify-between mx-auto text-[#0083C4] py-10 px-10 md:px-0">
      <p>Made with love by El Rincón Del Dev</p>
      <div className="flex w-full md:w-auto justify-between items-start gap-16">
        <div className="flex flex-col gap-3">
          <p className="font-bold">Elsewhere</p>
          <Link
            href="https://github.com/elrincondeldev"
            target="_blank"
            className="cursor-pointer hover:text-[#306078] ease-in-out duration-300"
          >
            GitHub
          </Link>
          <a
            href="/assets/Jose Ramón Montes CV.pdf"
            download
            className="cursor-pointer hover:text-[#306078] ease-in-out duration-300"
          >
            CV
          </a>
          <Link
            href="https://www.linkedin.com/in/joseramonmontes/"
            target="_blank"
            className="cursor-pointer hover:text-[#306078] ease-in-out duration-300"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Contact</p>
          <a
            href="mailto:jrmh.business@gmail.com"
            className="cursor-pointer hover:text-[#306078] ease-in-out duration-300"
          >
            Message
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
