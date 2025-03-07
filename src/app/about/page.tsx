import AboutHeader from "./components/AboutHeader";
import AboutInfo from "./components/AboutInfo";
import AboutPersonalInfo from "./components/AboutPersonalInfo";

function page() {
  return (
    <main className="flex flex-col items-center gap-10 md:gap-20 max-w-[1200px] mx-auto mt-10 md:mt-20 px-4 sm:px-6 md:px-8 relative mb-[50px] md:mb-[100px]">
      <h1 className="acorn text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-bold text-center leading-tight md:leading-22 text-[#0083C4]">
        I&apos;m Jose.
      </h1>
      <AboutHeader />
      <AboutInfo />
      <AboutPersonalInfo />
    </main>
  );
}

export default page;
