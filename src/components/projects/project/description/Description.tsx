import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";

import classes from "./Description.module.css";

interface DescriptionProps {
   description: string[];
   images: string[];
   expand: boolean;
}

const expandDescription = {
   initial: {
      height: 0,
      overflow: "hidden",
      opacity: 0,
      transition: { duration: 0.2 },
   },
   animate: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.2 },
   },
   exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
   },
};

export default function Description({
   description,
   expand,
   images,
}: DescriptionProps) {
   return (
      <AnimatePresence>
         {expand && (
            <motion.div
               className={classes.description}
               variants={expandDescription}
               initial="initial"
               animate="animate"
               exit="exit"
            >
               <div className={classes.subHeader}>
                  <img src={images[0]} className={classes.screenshot} alt="" />
               </div>
               <div className={classes.list}>
                  {description.map((ul) => (
                     <li className={classes.row} key={uuidv4()}>
                        {ul}
                     </li>
                  ))}
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
