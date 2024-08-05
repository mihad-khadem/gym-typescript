import Navbar from "@/components/navbar"
import { useState } from "react";

// enum selected page
enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  contactUs = "contactUs"
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <>
      <div className="app bg-gray-50">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </div>
    </>
  );
}

export default App;
