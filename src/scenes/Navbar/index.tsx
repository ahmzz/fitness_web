import { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/Logo.png";
type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-11/12`}>
          <div className={`${flexBetween} border-red-400 w-full `}>
            <img src={logo} alt="Logo" />

            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Home</p>
                <p>Benefits</p>
                <p>Classes</p>
                <p>Contact Us</p>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a VALORANT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;