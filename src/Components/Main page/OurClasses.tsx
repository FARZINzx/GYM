//import motion
import { motion } from "framer-motion";
//import Image
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
//import Types
import { ClassesType } from "@/Utils/ClassType";
import { CurrentPage } from "@/Utils/CurrentPage";
//import Components
import ClassesSlide from "../ClassesSlide";

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
};

const Classes: Array<ClassesType> = [
  {
    title: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    title: "Yoga Classes",
    image: image2,
  },
  {
    title: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    title: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    title: "Fitness Classes",
    image: image5,
  },
  {
    title: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

function OurClasses({ setCurrentPage }: Props) {
  return (
    <motion.section
      id="ourclasses"
      className="w-full bg-primary-100 py-40"
      onViewportEnter={() => setCurrentPage(CurrentPage.OurClasses)}
    >
      <div className="w-5/6 mx-auto gap-10">
        {/* Text part */}
        <motion.div
          className="flex flex-col items-start gap-8 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-3xl font-bold">OUR CLASSES</h1>
          <p className="font-yanone">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <motion.ul
            className="whitespace-nowrap "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {Classes.map((item: ClassesType) => (
              <ClassesSlide
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}

export default OurClasses;
