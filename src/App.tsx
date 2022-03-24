import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import classes from "./App.module.css";

function App() {
   return (
      <div className={classes.outerWrapper}>
         <div className={classes.innerWrapper}>
            <div className={classes.headerWrapper}>
               <Header />
            </div>
            <div className={classes.projectsWrapper}>
               <Projects />
            </div>
            <div className={classes.contactWrapper}>
               <Contact />
            </div>
         </div>
      </div>
   );
}

export default App;
