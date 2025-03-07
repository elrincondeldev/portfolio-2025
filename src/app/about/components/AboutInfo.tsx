import { AnimatedBeamPersonal } from "./AnimatedBeamPersonal";
import Link from "next/link";
function AboutInfo() {
  return (
    <section className="flex flex-col lg:flex-row gap-5 w-full min-h-[620px]">
      <div className="flex flex-col gap-5 w-full lg:w-3/5">
        <div className="flex items-center justify-center bg-white/30 h-[300px] backdrop-blur-sm w-full rounded-lg p-4 relative">
          <div className="w-full h-full flex items-center justify-center relative">
            <AnimatedBeamPersonal />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="bg-white/30 backdrop-blur-sm w-full md:w-2/5 h-[250px] md:h-[300px] rounded-lg relative">
            <div className="flex flex-col p-4">
              <p className="acorn text-2xl md:text-3xl font-bold">Studies</p>
              <p className="roboto text-sm md:text-base">
                I am a self-taught programmer. Two and a half years ago, I
                started learning on my own, and without any official degree, I
                have made it this far.
              </p>
            </div>
            <img
              src="/assets/jinwoo.svg"
              alt="Jinwoo"
              className="absolute bottom-0 right-0 w-24 md:w-auto"
            />
          </div>
          <div className="bg-white/30 backdrop-blur-sm w-full md:w-3/5 h-[250px] md:h-[300px] rounded-lg relative">
            <div className="flex flex-col p-4">
              <p className="acorn text-2xl md:text-3xl font-bold">My goal</p>
              <p className="roboto text-sm md:text-base">
                My goal is to become a key reference within my team, someone who
                contributes not only with technical skills but also with a
                broader, more strategic perspective.
              </p>
            </div>
            <img
              src="/assets/gojo.svg"
              alt="Gojo"
              className="absolute bottom-0 left-0 w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
      <Link
        href="https://www.instagram.com/elrincondeldev/"
        target="_blank"
        className="flex flex-col justify-between w-full lg:w-2/5 bg-white/30 backdrop-blur-sm lg:h-[620px] rounded-lg p-4"
      >
        <div className="flex flex-col mb-5 md:mb-0">
          <p className="acorn text-2xl md:text-3xl font-bold">
            Content creator
          </p>
          <p className="roboto text-sm md:text-base">
            I&apos;ve been creating content since 2022, and being able to share
            my passion with others is the most rewarding thing in the world. I
            want to inspire more people to join this wonderful industry.
          </p>
        </div>
        <img
          src="/assets/social.svg"
          alt="Social"
          className="w-full md:max-w-[300px] mx-auto lg:max-w-none"
        />
      </Link>
    </section>
  );
}

export default AboutInfo;
