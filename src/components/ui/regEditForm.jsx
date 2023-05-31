import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import InputField from "../common/form/inputField";

function RegEditForm({ onSubmit, student, onBack }) {
  const [isDirty, setIsDirty] = useState(false);
  const [data, setData] = useState(
    student
      ? {
          firstName: student.firstName,
          lastName: student.lastName,
          year: student.year,
          portfolioUrl: student.portfolioUrl,
        }
      : {
          firstName: "",
          lastName: "",
          year: "2000",
          portfolioUrl: "",
        }
  );
  const [errors, setErrors] = useState({});
  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const handleChange = (target) => {
    if (!isDirty) {
      setIsDirty(true);
    }
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const validatorConfig = {
    firstName: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
      isName: {
        message: "Проверьте имя",
      },
    },
    lastName: {
      isRequired: {
        message: "Фамилия обязательна для заполнения",
      },
      isName: {
        message: "Проверьте фамилию",
      },
    },
    year: {
      isRequired: {
        message: "Обязательно укажите год рождения",
      },
      isStudentAge: {
        message: "Вы точно живы?",
      },
      isFuture: {
        message: "Вы из будущего?",
      },
    },
    portfolioUrl: {
      isRequired: {
        message: "Ссылка на портфолио обязательна",
      },
      isUrl: {
        message: "Пожалуйста скопируйте правильрную ссылку",
      },
    },
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return !Object.keys(errors).length;
  };
  const isValid = !Object.keys(errors).length && isDirty;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    onSubmit(data);
  };
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField
          id="firstName"
          name="firstName"
          type="text"
          label="Имя"
          onChange={handleChange}
          value={data.firstName}
          error={errors.firstName}
        />
        <InputField
          id="lastName"
          name="lastName"
          type="text"
          label="Фамилия"
          onChange={handleChange}
          value={data.lastName}
          error={errors.lastName}
        />
        <InputField
          id="year"
          name="year"
          type="number"
          label="Год рождения"
          onChange={handleChange}
          value={data.year}
          error={errors.year}
        />
        <InputField
          id="portfolioUrl"
          name="portfolioUrl"
          type="url"
          label="Портфолио"
          onChange={handleChange}
          value={data.portfolioUrl}
          error={errors.portfolioUrl}
        />
        <div>
          <button
            disabled={!isValid}
            type="submit"
            className="flex mb-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
          >
            Подтвердить
          </button>
          <button
            onClick={onBack}
            type="button"
            className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
          >
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegEditForm;
