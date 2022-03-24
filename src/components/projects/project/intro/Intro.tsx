import classes from "./Intro.module.css";

interface IntroProps {
   intro: string;
}

export default function Intro({ intro }: IntroProps) {
   return <div className={classes.intro}>{intro}</div>;
}
