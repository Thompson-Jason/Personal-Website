"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { ReactTyped } from "react-typed";

const ContactPage = () => {
  const refForm: any = useRef();

  const [success, setSuccess] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [sending, setSending] = React.useState<boolean>(false);

  const serviceID: string = process.env.NEXT_PUBLIC_SERVICE_ID || "";
  const templateID: string = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
  const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  const typedText: Array<string> = ["Contact Me!"];

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    sendForm(serviceID, templateID, refForm.current, publicKey).then(
      () => {
        setSuccess(true);
      },
      () => {
        setError(true);
      }
    );
  };

  return (
    <div
      className={`flex flex-col lg:flex-row justify-center items-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl overflow-hidden text-[#cad3f5] ${
        isRendered ? "" : "hidden"
      }`}
    >
      <div className="flex w-full lg:w-1/2 items-center justify-center lg:h-full text-3xl font-semibold">
        <ReactTyped
          strings={typedText}
          typeSpeed={200}
          backDelay={10000}
          startDelay={700}
          loop
        />
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center lg:h-full">
        <form ref={refForm} onSubmit={sendEmail}>
          <ul className="rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
            <li>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b-2 border-b-[#181926] outline-none"
              />
            </li>
            <li>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b-2 border-b-[#181926] outline-none"
              />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
                className="bg-transparent border-b-2 border-b-[#181926] outline-none"
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
                className="bg-transparent border-b-2 border-b-[#181926] outline-none"
              ></textarea>
            </li>
            <li className="flex flex-row items-center">
              <input
                type="submit"
                className="hover:animate-pulse bg-[#a6da95] rounded-md px-4 py-1 text-[#181926]"
                value="Send"
              />
            </li>
            {success && (
              <div className="text-[#a6da95] font-semibold text-left">
                Your message has been sent successfully!
              </div>
            )}
            {error && (
              <div className="text-[#ed8796] font-semibold text-left">
                Something went wrong!
              </div>
            )}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
