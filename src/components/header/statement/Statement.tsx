import classes from "./Statement.module.css";

export default function Statement() {
   return (
      <div className={classes.statement}>
         <div className={classes.desktop}>
            <div className={classes.row}>
               <span className={classes.bold}>I LOVE ALL THINGS </span>WITHIN
               AND ADJACENT TO THE
            </div>
            <div className={classes.row}>
               FIELD OF
               <span className={classes.bold}> WEB DEVELOPMENT.</span>
            </div>
         </div>
      </div>
   );
}
