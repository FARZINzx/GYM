//import UseState
import { useState, useEffect } from "react";
//import Utils
import { CurrentPage } from "@/Utils/CurrentPage";
//import Motion
import { motion } from "framer-motion";
//import AnchorLink
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  key: number;
  title: string;
  icon: JSX.Element;
  description: string;
  setCurrentPage: (value: CurrentPage) => void;
};

function BenefitsJson({
  key,
  icon,
  title,
  description,
  setCurrentPage,
}: Props) {

  
  const [isUnder1080, setIsUnder1080] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1080) {
        setIsUnder1080(false);
      } else if (window.scrollY < 1080) {
        setIsUnder1080(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  

  return (
    <motion.div
      variants={childVariant}
      key={key}
      className="border-2 border-gray-100 rounded-md my-5 flex text-center px-5 py-16 justify-center flex-col gap-4 shadow-lg"
    >
      <div className="flex justify-center">
        <div className="rounded-full bg-primary-100 p-4 border-2 border-gray-100 hover:scale-95 duration-150">
          {icon}
        </div>
      </div>
      <div className="text-center w-full text-lg font-bold">{title}</div>
      <div className="font-yanone font-medium">{description}</div>
      <AnchorLink
        className="text-sm cursor-pointer font-bold text-primary-500 hover:text-secondary-500 underline duration-150"
        onClick={() => setCurrentPage(CurrentPage.ContactUs)}
        href={`#${CurrentPage.ContactUs}`}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
}

export default BenefitsJson;
