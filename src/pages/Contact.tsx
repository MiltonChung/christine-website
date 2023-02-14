import * as React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Textarea } from "../components/TextArea";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import { LoadingIcon } from "../components/LoadingIcon";
import ContactIllustration from "../assets/icons/contact2.svg";
import { ReactComponent as Copy } from "../assets/icons/copy.svg";
import { ReactComponent as Email } from "../assets/icons/email.svg";
import { ReactComponent as Vimeo } from "../assets/icons/vimeo.svg";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const EMAIL = "christinelin1282@gmail.com";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const [copyStatus, setCopyStatus] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const toastifySuccess = () => {
    toast("🚀 Message sent! Thank you!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-form-success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data: Inputs) => {
    try {
      setLoading(true);
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );
      reset();
      toastifySuccess();
      setLoading(false);
      setFormSubmitted(true);
    } catch {
      toast.error(
        `Sorry, something went wrong. Try again or email me directly!`,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "toastify-custom error-toast",
        }
      );
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(EMAIL).then(
      () => {
        setCopyStatus(true);
        setTimeout(() => {
          setCopyStatus(false);
        }, 3000);
      },
      () => {
        toast.error(
          `Sorry, could not copy email. Try again or use the contact form.`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "toastify-custom error-toast",
          }
        );
      }
    );
  };

  return (
    <main id="contact">
      <h2>Contact Me</h2>

      <div className="contact-body">
        <div className="contact-body-left">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              name="name"
              label="Your Name"
              type="text"
              errors={errors}
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
                maxLength: {
                  value: 50,
                  message: "Please use 50 characters or less",
                },
              })}
            />

            <Input
              name="email"
              label="Email Address"
              type="email"
              errors={errors}
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email address",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please enter a valid email address",
                },
              })}
            />

            <Textarea
              name="message"
              label="Message"
              errors={errors}
              cols={30}
              rows={8}
              {...register("message", {
                required: {
                  value: true,
                  message: "Please enter a message",
                },
              })}
            />

            {loading ? (
              <button className="primary-button" disabled>
                <LoadingIcon />
              </button>
            ) : formSubmitted ? (
              <button type="submit" disabled className="primary-button">
                Thank you!
              </button>
            ) : (
              <button type="submit" className="primary-button">
                Send Message
              </button>
            )}
          </form>

          <h3 className="contact-divider">- OR -</h3>

          <div className="links-container">
            <div className="email-link">
              <a
                href={`mailto:${EMAIL}`}
                rel="noreferrer"
                className="tooltip-container"
              >
                <Email />
                <span>{EMAIL}</span>
                <span className="tooltip-popup">Open Mail app</span>
              </a>

              <button
                onClick={copyText}
                className="tooltip-container copy-button"
                aria-label="copy email"
              >
                <Copy className="email" />
                <span className="tooltip-popup">
                  {copyStatus ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>

            <div className="vimeo-link">
              <a
                href="https://vimeo.com/christinelin1282"
                target="_blank"
                rel="noreferrer"
              >
                <Vimeo />
                https://vimeo.com/christinelin1282
              </a>
            </div>
          </div>

          <ToastContainer />
        </div>

        <div className="contact-body-right">
          <img src={ContactIllustration} alt="contact illustration" />
        </div>
      </div>
    </main>
  );
};

export { Contact };
