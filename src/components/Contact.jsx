import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "./Title";

const Contac = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tt56u96",
        "template_8fe4ch9",
        form.current,
        "eHlfbo55JI65AzSfC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
    <div id="contact" className="flex justify-center bg-black-pearl-900 pb-10 pt-20">
        <Title text="Contact"/>
    </div>
      <div className="flex justify-center bg-black-pearl-900 pb-20 ">
        <div className="flex flex-col w-2/3 md:w-2/4 lg:w-2/4  bg-black-pearl-600 border-2 border-black-pearl-700 rounded-md ">
          <form className="flex flex-col " ref={form} onSubmit={sendEmail}>
            <label className="mx-4 my-2 text-xl text-white">Name</label>
            <input required className="mx-4 py-2 px-2" type="text" name="user_name" />
            <label className="mx-4 my-2 text-xl text-white">Email</label>
            <input required className="mx-4 py-2 px-2" type="email" name="user_email" />
            <label className="mx-4 my-2 text-xl text-white">Message</label>
            <textarea required className="mx-4 mb-6 py-2 px-2"  name="message" />
            <input required className="bg-cyan-500 py-6 cursor-pointer text-2xl text-white hover:shadow-xl hover:shadow-blue-500 transition duration-400" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contac;
