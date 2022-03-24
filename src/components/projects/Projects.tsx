import Project from "./project/Project";
import cards from "./cards";

import { v4 as uuidv4 } from "uuid";

import classes from "./Projects.module.css";

export default function Projects() {
   return (
      <div className={classes.projects}>
         <div className={classes.projectsHeader}>
            <span>here's some web i developed</span>
         </div>
         {cards.map((project) => (
            <div className={classes.projectWrapper} key={uuidv4()}>
               <Project {...project} />
            </div>
         ))}
      </div>
   );
}
