import Num from "../num/Num";

import classes from "./Top.module.css";

interface TopProps {
   num: string;
}

export default function Top({ num }: TopProps) {
   return (
      <div className={classes.top}>
         <Num num={num} />
      </div>
   );
}
