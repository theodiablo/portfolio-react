import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Row } from "react-bootstrap";
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
    <div className="contact-form container pb-5">
      <Row className="justify-content-center">
        <div className="col-xl-5 col-lg-6 col-md-8">
          <div className="text-center">
            <h3 className="pb-3">
              <Trans>Let's Get In Touch!</Trans>
            </h3>
            <hr className="divider my-4 mx-auto" />
            <p className="text-muted mb-5">
              <Trans i18nKey="contact.description">
                Ready to start your next project with us, or you are wondering
                if we could help you? Send us a message and we will get back to
                you as soon as possible!
              </Trans>
            </p>
          </div>
          <Form onSubmit={handleSubmit} className="m-auto">
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
              <Button
                variant="outline-primary"
                type="submit"
                disabled={loading}
              >
                <Trans>Send Message</Trans>
              </Button>
            )}
          </Form>
        </div>
      </Row>
    </div>
  );
};

export default ContactForm;
