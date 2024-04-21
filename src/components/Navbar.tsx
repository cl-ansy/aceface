"use client";

import { useState } from "react";
import { useSpringValue, animated } from "@react-spring/web";
import {
  AiFillGithub,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineMenu,
} from "react-icons/ai";

import Link from "next/link";

// import MobileDrawer from '@/components/app/MobileDrawer'
// import NavDropdown from "@/components/NavDropdown";

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const opacity = useSpringValue(1);

  const handleFullscreenClick = () => {
    opacity.start(Number(!collapsed));
    setCollapsed(!collapsed);
  };

  return (
    <>
      <animated.nav
        style={{ opacity }}
        className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-white px-5 m500:h-16 "
      >
        <div className="mx-auto flex w-[1252px] max-w-full px-12 items-center justify-between">
          {/* <MobileDrawer /> */}

          <div className="flex items-center gap-10 m400:flex-1 m400:pl-5">
            <Link className="text-4xl font-bold m500:text-xl" href={"/"}>
              ACEFACE
            </Link>
          </div>

          <div className="flex items-center gap-10 m700:hidden">
            {/* <Link className="text-xl font-bold" href="/docs">
            Docs
          </Link>

          <NavDropdown /> */}
          </div>

          <div className="flex w-40 items-center justify-end gap-5">
            <a
              target="_blank"
              href="https://github.com/cl-ansy/aceface"
              className="flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              <AiFillGithub className="h-6 w-6 m500:h-4 m500:w-4" />
            </a>
          </div>
        </div>
      </animated.nav>
      <div className="fixed right-4 top-6 z-10">
        <AiOutlineMenu
          onClick={handleFullscreenClick}
          className="h-8 w-8 m500:h-4 m500:w-4 cursor-pointer"
        />
      </div>
    </>
  );
}

export default Navbar;
