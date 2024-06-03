import ReCAPTCHA from "react-google-recaptcha";

import styles from "./Contact.module.css";
import { ButtonComponent } from "./button.component";
import { InputComponent } from "./input.component";
import { TextAreaComponent } from "./text-area.component";
import { useState } from "react";

const ContactComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const setValue = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  }

  const onChange = (value: string | null) => {
    if (value) {
      setIsEnabled(true);
    }
  };

  const onExpired = () => {
    setIsEnabled(false);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    //fetch api
    console.log(form)
  };

  return (
    <div className={styles.container} id="contact-us">
      <div className={styles.contactContainer}>
        <span className={styles.title}>FREE CONSULTATION</span>
        <form action="" className={styles.formContainer} onSubmit={onSubmit}>
          <InputComponent placeholder="NAME *" setValue={(value) => setValue("name", value) } />
          <InputComponent placeholder="EMAIL *" setValue={(value) => setValue("email", value) } />
          <InputComponent placeholder="SUBJECT *" setValue={(value) => setValue("subject", value) } />
          <TextAreaComponent placeholder="MENSAJE *" setValue={(value) => setValue("message", value) } />
          <ReCAPTCHA
            sitekey=""
            onChange={onChange}
            onExpired={onExpired}
          />
          <ButtonComponent isEnabled={isEnabled} onClick={onSubmit} />
        </form>
      </div>
      <div className={styles.businessContainer}>
        <img
          className={styles.imageContainer}
          src="contact/background.jpg"
          alt="background"
        />
      </div>
    </div>
  );
};

export default ContactComponent;
