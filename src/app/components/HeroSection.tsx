import Link from "next/link";

function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-5 md:gap-10 w-full">
      <div className="group flex flex-col lg:flex-row gap-5 lg:gap-10 bg-[#FFFFFF99] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] transition-all duration-300 hover:bg-[#FFFFFFCC] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer">
        <div className="flex flex-col justify-between gap-8 lg:gap-16 w-full lg:w-1/2">
          <div className="flex flex-col gap-5 lg:gap-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold acorn">
              Quality is not an option, it is a necessity.
            </h2>
            <div className="flex flex-col gap-3 md:gap-5 roboto text-base md:text-lg">
              <p>
                As a frontend developer, my goal is to build scalable,
                high-performance, and maintainable interfaces that provide
                seamless user experiences.
              </p>
              <p>
                I focus on writing clean, efficient, and modular code to ensure
                long-term sustainability and adaptability.
              </p>
            </div>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/joseramonmontes/"
              target="_blank"
              className="bg-gradient-to-r from-[#E2CCFF] to-[#B5C0FF] roboto px-4 md:px-5 py-3 rounded-full font-bold text-sm md:text-base cursor-pointer"
            >
              Know me better
            </Link>
          </div>
        </div>
        <img
          src="/assets/editor.png"
          alt="Editor"
          className="w-full lg:w-1/2 lg:absolute lg:right-[-20px] lg:top-[150px] transition-transform duration-300 group-hover:-translate-y-2 lg:group-hover:-translate-x-2"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-10 w-full">
        <div className="group flex flex-col gap-5 md:gap-10 bg-[#D6ABFF] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] w-full lg:w-7/12 transition-all duration-300 hover:bg-[#C090FF] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer">
          <div className="flex items-start gap-5 md:gap-10">
            <img
              src="/assets/metlabs.svg"
              alt="Metlabs"
              className="w-16 md:w-auto"
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold acorn">
              Currently a frontend developer at Metlabs.
            </h2>
          </div>
          <img
            src="/assets/mockWeb.svg"
            alt="Editor"
            className="w-1/2 absolute right-[-20px] bottom-[-30px] transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 w-[40rem] w-7/12"
          />
        </div>
        <Link
          href="/about"
          className="group flex flex-col gap-5 md:gap-10 bg-[#FFC6C7] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] w-full lg:w-5/12 transition-all duration-300 hover:bg-[#FFB0B1] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer"
        >
          <div className="flex items-start gap-5 md:gap-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold acorn">
              Read more about what I do.
            </h2>
            <img
              src="/assets/Arrow.svg"
              alt="Arrow"
              className="w-12 md:w-auto"
            />
          </div>
          <img
            src="/assets/mockMobile.svg"
            alt="Editor"
            className="w-[15rem] md:w-[22rem] mx-auto lg:mx-0 lg:absolute lg:bottom-[-400px] transition-transform duration-300 group-hover:-translate-y-4 lg:group-hover:-translate-y-8 lg:right-[30px]"
          />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
