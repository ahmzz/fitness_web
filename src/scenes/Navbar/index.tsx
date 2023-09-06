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
  menuTop:boolean
};

const Navbar = ({menuTop, selectedTitle, setSelectedTitle }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [menuToggle, setMenuToggle] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const navBg=menuTop?"":"bg-prussian-blue"

  return (
    <nav >
      <div className={`${navBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-11/12`}>
          <div className={`${flexBetween}  w-full `}>
            <img src={logo} alt="Logo" />

            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
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
                  <ActionButton setSelectedTitle={setSelectedTitle}>
                    Become a VALORANT
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className=" rounded-full bg-prussian-blue p-2"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <Bars3Icon className="h-5 w-5 text-mint-green" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}

      {!isAboveMediumScreen && menuToggle && (
        <div className=" fixed right-0 bottom-0 z-40 h-full w-2/6 bg-prussian-blue transition-all duration-500">
          <div className=" flex justify-end p-12 ">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <XCircleIcon className="h-6 w-6 text-mint-green" />
            </button>
          </div>

          <div className=" ml-[25%] flex flex-col gap-10 text-xl text-mint-green ">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
