import classes from "./SubTitle.module.css";

interface SubTitleProps {
   subTitle: string;
}

export default function SubTitle({ subTitle }: SubTitleProps) {
   return <div className={classes.subTitle}>{subTitle}</div>;
}
