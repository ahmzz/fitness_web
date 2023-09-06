import { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedTitle } from "@/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
  selectedTitle: SelectedTitle;
  setSelectedTitle: (value: SelectedTitle) => void;
};

const Navbar = ({ selectedTitle, setSelectedTitle }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [menuToggle,setMenuToggle]=useState(false)
  const isAboveMediumScreen=useMediaQuery("(min-width:1060px)")

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-11/12`}>
          <div className={`${flexBetween}  w-full `}>
            <img src={logo} alt="Logo" />

            {isAboveMediumScreen?(<div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  title="Home"
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
                <Link
                  title="Benefits"
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
                <Link
                  title="Our Classes"
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
                <Link
                  title="Contact Us"
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
              </div>
              <div className={`${flexBetween} gap-8 font-bold`}>
                <p>Sign In</p>
                <ActionButton setSelectedTitle={setSelectedTitle}>Become a VALORANT</ActionButton>
              </div>
            </div>): (
              <button
              className=" rounded-full bg-prussian-blue p-2"
              onClick={()=>setMenuToggle(!menuToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-mint-green"/>

              </button>
            ) }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
