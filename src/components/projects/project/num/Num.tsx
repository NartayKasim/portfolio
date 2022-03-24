import classes from "./Num.module.css";

interface NumProps {
   num: string;
}

export default function Num({ num }: NumProps) {
   return <div className={classes.num}>{num}</div>;
}
