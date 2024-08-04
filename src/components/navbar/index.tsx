import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";

type Props = { 
  selectedPage : string;
  setSelectedPage: (value: string) => void}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const navItems = <>
    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </>
  return (
    // Navbar 
<nav>
    {/* main div */}
    <div className="flex items-center justify-between fixed top-0 z-30 w-full py-6">
    <div className="flex items-center justify-between mx-auto w-5/6">
    <div className="flex items-center justify-between w-full gap-5">
        {/* Left side */}
        <img src={Logo} alt="logo" />
        {/* Right Side */}
        <div className="flex items-center justify-between w-full">
            {/* Nav Items */}
            <div className="flex items-center justify-between gap-8 text-sm">
              {navItems}
            </div>
            <div className="flex items-center justify-center gap-5">
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
        </div>
    </div>
    </div>
    </div>
</nav>
)
}

export default Navbar