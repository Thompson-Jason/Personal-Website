"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { ReactTyped } from "react-typed";
import { contactFormRateLimit } from "@/util/rateLimit";

const ContactPage = () => {
  const refForm: MutableRefObject<HTMLFormElement | null> = useRef(null);

  const [success, setSuccess] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [sending, setSending] = React.useState<boolean>(false);

  const serviceID: string = process.env.NEXT_PUBLIC_SERVICE_ID || "";
  const templateID: string = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
  const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  // Validate required environment variables
  React.useEffect(() => {
    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing required environment variables for EmailJS");
      setError(true);
    }
  }, [serviceID, templateID, publicKey]);

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

    if (!refForm.current) {
      setError(true);
      return;
    }

    // Check rate limiting
    const userIdentifier = "default"; // In a real app, you'd use IP or user ID
    if (!contactFormRateLimit.canAttempt(userIdentifier)) {
      const remainingTime = Math.ceil(
        contactFormRateLimit.getRemainingTime(userIdentifier) / 1000
      );
      setError(true);
      console.warn(
        `Rate limit exceeded. Try again in ${remainingTime} seconds.`
      );
      return;
    }

    setSending(true);
    setError(false);
    setSuccess(false);

    sendForm(serviceID, templateID, refForm.current, publicKey).then(
      () => {
        setSuccess(true);
        setSending(false);
        // Reset form
        if (refForm.current) {
          refForm.current.reset();
        }
      },
      () => {
        setError(true);
        setSending(false);
      }
    );
  };

  return (
    <div
      className={`flex flex-col lg:flex-row justify-center items-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl overflow-hidden text-primary-text ${
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
        <form ref={refForm} onSubmit={sendEmail} className="w-full max-w-xl">
          <ul className="rounded-xl text-xl flex flex-col gap-6 sm:gap-8 justify-center p-6 sm:p-10 md:p-12 lg:p-16">
            <li>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-transparent border-b-2 border-b-primary-bg outline-none focus:border-b-primary-accent transition-colors"
              />
            </li>
            <li>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b-2 border-b-primary-bg outline-none focus:border-b-primary-accent transition-colors"
              />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
                className="w-full bg-transparent border-b-2 border-b-primary-bg outline-none focus:border-b-primary-accent transition-colors"
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
                className="w-full bg-transparent border-b-2 border-b-primary-bg outline-none focus:border-b-primary-accent transition-colors min-h-28"
              ></textarea>
            </li>
            <li className="flex flex-row items-center pt-2">
              <input
                type="submit"
                disabled={sending}
                className={`rounded-md px-4 py-1 text-primary-secondary transition-colors ${
                  sending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-success hover:bg-primary-success/80 hover:animate-pulse"
                }`}
                value={sending ? "Sending..." : "Send"}
              />
            </li>
            {success && (
              <div
                className="text-primary-success font-semibold text-left"
                role="alert"
              >
                ✓ Your message has been sent successfully!
              </div>
            )}
            {error && (
              <div
                className="text-primary-error font-semibold text-left"
                role="alert"
              >
                ✗ Something went wrong! Please try again.
              </div>
            )}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
