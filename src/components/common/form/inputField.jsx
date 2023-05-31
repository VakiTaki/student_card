import React from "react";

function InputField({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
}) {
  const isInvalidClass = () => {
    return (
      "block w-full rounded-md border-2 py-1.5 px-2 text-gray-900 shadow-sm focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 " +
      (error ? " border-red-500 " : " border-green-500 ")
    );
  };
  const handleChange = (e) => {
    onChange({ name, value: e.target.value });
  };
  return (
    <div>
      <label
        htmlFor="firstName"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder || ""}
          autoComplete={name}
          className={isInvalidClass()}
        />
      </div>
      {error && <p className=" text-red-500 text-sm my-1">{error}</p>}
    </div>
  );
}

export default InputField;
