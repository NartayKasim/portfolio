import { Email, GitHubLight, LinkedIn, Resume } from "../../badges/Badges";

import classes from "./Links.module.css";

export default function Links() {
   return (
      <div className={classes.links}>
         <Email />
         <GitHubLight address={"https://github.com/NartayKasim/"} />
         <LinkedIn address={"https://www.linkedin.com/in/nartay-kasim"} />
         <Resume
            address={
               "https://drive.google.com/file/d/1hYvHQgnngM0UfAlTz_pYExL-g-gSa2RE/view?usp=sharing"
            }
         />
      </div>
   );
}
