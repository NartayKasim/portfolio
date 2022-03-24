import classes from "./Expand.module.css";

interface ExpandProps {
   expand: string;
   title: string;
   toggleExpand: (title: string) => void;
}

export default function Expand({ expand, title, toggleExpand }: ExpandProps) {
   const expanded = "0px";
   const retracted = "0px 0px 5px 5px";
   return (
      <div
         className={classes.expand}
         onClick={() => toggleExpand(title)}
         style={{ borderRadius: expand !== title ? retracted : expanded }}
      >
         + {expand !== title ? "additional information" : "hide"}
      </div>
   );
}
