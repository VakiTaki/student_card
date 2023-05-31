import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";

export default function CardPage() {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    api.users.getById(id).then((data) => {
      setStudent(data);
    });
  }, [id]);
  const handleToEditPage = () => {
    navigate(`/${id}/edit`);
  };
  const handleToCardsPage = () => {
    navigate(`/`);
  };
  const handleDelete = (id) => {
    api.users.deleteUser(id).then(handleToCardsPage);
  };
  const rednerPhrase = (yaersOld) => {
    if (yaersOld === 0) {
      return <span>Вам еще и года нет!</span>;
    }
    let wordSuf = "";
    if (yaersOld >= 5 && yaersOld <= 20) {
      wordSuf = "лет";
    } else {
      const rule = ["2", "3", "4"];
      const yaersOldArr = yaersOld.toString().split("").reverse();
      if (rule.includes(yaersOldArr[0])) {
        wordSuf = "года";
      } else {
        if (yaersOldArr[0] === "1") {
          wordSuf = "год";
        } else {
          wordSuf = "лет";
        }
      }
    }
    return (
      <span>
        {yaersOld} {wordSuf}
      </span>
    );
  };
  return (
    <div className="min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto  sm:max-w-lg lg:max-w-2xl">
        <div className=" mb-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Карточка студента
          </h2>
        </div>
        {student && (
          <>
            <div className="mt-6 border-t border-gray-100 whitespace-nowrap">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className=" text-2xl font-medium leading-6 text-gray-900">
                    Имя
                  </dt>
                  <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                    {student.firstName}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-2xl font-medium leading-6 text-gray-900">
                    Фамилия
                  </dt>
                  <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                    {student.lastName}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-2xl font-medium leading-6 text-gray-900">
                    Год рождения
                  </dt>
                  <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                    {student.year} ({rednerPhrase(2023 - student.year)})
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-2xl font-medium leading-6 text-gray-900">
                    Портфолио
                  </dt>
                  <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                    {student.portfolioUrl}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex mr-5  justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-0 sm:w-auto"
                onClick={() => {
                  handleToEditPage();
                }}
              >
                Изменить
              </button>
              <button
                type="button"
                className="inline-flex mr-5  justify-center rounded-md   bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-0 sm:w-auto"
                onClick={() => {
                  handleToCardsPage();
                }}
              >
                К списку
              </button>
              <button
                type="button"
                className="inline-flex mr-5  justify-center rounded-md   bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-0 sm:w-auto"
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Удалить
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
