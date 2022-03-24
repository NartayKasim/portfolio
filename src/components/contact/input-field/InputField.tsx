import classes from "./InputField.module.css";

interface InputFieldProps {
   name: string;
   label: string;
   placeholder: string;
   value: string;
   required?: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
   name,
   label,
   placeholder,
   value,
   required,
   onChange,
}: InputFieldProps) {
   return (
      <div className={classes.inputField}>
         <label htmlFor={name} className={classes.label}>
            {label}
            {required}
         </label>
         <input
            type="text"
            name={name}
            placeholder={placeholder}
            className={classes.input}
            onChange={onChange}
            value={value}
         />
      </div>
   );
}
