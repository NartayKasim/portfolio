import classes from "./TextAreaField.module.css";

interface TextAreaFieldProps {
   name: string;
   label: string;
   placeholder: string;
   value: string;
   required?: string;
   onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextAreaField({
   name,
   label,
   placeholder,
   value,
   required,
   onChange,
}: TextAreaFieldProps) {
   return (
      <div className={classes.textAreaField}>
         <label htmlFor={name} className={classes.label}>
            {label}
            {required}
         </label>
         <textarea
            className={classes.textarea}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
      </div>
   );
}
