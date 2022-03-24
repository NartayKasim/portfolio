import { WWW, GitHub } from "../../../badges/Badges";

import classes from "./ProjectLinks.module.css";

interface ProjectLinksProps {
   www: string;
   repo: string;
}

export default function ProjectLinks({ www, repo }: ProjectLinksProps) {
   return (
      <div className={classes.projectLinks}>
         <WWW address={www} />
         <GitHub address={repo} />
      </div>
   );
}
