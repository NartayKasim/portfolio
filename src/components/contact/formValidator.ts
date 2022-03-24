interface ValidateProps {
   name: string;
   email: string;
   message: string;
}

const validateForm = (fn: ValidateProps) => {
   if (fn.name.length === 0) {
      return "Please specify your name.";
   }
   if (fn.email.length === 0) {
      return "Please provide an email address.";
   }
   if (!fn.email.includes("@")) {
   }
   if (!fn.email.includes(".")) {
      return "Please provide a valid email address.";
   }
   if (fn.message.length === 0) {
      return "Please provide the contents to your message.";
   }
   return "";
};

export default validateForm;
