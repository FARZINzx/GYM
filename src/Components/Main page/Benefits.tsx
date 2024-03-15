//import Button
import ActionButton from "../shared/ActionButton";
//import motion
import { motion } from "framer-motion";
//import Icon
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
//import Image
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
//import Array of Benefits
import BenefitsJson from "../BenefitsJson";
//import Types
import { BenefitsType } from "@/Utils/BenefitsType";
import { CurrentPage } from "@/Utils/CurrentPage";

const BenefitsDetail: Array<BenefitsType> = [
  {
    id: 0,
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    id: 1,
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    id: 2,
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function Benefits({ setCurrentPage }: Props) {
  return (
    <motion.section
      id="benefits"
      className="w-full mt-1=5 min-h-full py-20 "
      onViewportEnter={() => setCurrentPage(CurrentPage.Benefits)}
    >
      <div className="w-5/6 mx-auto ">
        {/* Text Part */}
        <motion.div
          className="flex flex-col gap-4 md:w-3/5 mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-3xl font-bold font-montserrat basis-3/5">
            MORE THAN JUST GYM.
          </h1>
          <p className="text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Boxs Part */}
        <motion.div
         className="flex flex-col md:flex-row justify-between gap-4 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {BenefitsDetail.map((item: BenefitsType) => (
            <BenefitsJson
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              setCurrentPage={setCurrentPage}
            />
          ))}
        </motion.div>
        {/* Image & Text Part */}
        <div className="flex flex-col md:flex-row mt-20">
          <motion.figure 
          className="flex justify-center items-center md:block"
          initial = "hidden"
          whileInView="visible"
          viewport={{once : true , amount : 0.5}}
          transition={{duration : .5}}
          variants={{
            hidden : {opacity : 0 , x:-50},
            visible : {opacity : 1 , x:0}
          }}
          >
            <img src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />
          </motion.figure>
          <motion.div className="basis-3/5 flex flex-col items-start justify-center gap-8 "
           initial = "hidden"
           whileInView="visible"
           viewport={{once : true , amount : 0.5}}
           transition={{duration : .5}}
           variants={{
             hidden : {opacity : 0 , x:100},
             visible : {opacity : 1 , x:0}
           }}
          >
            <h2 className=" relative font-montserrat text-3xl font-bold before:content-abstractwaves before:absolute before:-top-20 before:-left-10 ">
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </h2>
            <div className="flex flex-col gap-5 before:content-sparkles relative before:absolute before:-bottom-40 before:right-8 z-10 before:z-0">
              <p>
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
            <ActionButton
              target={CurrentPage.ContactUs}
              content="Join Now"
              setCurrentPage={setCurrentPage}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Benefits;
