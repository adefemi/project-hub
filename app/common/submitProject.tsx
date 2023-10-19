import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "./closeIcon";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

// Define your modal component
const SubmitProject = ({
  isOpen,
  onClose,
  id,
}: {
  isOpen: boolean;
  id: string;
  onClose: () => void;
}) => {
  // Define your animation variants
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
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
            <InputField label="Full Name" />
            <InputField label="Email Address" />
            <InputField label="Testing Link" />
            <TextAreaField
              label="Repositories"
              placeholder="Specify your repos with their name, what they do and link"
            />
            <motion.div className="flex justify-center w-full">
              <button className="bg-tertiary mt-2 text-sm md:text-base text-white py-3 md:py-4 px-8 md:px-10 rounded-full buttonEnter">
                Submit
              </button>
            </motion.div>
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
    initial: {rotate: 0},
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
