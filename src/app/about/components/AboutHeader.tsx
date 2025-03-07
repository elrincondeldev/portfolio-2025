"use client";

import { useState, useEffect } from "react";

function AboutHeader() {
  const greetings = [
    { text: "Hi!", lang: "en" },
    { text: "¡Hola!", lang: "es" },
    { text: "Bonjour!", lang: "fr" },
    { text: "Ciao!", lang: "it" },
    { text: "Olá!", lang: "pt" },
    { text: "Hallo!", lang: "de" },
    { text: "こんにちは!", lang: "ja" },
    { text: "안녕하세요!", lang: "ko" },
    { text: "你好!", lang: "zh" },
    { text: "Привет!", lang: "ru" },
    { text: "Hej!", lang: "sv" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full">
      <div className="flex flex-col gap-5 md:gap-10 items-center bg-[#BCC6ED]/70 p-4 md:p-5 rounded-[30px] w-full md:w-2/5">
        <img src="/assets/avatar.png" alt="Avatar" className="w-full max-w-[20rem] md:max-w-[35rem]" />
        <p
          className={`acorn text-[2rem] md:text-[3rem] transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          lang={greetings[currentIndex].lang}
        >
          {greetings[currentIndex].text}
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 w-full md:w-4/5 h-full justify-between">
        <p className="acorn text-[2rem] md:text-[3rem] leading-tight md:leading-[3.2rem] text-[#0083C4] text-center md:text-left">
          I am a frontend developer working remotely from Vigo, Spain.
        </p>
        <div className="flex flex-col gap-5 roboto text-[#007EBE] text-base md:text-lg">
          <p>
            I am a frontend developer with experience in various areas of web
            development. Over the past two years, I have worked on projects that
            have allowed me to deepen my expertise in creating intuitive and
            optimized interfaces.
          </p>
          <p>
            While my main focus has been frontend development, I have recently
            developed a strong interest in digital product design. I am now
            steering my career in this direction, combining my technical
            knowledge with a more strategic vision to build impactful digital
            experiences.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;
