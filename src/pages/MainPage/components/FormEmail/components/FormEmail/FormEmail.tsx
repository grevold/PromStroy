import emailjs from "emailjs-com";

import s from "./FormEmail.module.css";

export function FormEmail() {
  function sendEmail(e: any) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <form className={s.root} onSubmit={sendEmail}>
      <input className={s.input} type="hidden" name="contact_number" />
      <label className={s.label}>Имя</label>
      <input className={s.input} type="text" name="from_name" />
      <label className={s.label}>Email</label>
      <input className={s.input} type="email" name="from_email" />
      <label className={s.label}>Сообщение</label>
      <textarea className={s.text} name="html_message" />
      <input className={s.button} type="submit" value="Отправить" />
    </form>
  );
}
