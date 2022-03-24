import { AnimatePresence, motion } from "framer-motion";
import classes from "./BoxShadow.module.css";

interface BoxShadowProps {
   expand: boolean;
}

const focus = {
   initial: {
      opacity: 0,
      transition: { duration: 0.2 },
   },
   animate: {
      opacity: 1,
      transition: { duration: 0.2 },
   },
   exit: {
      opacity: 0,
      transition: { duration: 0.2 },
   },
};

export default function BoxShadow({ expand }: BoxShadowProps) {
   return (
      <AnimatePresence>
         {expand && (
            <motion.div
               className={classes.boxShadow}
               variants={focus}
               initial="initial"
               animate="animate"
               exit="exit"
            />
         )}
      </AnimatePresence>
   );
}
