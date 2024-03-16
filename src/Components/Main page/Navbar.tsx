import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "../shared/Link";
import { CurrentPage } from "@/Utils/CurrentPage";
import ActionButton from "../shared/ActionButton";
import closeNavbar from "@/Context/CloseNavbar";

type Props = {
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

function Navbar({ currentPage, setCurrentPage }: Props) {
  const [isMenuToggles, setIsMenuToggles] = useState<boolean>(false);
  const [screenAbove1080, setScreenAbove1080] = useState(false);
  const [isMoreThenZero, setIsMoreThenZero] = useState<boolean>(false);

  useEffect(() => {
    const handleSizeOfScreen = () => {
      if (window.innerWidth > 1080) {
        setScreenAbove1080(true);
        setIsMenuToggles(false);
      } else {
        setScreenAbove1080(false);
      }
    };

    window.addEventListener("resize", handleSizeOfScreen);

    return () => window.removeEventListener("resize", handleSizeOfScreen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsMoreThenZero(true);
        setCurrentPage(CurrentPage.Home);
      } else if (window.scrollY === 0) {
        setIsMoreThenZero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <closeNavbar.Provider
      value={{
        isMenuToggles,
        setIsMenuToggles,
      }}
    >
      <nav>
        <div
          className={`fixed top-0 p-6 w-full z-30 ${isMoreThenZero ? "bg-primary-100 drop-shadow transition duration-150" : ""}`}
        >
          <div className="w-5/6 mx-auto  ">
            <div className="w-full gap-16 flex items-center justify-between ">
              {/* logo */}
              <figure className="">
                <img src={Logo} alt="Logo" />
              </figure>
              <div className="hidden md:flex w-full justify-between items-center gap-16 list-none text-sm  ">
                {/* left side of navbar */}
                <div className="flex item-center justify-center gap-6 font-montserrat">
                  <Link
                    page="Home"
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                  <Link
                    page="Benefits"
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                  <Link
                    page="Our Classes"
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                  <Link
                    page="Contact Us"
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
                {/* right side of navbar */}
                <div className="flex items-center justify-center gap-6 font-montserrat">
                  <button>Sign In</button>
                  <ActionButton
                    setCurrentPage={setCurrentPage}
                    target={CurrentPage.ContactUs}
                    content="Become a Member "
                  />
                </div>
              </div>
              {/* mobile menu button */}
              <button 
              className="block md:hidden rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggles(!isMenuToggles)}
              >
                <Bars3Icon
                  className="w-6 h-6 text-white"
                />
              </button>
            </div>
          </div>
        </div>
        {/*Mobile menu */}
        {!screenAbove1080 && isMenuToggles &&
         (<div
          className="w-[300px] fixed right-0 bottom-0 h-full bg-primary-100 drop-shadow-xl z-40 duration-200"
        >
          {/* close button */}
          <div className="w-full flex justify-end p-12">
            <XMarkIcon
              className="w-8 h-8 text-gray-400"
              onClick={() => setIsMenuToggles(!isMenuToggles)}
            />
          </div>
          {/* links in the mobile menu */}
          <div className="flex flex-col mx-auto gap-6  w-full justify-center ml-[30%] text-2xl">
            <Link
              page="Home"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Benefits"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Our Classes"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Contact Us"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>)
        }
      </nav>
    </closeNavbar.Provider>
  );
}

export default Navbar;
