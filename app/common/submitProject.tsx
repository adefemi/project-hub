import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "./closeIcon";
import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";
import { domain } from "../network";
import axios from "axios";
import { toast } from "react-toastify";

// Define your modal component
const SubmitProject = ({
  isOpen,
  onClose,
  id,
  getActiveProject
}: {
  isOpen: boolean;
  id: string;
  onClose: () => void;
  getActiveProject: () => void;
}) => {
  // Define your animation variants
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios
      .post(`${domain}submission-url/`, {
        ...data,
        project_id: id,
      })
      .catch((err) => {
        toast(err.response.data.message, {type: "error"});
      });

    if (res) {
      toast("Submission successful", {type: "success"});
      getActiveProject()
      onClose();
    }
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            className="modal-content bg-white rounded-lg p-8 w-full max-w-lg relative"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.5, type: "spring", ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // Prevents the modal from closing when the content is clicked
          >
            <motion.div>
              <CloseIcon
                onClick={onClose}
                className="cursor-pointer absolute right-3 top-3 w-7"
              />
            </motion.div>
            <motion.h1
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="text-xl md:text-xl font-bold text-main mt-2"
            >
              Project Submission
            </motion.h1>
            <div className="mt-2 md:mt-6" />
            <form onSubmit={onSubmit}>
              <InputField
                label="Full Name"
                onChange={onChange}
                name="fullname"
                required
              />
              <InputField
                label="Email Address"
                onChange={onChange}
                name="email"
                type="email"
                required
              />
              <InputField
                label="Testing Link"
                onChange={onChange}
                name="testinglink"
                placeholder="starts with https:// or http://"
                required
              />
              <TextAreaField
                label="Repositories"
                name="repositories"
                onChange={onChange}
                placeholder="Repo Link - Function"
                required
              />
              <motion.div className="flex justify-center w-full">
                <button className="bg-tertiary mt-2 text-sm md:text-base text-white py-3 md:py-4 px-8 md:px-10 rounded-full buttonEnter">
                  {loading ? <LoadingIcon /> : "Submit"}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function InputField({ label, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col mb-5">
      <label className="mb-2 font-regular text-base text-tertiary text-opacity-90">
        {label}
      </label>
      <input
        className="border py-3 px-3 text-tertiary border-tertiary border-opacity-20 rounded-lg"
        {...rest}
      />
    </div>
  );
}

function TextAreaField({ label, ...rest }: TextAreaFieldProps) {
  return (
    <div className="flex flex-col mb-5">
      <label className="mb-2 font-regular text-base text-tertiary text-opacity-90">
        {label}
      </label>
      <textarea
        rows={3}
        className="border py-3 px-3 text-tertiary border-tertiary border-opacity-20 rounded-lg"
        {...rest}
      />
    </div>
  );
}

const LoadingIcon = () => {
  const spinnerVariants = {
    initial: { rotate: 0 },
    spin: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="w-5 h-5 border-2 border-opacity-0 border-r-white border-t-white border-l-white rounded-full"
      variants={spinnerVariants}
      initial="initial"
      animate="spin"
    />
  );
};

export default SubmitProject;
