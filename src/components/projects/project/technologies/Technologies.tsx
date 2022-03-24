import { v4 as uuidv4 } from "uuid";

import classes from "./Technologies.module.css";

interface TechnologiesProps {
   technologies: React.ReactNode[];
}

export default function Technologies({ technologies }: TechnologiesProps) {
   return (
      <div className={classes.technologies}>
         {technologies.map((technology) => (
            <div key={uuidv4()} className={classes.technology}>
               {technology}
            </div>
         ))}
      </div>
   );
}
