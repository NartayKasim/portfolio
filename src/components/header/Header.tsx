import Name from "./name/Name";
import Statement from "./statement/Statement";
import Links from "./links/Links";
import TextDecorator from "./text-decorator/TextDecorator";

import classes from "./Header.module.css";

export default function Header() {
   return (
      <div className={classes.headerOuter}>
         <div className={classes.headerInner}>
            <div className={classes.nameWrapper}>
               <Name />
            </div>

            <div className={classes.statementWrapper}>
               <Statement />
            </div>

            <div className={classes.linksWrapper}>
               <Links />
            </div>

            <div className={classes.textDecoratorWrapper}>
               <TextDecorator />
            </div>
         </div>
      </div>
   );
}
