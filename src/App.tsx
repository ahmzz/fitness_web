import Navbar from "@/scenes/Navbar";
import { useState } from "react";
import { SelectedTitle } from "@/types/types";


function App() {

  const [selectedTitle,setSelectedTitle]=useState<SelectedTitle>(SelectedTitle.HOME)

  return (
    <div className="app bg-mint-green">
      <Navbar
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      />
    </div>
  );
}

export default App;
