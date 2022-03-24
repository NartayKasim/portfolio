import Title from "../title/Title";
import SubTitle from "../sub-title/SubTitle";
import ProjectLinks from "../project-links/ProjectLinks";
import Technologies from "../technologies/Technologies";
import Intro from "../intro/Intro";

import classes from "./Bottom.module.css";

interface BottomProps {
   title: string;
   subTitle: string;
   technologies: React.ReactNode[];
   intro: string;
   www: string;
   repo: string;
}

export default function Bottom({
   title,
   subTitle,
   technologies,
   intro,
   www,
   repo,
}: BottomProps) {
   return (
      <div className={classes.bottom}>
         <div className={classes.header}>
            <div className={classes.headerTop}>
               <div className={classes.titleWrapper}>
                  <Title title={title} />
               </div>
               <div className={classes.subTitleWrapper}>
                  <SubTitle subTitle={subTitle} />
               </div>
            </div>
            <div className={classes.headerBottom}>
               <div className={classes.linksWrapper}>
                  <ProjectLinks www={www} repo={repo} />
               </div>
            </div>
         </div>

         <div className={classes.body}>
            <Technologies technologies={technologies} />
         </div>

         <div className={classes.footer}>
            <Intro intro={intro} />
         </div>
      </div>
   );
}
