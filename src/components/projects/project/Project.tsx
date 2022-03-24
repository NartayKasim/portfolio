import { CardsObj } from "../cards";
import { useState } from "react";

import Top from "./top/Top";
import Bottom from "./bottom/Bottom";
import Description from "./description/Description";
import BoxShadow from "./box-shadow/BoxShadow";

import classes from "./Project.module.css";
import Expand from "./expand/Expand";

export default function Project(props: CardsObj) {
   const {
      title,
      subTitle,
      num,
      intro,
      technologies,
      description,
      images,
      www,
      repo,
   } = props;
   const [displayState, setDisplayState] = useState("");

   const toggleState = (title: string) => {
      if (displayState === title) {
         setDisplayState("");
      } else {
         setDisplayState(title);
      }
   };

   return (
      <div className={classes.project}>
         <div className={classes.card}>
            <BoxShadow expand={displayState === title ? true : false} />
            <Top num={num} />
            <Bottom
               title={title}
               subTitle={subTitle}
               technologies={technologies}
               intro={intro}
               www={www}
               repo={repo}
            />
            <Expand
               expand={displayState}
               title={title}
               toggleExpand={toggleState}
            />
            <Description
               description={description}
               images={images}
               expand={displayState === title ? true : false}
            />
         </div>
      </div>
   );
}
