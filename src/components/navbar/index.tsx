import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionBtn from '@/shared/ActionBtn';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  // media setup
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

  const navItems = (
    <>
      <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </>
  );

  return (
    <nav>
      {/* Main div */}
      <div className={`${navbarBackground} flex items-center justify-between fixed top-0 z-30 w-full py-6 transition-all duration-300`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-5">
            {/* Left side */}
            <img src={Logo} alt="logo" />
            {/* Right Side */}
            {isAboveMediumScreen ? (
              <div className="flex items-center justify-between w-full">
                {/* Nav Items */}
                <div className="flex items-center justify-between gap-8 text-sm">
                  {navItems}
                </div>
                <div className="flex items-center justify-center gap-5">
                  <p>Sign In</p>
                  <ActionBtn setSelectedPage={setSelectedPage}>Become a Member</ActionBtn>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu Modal */}
      {!isAboveMediumScreen && (
        <div
          className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl transition-transform duration-700 ease-in-out transform ${
            isMenuToggled ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
