import Navbar from "@/scenes/Navbar";
import { useEffect, useState } from "react";
import { SelectedTitle } from "@/types/types";

function App() {
  const [selectedTitle, setSelectedTitle] = useState<SelectedTitle>(
    SelectedTitle.HOME
  );
  const [menuTop, setMenuTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY === 0) {
        setMenuTop(true);
        setSelectedTitle(SelectedTitle.HOME);
      } 
      if(window.screenY!==0){
        setMenuTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className="app bg-mint-green">
      <Navbar
        menuTop={menuTop}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      />
    </div>
  );
}

export default App;
