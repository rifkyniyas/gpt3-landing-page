"use client";
import { useState } from "react";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !emailPattern.test(email))
      return setEmailMessage("Please enter a valid email address.");
    setEmail("");
    setEmailMessage("Email submitted sucessfully");
  };

  return (
    <div className="mb-9">
      <form action="#" className="flex" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email Address"
          required
          className="bg-dark-blue lg:grow rounded-none rounded-t-md rounded-l-md outline-none px-6 py-4 lg:px-8 lg:py-6 lg:text-xl"
          onChange={handleEmailChange}
          value={email}
        />

        <button
          type="submit"
          className="bg-primary text-xl rounded-none rounded-r-md font-bold text-white px-6 py-4 lg:px-9 lg:py-5
              hover:bg-white hover:text-primary transition-colors duration-500"
        >
          Get Started
        </button>
      </form>
      {emailMessage && (
        <div className="flex items-center gap-x-4 mt-3">
          <p className="text-primary text-xs font-medium">{emailMessage}</p>
          <button
            className="text-sm underline hover:no-underline"
            onClick={() => setEmailMessage("")}
          >
            Ok
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailInput;
