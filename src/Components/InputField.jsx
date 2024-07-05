import PropTypes from "prop-types";

const InputField = ({
  label,
  placeholder,
  type,
  id,
  name,
  
  register,
  error,
  pattern,
  patternMessage,
  className,
  required,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <div className={`${error ? "border-red" : ""}`}>
      <input
        placeholder={placeholder}
        type={type || "text"}
        id={id}
        {...register(name, {
          ...(required && { required: `${id} is required` }),
          ...(pattern && {
            pattern: {
              value: pattern,
              message: patternMessage || "Invalid input format",
            },
          }),
        })}
        className={`w-full p-2   hover:border-btn focus:border-lightbtn focus:outline-none  ${
          className || ""
        }`}
      />
    </div>
    <p className="text-red text-xs tracking-normal w-5/6">
      {error?.message}
    </p>
  </div>
);

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
  pattern: PropTypes.instanceOf(RegExp),
  patternMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default InputField;
