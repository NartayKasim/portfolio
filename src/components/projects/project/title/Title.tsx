import classes from "./Title.module.css";

interface TitleProps {
   title: string;
}

export default function Title({ title }: TitleProps) {
   return <div className={classes.title}>{title}</div>;
}
