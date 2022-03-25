import github from "../../assets/icons/github.png";
import email from "../../assets/icons/email.png";
import linkedin from "../../assets/icons/linkedin.png";
import resume from "../../assets/icons/resume.png";
import react from "../../assets/icons/react.png";
import typescript from "../../assets/icons/typescript.png";
import node from "../../assets/icons/node.png";
import redux from "../../assets/icons/redux.png";
import postgres from "../../assets/icons/postgres.png";
import framerMotion from "../../assets/icons/framerMotion.png";
import esBuild from "../../assets/icons/esBuild.png";
import monacoEditor from "../../assets/icons/monacoEditor.png";
import www from "../../assets/icons/www.png";

import githubHover from "../../assets/icons/hover/githubHover.png";
import gitHubLightHover from "../../assets/icons/hover/githubLightHover.png";
import emailHover from "../../assets/icons/hover/emailHover.png";
import linkedinHover from "../../assets/icons/hover/linkedinHover.png";
import resumeHover from "../../assets/icons/hover/resumeHover.png";
import wwwHover from "../../assets/icons/hover/wwwHover.png";

import classes from "./Badges.module.css";
import { useState } from "react";

interface WWWProps {
   address: string;
}

export function GitHub({ address }: WWWProps) {
   const [hover, setHover] = useState(false);

   const onGitHubClick = () => {
      window.open(address);
   };

   return (
      <div
         className={classes.row}
         onClick={onGitHubClick}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
      >
         {hover ? (
            <img src={githubHover} className={classes.icon} alt="" />
         ) : (
            <img src={github} className={classes.icon} alt="" />
         )}
         <span>github</span>
      </div>
   );
}

export function GitHubLight({ address }: WWWProps) {
   const [hover, setHover] = useState(false);

   const onGitHubClick = () => {
      window.open(address);
   };

   return (
      <div
         className={classes.row}
         id={classes.light}
         onClick={onGitHubClick}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
      >
         {hover ? (
            <img src={gitHubLightHover} className={classes.icon} alt="" />
         ) : (
            <img src={github} className={classes.icon} alt="" />
         )}
         <span>github</span>
      </div>
   );
}

export function Email() {
   const [hover, setHover] = useState(false);

   const onEmailClick = () => {
      window.scrollTo({ top: 10000, left: 0, behavior: "smooth" });
   };

   return (
      <div
         className={classes.row}
         id={classes.light}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onClick={onEmailClick}
      >
         {hover ? (
            <img src={emailHover} className={classes.icon} alt="" />
         ) : (
            <img src={email} className={classes.icon} alt="" />
         )}
         <span>email</span>
      </div>
   );
}

export function LinkedIn({ address }: WWWProps) {
   const [hover, setHover] = useState(false);

   const onLinkedInClick = () => {
      window.open(address);
   };

   return (
      <div
         className={classes.row}
         id={classes.light}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onClick={onLinkedInClick}
      >
         {hover ? (
            <img src={linkedinHover} className={classes.icon} alt="" />
         ) : (
            <img src={linkedin} className={classes.icon} alt="" />
         )}
         <span>linkedin</span>
      </div>
   );
}

export function Resume({ address }: WWWProps) {
   const [hover, setHover] = useState(false);

   const onResumeClick = () => {
      window.open(address);
   };

   return (
      <div
         className={classes.row}
         id={classes.light}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onClick={onResumeClick}
      >
         {hover ? (
            <img
               src={resumeHover}
               className={classes.icon}
               id={classes.resume}
               alt=""
            />
         ) : (
            <img
               src={resume}
               className={classes.icon}
               id={classes.resume}
               alt=""
            />
         )}

         <span>resume</span>
      </div>
   );
}

export function React() {
   return (
      <div className={classes.row}>
         <img src={react} className={classes.icon} alt="" />
         <span>react</span>
      </div>
   );
}

export function Typescript() {
   return (
      <div className={classes.row}>
         <img src={typescript} className={classes.icon} alt="" />
         <span>typescript</span>
      </div>
   );
}

export function Node() {
   return (
      <div className={classes.row}>
         <img src={node} className={classes.icon} alt="" />
         <span>node express</span>
      </div>
   );
}

export function Postgres() {
   return (
      <div className={classes.row}>
         <img src={postgres} className={classes.icon} alt="" />
         <span>postgresql</span>
      </div>
   );
}

export function Redux() {
   return (
      <div className={classes.row}>
         <img src={redux} className={classes.icon} alt="" />
         <span>redux</span>
      </div>
   );
}

export function RTK() {
   return (
      <div className={classes.row}>
         <img src={redux} className={classes.icon} alt="" />
         <span>redux toolkit</span>
      </div>
   );
}

export function FramerMotion() {
   return (
      <div className={classes.row}>
         <img src={framerMotion} className={classes.icon} alt="" />
         <span>Framer Motion</span>
      </div>
   );
}

export function ESBuild() {
   return (
      <div className={classes.row}>
         <img src={esBuild} className={classes.icon} alt="" />
         <span>ESBuild</span>
      </div>
   );
}
export function MonacoEditor() {
   return (
      <div className={classes.row}>
         <img src={monacoEditor} className={classes.icon} alt="" />
         <span>Monaco Editor</span>
      </div>
   );
}

export function WWW({ address }: WWWProps) {
   const [hover, setHover] = useState(false);

   const onLiveClick = () => {
      window.open(address);
   };
   return (
      <div
         className={classes.row}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onClick={onLiveClick}
      >
         {hover ? (
            <img src={wwwHover} className={classes.icon} alt="" />
         ) : (
            <img src={www} className={classes.icon} alt="" />
         )}
         <span>live</span>
      </div>
   );
}
