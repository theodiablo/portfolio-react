import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

const ContactForm = () => {
  const { t } = useI18next();

  const nameInput = React.createRef();
  const emailInput = React.createRef();
  const messageInput = React.createRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();
    console.log(messageInput.current.value);

    axios
      .post("https://getform.io/f/5579c9c4-ebc6-4632-ab2c-64610939afe7", {
        name: nameInput.current.value,
        email: emailInput.current.value,
        message: messageInput.current.value,
      })
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <div
      className="contact-form container pb-5"
      style={{ maxWidth: 500 + "px" }}
    >
      <h3 className="pb-3">
        <Trans>Contact me</Trans>
      </h3>
      <Form
        onSubmit={handleSubmit}
        className="m-auto"
        style={{ maxWidth: 400 + "px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <Trans>Full Name</Trans>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder={t("Enter your full name")}
            name="name"
            ref={nameInput}
            disabled={loading}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <Trans>Email address</Trans>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder={t("Enter your email adress")}
            name="email"
            ref={emailInput}
            disabled={loading}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>
            <Trans>Message</Trans>
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder={t("Enter your messages")}
            name="message"
            rows={3}
            ref={messageInput}
            disabled={loading}
            required
          />
        </Form.Group>
        {success ? (
          <p className="text-success">
            <Trans>
              Thank you for reaching out. I will get back to you shortly!
            </Trans>
          </p>
        ) : (
          <Button variant="outline-primary" type="submit" disabled={loading}>
            <Trans>Send Message</Trans>
          </Button>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;
