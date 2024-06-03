import { api } from "../api/law.api";
const useContactHook = () => {
  const sendContact = async (
    name: string,
    email: string,
    subject: string,
    message: string
  ) => {
    try {
      const response = await api.post("/mailer", {
        name,
        email,
        subject,
        message,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return {
    sendContact,
  };
};

export default useContactHook;
