import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CardPage from "./cardPage";
import api from "../../api/";

function CardsPage() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    api.users.fetchAll().then((data) => setStudents(data));
  });
  const handleToAddUser = () => {
    navigate("/reg");
  };
  if (id) {
    return <CardPage id={id} students={students} />;
  }
  return (
    <div className="min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto  sm:max-w-lg lg:max-w-2xl">
        <div className=" mb-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Карточки студентов
          </h2>
          {!students.length && (
            <div className="mb-2 ">
              <div className=" flex justify-between">
                <h3 className=" inline-block text-2xl font-semibold leading-7 tracking-tight text-blue-900">
                  Загрузка...
                </h3>
              </div>
            </div>
          )}
        </div>
        <ul role="list">
          {students.map((person, index) => (
            <div key={person.id} className=" rounded-md shadow-md">
              <li className="mb-2 ">
                <div className=" flex justify-between">
                  <h3 className=" inline-block text-2xl font-semibold leading-7 tracking-tight text-blue-900 mr-5">
                    <Link to={`/${person.id}`}>
                      {index + 1}.{person.firstName} {person.lastName}
                    </Link>
                  </h3>
                  <span className=" inline-block text-xl  text-black break-all">
                    Портфолио: {person.portfolioUrl}
                  </span>
                </div>
              </li>
            </div>
          ))}
        </ul>
        <div className=" mt-5">
          <button
            type="button"
            className="inline-flex  justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-0 sm:w-auto"
            onClick={() => {
              handleToAddUser();
            }}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
