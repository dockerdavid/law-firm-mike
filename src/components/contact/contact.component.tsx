import ReCAPTCHA from "react-google-recaptcha";

import styles from "./Contact.module.css";
import { ButtonComponent } from "./button.component";
import { InputComponent } from "./input.component";
import { TextAreaComponent } from "./text-area.component";
import { useState } from "react";
import { useContactHook } from "../../hooks";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactComponent = () => {
  const notify = (message: string) =>
    toast.info( message, {
      transition: Bounce,
      autoClose: 5000,
      position: "bottom-right",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  //? Hook
  const { sendContact } = useContactHook();

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
  };

  const onChange = (value: string | null) => {
    if (value) {
      setIsEnabled(true);
    }
  };

  const onExpired = () => {
    setIsEnabled(false);
  };

  const clearForm = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const onSubmit = async (e: any) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.subject || !form.message) {
      notify("Please fill all the fields.");
      return;
    }
    const isEmailValid = validateEmail.test(form.email)

    if (!isEmailValid) {
      notify("Please enter a valid email.");
      return;
    }
    try {
      const response = await sendContact(
        form.name,
        form.email,
        form.subject,
        form.message
      );
      notify(response.message);
    } catch (error) {
      notify("Failed to send message. Please try again later.");
    }

    clearForm();
  };

  return (
    <div className={styles.container} id="contact-us">
      <div className={styles.contactContainer}>
        <span className={styles.title}>FREE CONSULTATION</span>
        <form action="" className={styles.formContainer} onSubmit={onSubmit}>
          <ToastContainer />
          <InputComponent
            placeholder="NAME *"
            setValue={(value) => setValue("name", value)}
            value={form.name}
          />
          <InputComponent
            placeholder="EMAIL *"
            setValue={(value) => setValue("email", value)}
            value={form.email}
          />
          <InputComponent
            placeholder="SUBJECT *"
            setValue={(value) => setValue("subject", value)}
            value={form.subject}
          />
          <TextAreaComponent
            placeholder="MENSAJE *"
            setValue={(value) => setValue("message", value)}
            value={form.message}
          />
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_CAPTCHA!}
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
