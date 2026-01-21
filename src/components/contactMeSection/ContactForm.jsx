import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { contactSection } from "../../lib/data";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const getRegisterOptions = (validation) => {
  if (!validation) {
    return {};
  }

  const options = {};

  if (validation.required) {
    options.required = validation.required;
  }

  if (validation.minLength) {
    options.minLength = validation.minLength;
  }

  if (validation.pattern?.value) {
    options.pattern = {
      value: new RegExp(validation.pattern.value),
      message: validation.pattern.message,
    };
  }

  return options;
};

const ContactForm = () => {
  const [success, setSuccess] = useState("");
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef(null);
  const formFields = contactSection.formFields;
  const defaultValues = formFields.reduce((values, field) => {
    values[field.name] = "";
    return values;
  }, {});

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
  });

  const onSubmit = async () => {
    if (isSent) {
      return;
    }

    clearErrors("root");
    setSuccess("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError("root", { message: "Email service is not configured." });
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      reset();
      setSuccess("Message sent successfully.");
      setIsSent(true);
    } catch (error) {
      console.log("FAILED...", error?.text || error);
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <div>
      {success && <p className="text-cyan text-center mb-4">{success}</p>}
      {errors.root?.message && (
        <p className="text-red-400 text-center mb-4">
          {errors.root.message}
        </p>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
  {formFields.map((field) => {
    const options = getRegisterOptions(field.validation);
    const error = errors[field.name];

    if (field.type === "textarea") {
      return (
        <div key={field.name} className="flex flex-col gap-2">
          <textarea
            rows={field.rows ?? 6}
            placeholder={field.placeholder}
            className="rounded-lg bg-newcolor p-2 text-brown text-lg"
                  {...register(field.name, options)}
          />
          {error?.message && (
            <p className="text-red-400 text-sm">{error.message}</p>
          )}
        </div>
      );
    }

    return (
      <div key={field.name} className="flex flex-col gap-2">
        <input
          type={field.type}
          placeholder={field.placeholder}
          className="h-12 rounded-lg bg-newcolor px-2 text-brown text-lg"
                {...register(field.name, options)}
        />
              {error?.message && (
                <p className="text-red-400 text-sm">{error.message}</p>
              )}
      </div>
    );
  })}

  <button
    type="submit"
    disabled={isSubmitting || isSent}
    className={`w-full rounded-lg border border-lightCyan text-white h-12 font-bold text-xl transition-all duration-500
      ${
        isSent
          ? "bg-green-600 cursor-not-allowed"
          : isSubmitting
          ? "bg-grey cursor-wait"
          : "hover:bg-darkCyan bg-cyan"
      }`}
  >
    {isSent ? "SENT" : isSubmitting ? "Sending..." : "SEND"}
  </button>
</form>
    </div>
  );
};

export default ContactForm;
