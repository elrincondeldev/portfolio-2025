"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Work",
    href: "/#work",
    isHash: true,
  },
  {
    label: "Projects",
    href: "/#projects",
    isHash: true,
  },
  {
    label: "About",
    href: "/about",
    isHash: false,
  },
  {
    label: "Newsletter",
    href: "https://elrincondeldev.substack.com/",
    isHash: false,
  },
];

function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;

      const sections = ["work", "projects"];
      const viewportMiddle = window.innerHeight * 0.4;
      let closestSection = "";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - viewportMiddle);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      });

      if (window.scrollY < 100) {
        setActiveSection("work");
      } else {
        setActiveSection(closestSection || "");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavigation = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isHash: boolean
  ) => {
    e.preventDefault();

    if (isHash) {
      if (pathname !== "/") {
        await router.push("/");
        setTimeout(() => {
          const element = document.getElementById(href.substring(2));
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        const element = document.getElementById(href.substring(2));
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    } else if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  const isActive = (item: (typeof navItems)[0]) => {
    if (!pathname) return false;
    
    if (item.isHash) {
      if (pathname === "/") {
        if (item.href === "/#work" && !activeSection) return true;
        return activeSection === item.href.substring(2);
      }
      return false;
    } else {
      return pathname === item.href;
    }
  };

  return (
    <nav className="flex p-2 sm:p-4 w-full justify-center sticky top-0 z-50">
      <div className="flex items-center backdrop-blur-md bg-white/50 rounded-full px-1 sm:px-2 py-1 sm:py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavigation(e, item.href, item.isHash)}
            className={`hover:text-gray-600 transition-all duration-300 text-[#0082C4] w-[85px] sm:w-[120px] text-center py-1 sm:py-2 text-sm sm:text-base rounded-full ${
              isActive(item) ? "font-bold bg-[#FFFFFF99]" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
