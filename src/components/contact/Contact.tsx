import InputField from "./input-field/InputField";
import TextAreaField from "./textarea-field/TextAreaField";
import SubmitMessage from "./submit-message/SubmitMessage";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validateForm from "./formValidator";

import classes from "./Contact.module.css";

export default function Contact() {
   const formRef = useRef(null);
   const [form, setForm] = useState({
      name: "",
      email: "",
      organization: "",
      message: "",
   });

   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

   const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
   const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
   const USER_ID = process.env.REACT_APP_USER_ID;

   const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
   ) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const envLoaded = SERVICE_ID && TEMPLATE_ID && USER_ID;
      if (!envLoaded)
         return setError(
            "There was an error while trying to process the request."
         );
      const validation = validateForm({ ...form });
      if (validation.length === 0) {
         if (formRef.current !== null) {
            emailjs
               .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
               .then(
                  (result) => {
                     handleClear();
                     setSuccess("Message Sent");
                  },
                  (e) => {
                     setError(
                        "There was an error while trying to process the request."
                     );
                  }
               );
         }
      } else {
         setError(validation);
      }
   };

   const handleClear = () => {
      const initialState = {
         name: "",
         email: "",
         organization: "",
         message: "",
      };
      setForm({ ...initialState });
   };

   useEffect(() => {
      if (error.length > 0) {
         setTimeout(() => {
            setError("");
         }, 5000);
      } else if (success.length > 0) {
         setTimeout(() => {
            setSuccess("");
         }, 5000);
      }
   }, [error, success]);

   return (
      <section className={classes.contact}>
         <div className={classes.title}>contact me</div>
         <form className={classes.body} ref={formRef} onSubmit={handleSubmit}>
            <InputField
               name="name"
               label="Name"
               placeholder="Name"
               value={form["name"]}
               required="*"
               onChange={handleChange}
            />
            <InputField
               name="email"
               label="Email"
               placeholder="Email"
               value={form["email"]}
               required="*"
               onChange={handleChange}
            />
            <InputField
               name="organization"
               label="Organization"
               placeholder="Organization"
               value={form["organization"]}
               required=""
               onChange={handleChange}
            />
            <TextAreaField
               name="message"
               label="Message"
               placeholder="Message"
               value={form["message"]}
               required="*"
               onChange={handleChange}
            />
            <div className={classes.buttons}>
               <button className={classes.button} onClick={handleClear}>
                  Clear
               </button>
               <input type="submit" className={classes.button} value="Send" />
            </div>
            <SubmitMessage error={error} success={success} />
         </form>
      </section>
   );
}
