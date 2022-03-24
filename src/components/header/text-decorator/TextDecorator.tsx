import decorator from "../../../assets/header/decorator.svg";

import classes from "./TextDecorator.module.css";

export default function TextDecorator() {
   return (
      <div className={classes.textDecorator}>
         <img src={decorator} className={classes.decorator} />
      </div>
   );
}
