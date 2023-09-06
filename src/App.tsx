import Navbar from "@/scenes/Navbar";
import { useState } from "react";

function App() {

  const [selectedTitle,setSelectedTitle]=useState<string>('home')

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
