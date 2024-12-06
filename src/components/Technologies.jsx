import { FaReact } from "react-icons/fa";  // ReactJS icon
import { SiC } from "react-icons/si";  // C language icon
import { SiCplusplus } from "react-icons/si";  // C++ language icon
import { SiMysql } from "react-icons/si";  // MySQL icon
import { SiOracle } from "react-icons/si";  // Oracle icon
import { SiHtml5 } from "react-icons/si";  // HTML5 icon
import { motion } from "framer-motion";

const iconVariants =(duration) => ({
    initial: {y: -10},
    animate: {y: [10, -10],
    transition: {duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse"},
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pd-24">
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial= {{opacity: 0, y: -100}}
        transition= {{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity: 0, x: -100}}
        transition= {{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiC className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-blue-600" />
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-yellow-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiOracle className="text-7xl text-orange-600" />
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiHtml5 className="text-7xl text-red-500" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies;
