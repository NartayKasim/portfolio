import { errorMonitor } from "events";
import classes from "./SubmitMessage.module.css";

interface SubmitMessageProps {
   error?: string;
   success?: string;
}

export default function SubmitMessage({ error, success }: SubmitMessageProps) {
   return (
      <div className={classes.message}>
         {error && error.length > 0 && (
            <div className={classes.error}>{error}</div>
         )}
         {success && success.length > 0 && (
            <div className={classes.success}>{success}</div>
         )}
      </div>
   );
}
