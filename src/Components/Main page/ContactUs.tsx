//import motion
import { motion } from "framer-motion";
//import Types
import { CurrentPage } from "@/Utils/CurrentPage";
//import Img
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
//import hook form
import { useForm } from "react-hook-form";

type Props = {
  setCurrentPage: (value: CurrentPage) => void;
};

function ContactUs({ setCurrentPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const submitHandler = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contactus"
      className="my-12 w-full"
    >
      <motion.div className="w-5/6 mx-auto"
        onViewportEnter={() => setCurrentPage(CurrentPage.ContactUs)}>
        {/* Text Part*/}
        <motion.div
          className="flex flex-col gap-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="font-bold text-3xl font-montserrat basis-3/5">
            <span className=" text-primary-500">JOIN NOW</span> TO GET IN SHAP
          </h1>
          <p>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* Form & Image*/}
        <div className="flex flex-col md:flex-row gap-8  my-10 justify-between">
          {/* Form*/}
          <motion.form
            target="_blank"
            onSubmit={submitHandler}
            action="https://formsubmit.co/5farzinhamzei@gmail.com"
            method="POST"
            className="basis-3/5"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <input
              type="text"
              className="input_Style"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 50,
                minLength: 2,
              })}
            />
            {errors.name && (
              <span className="text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 50 char."}
                {errors.name.type === "minLength" && "Min length is 2 char."}
              </span>
            )}
            <input
              type="email"
              className="input_Style"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <span className="text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </span>
            )}
            <textarea
              rows={4}
              cols={5}
              className="input_Style resize-none "
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <span className=" text-primary-500">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </span>
            )}
            <button
              className=" bg-secondary-500 flex items-center justify-start text-black hover:text-white duration-300 rounded-md py-2 px-16"
              type="submit"
            >
              SUBMIT
            </button>
          </motion.form>
          {/* Image*/}
          <motion.figure
            className="basis-2/5 z-10 relative mt-12 md:mt-0"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="before:absolute before:-z-10 before:-bottom-20 before:-left-28  before:content-evolvetext before:hidden md:before:block"></div>

            <img
              src={ContactUsPageGraphic}
              alt="ContactUsPageGraphic"
              className="w-full"
            />
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
