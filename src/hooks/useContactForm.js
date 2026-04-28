import { useState } from "react";

export const useContactForm = (formspreeId) => {
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("ERROR");
    }
  };

  return { status, sendEmail, setStatus };
};
