import React, { useState, ChangeEvent, FormEvent } from "react";

export const Input = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  interface Props {
    email: String;
    text: String;
  }
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(`Email: ${email}`);
    console.log(`Text: ${text}`);

    setEmail("");
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={text}
            onChange={handleText}
            className="form-control"
            id="exampleFormControlTextarea1"
          />
        </div>
      </form>
    </div>
  );
};
