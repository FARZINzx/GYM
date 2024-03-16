//import motion
import { motion } from "framer-motion";


type Props = {
     title : string;
     description?:string;
     image:string
}

const ClassesSlide = ({title , description , image}: Props) => {
  return (
    <motion.li className='relative mx-5 inline-block md:h-[380px] md:w-[450px] w-72'
      initial = "hidden"
      whileInView="visible"
      viewport={{once : true , amount : 0.5}}
      transition={{duration : .3}}
      variants={{
        hidden : {opacity : 0 , scale : 0.9},
        visible : {opacity : 1 , scale : 1}
      }}
    >
      <div className=' rounded-md absolute p-5 z-20 bottom-0 top-0 right-0 left-0 opacity-0 gap-8 flex flex-col bg-primary-300 text-white transition duration-300 hover:opacity-90 whitespace-normal justify-center items-center  '>
        <span className='text-2xl'>{title}</span>
        <span className=''>{description}</span>
      </div>
      <img className='rounded-md ' src={image} alt={`${image}`}/>
    </motion.li>
  )
}

export default ClassesSlide