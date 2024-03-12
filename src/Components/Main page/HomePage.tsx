import React from "react";
//import Types
import { CurrentPage } from "@/Utils/CurrentPage";
//import ActionButton
import ActionButton from "../shared/ActionButton";
//import motion
import { motion } from "framer-motion";
//import Image
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponserRedBull from "@/assets/SponsorRedBull.png";
import SponserForbes from "@/assets/SponsorForbes.png";
import SponserFortune from "@/assets/SponsorFortune.png";
import Link from "../shared/Link";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

function HomePage({ currentPage, setCurrentPage }: Props) {
  return (
    <motion.section
      id="home"
      className="bg-gray-20 py-10 h-full md:pb-0 gap-16 -z-50"
      onViewportEnter={() => setCurrentPage(CurrentPage.Home)}
    >
      {/* Home => text & image */}
      <div className="flex flex-col md:flex-row justify-center mx-auto w-5/6 items-center gap-10">
        {/*Text*/}
        <motion.div
          className="flex flex-col mt-24 md:basis-3/5 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <figure className="relative z-0">
            <div className="absolute before:-z-10 -top-20 -left-24 before:content-evolvetext before:hidden md:before:block -z-10"></div>
            <img className="z-10" src={HomePageText} alt="HomePagrText" />
          </figure>
          <p className="text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
          <div className="flex items-center gap-8">
            <ActionButton
              target={CurrentPage.Home}
              content="Join Now"
              setCurrentPage={setCurrentPage}
            />
            <AnchorLink
            className="text-sm font-bold text-primary-500 hover:text-secondary-500 underline duration-150"
              onClick={() => setCurrentPage(CurrentPage.ContactUs)}
              href={`#${CurrentPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </div>
        </motion.div>
        {/* Image */}
        <motion.figure
          className="z-20 flex md:ml-32 md:mt-10 md:basis:3/5 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="HomePageGraphic" />
        </motion.figure>
      </div>
      {/* Home => Sponser */}
      <div className="hidden md:block h-[150px] bg-primary-100 z-10  py-10 px-10 w-full">
        <div className="w-5/6 mx-auto flex items-center gap-60 ">
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={SponserRedBull} alt="SponserRedBull" />
          </motion.figure>
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={SponserForbes} alt="SponserForbes" />
          </motion.figure>
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={SponserFortune} alt="SponserFortune" />
          </motion.figure>
        </div>
      </div>
    </motion.section>
  );
}

export default HomePage;
