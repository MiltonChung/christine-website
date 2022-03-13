import * as React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { LoadingIcon } from "../components/LoadingIcon";
import ContactIllustration from "../assets/icons/contact2.svg";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
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
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data: Inputs) => {
    try {
      setLoading(true);
      const templateParams = {
        to_name: "Christine",
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(
        "service_zv6jbkc",
        "template_vkyxola",
        templateParams,
        "user_ZBWpd3sfMyrTfSaBnJYM5"
      );
      reset();
      toastifySuccess();
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main id="contact">
      <h2>Contact Me</h2>

      <div className="contact-body">
        <div className="contact-body-left">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label>
              <p>Full Name:*</p>
              <input
                {...register("name", {
                  required: true,
                  maxLength: 40,
                })}
                placeholder="Your name"
              />
            </label>
            <small className="error">
              {errors.name?.type === "required" && (
                <span className="errorMessage">Required</span>
              )}
              {errors.name?.type === "maxLength" && (
                <span className="errorMessage">Max 40 characters</span>
              )}
            </small>

            <label>
              <p>Your Email:*</p>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                placeholder="example@gmail.com"
              />
            </label>
            <small className="error">
              {errors.email?.type === "required" && (
                <span className="errorMessage">Required</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
            </small>

            <label>
              <p>Subject:*</p>
              <input
                {...register("subject", { required: true, minLength: 2 })}
                placeholder="Job Opening"
              />
            </label>
            <small className="error">
              {errors.subject?.type === "required" && (
                <span className="errorMessage">Required</span>
              )}
              {errors.subject?.type === "minLength" && (
                <span className="errorMessage">Subject too short</span>
              )}
            </small>

            <label>
              <p>Message:*</p>
              <textarea
                {...register("message", { required: true, minLength: 6 })}
                placeholder="Hello! I saw that..."
                cols={30}
                rows={6}
              ></textarea>
            </label>
            <small className="error error-textbox">
              {errors.message?.type === "required" && (
                <span className="errorMessage">Required</span>
              )}
              {errors.message?.type === "minLength" && (
                <span className="errorMessage">Message too short</span>
              )}
            </small>

            {loading ? (
              <button className="primary-button" disabled>
                <LoadingIcon />
              </button>
            ) : (
              <button type="submit" className="primary-button">
                Send Message
              </button>
            )}
          </form>
          <ToastContainer />
        </div>

        <img src={ContactIllustration} alt="contact illustration" />
      </div>
    </main>
  );
};

export { Contact };
