import { useParams, useNavigate } from "react-router-dom";
import RegEditForm from "../ui/regEditForm";
import { useEffect, useState } from "react";
import api from "../../api";
import Modal from "../common/modal";

export default function EditCardPage() {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const [student, setStudent] = useState();
  const navigate = useNavigate();
  const handleToCardPage = () => {
    navigate(`/${id}`);
  };
  const handleSubmit = (data) => {
    api.users.update({ ...data, id: id }).then((data) => {
      setOpenModal(true);
      setTimeout(() => {
        handleToCardPage();
      }, 3000);
    });
  };

  useEffect(() => {
    api.users.getById(id).then((data) => {
      setStudent(data);
    });
  }, [id]);
  return (
    <>
      <div className="min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Редактировать
          </h2>
          {student && (
            <RegEditForm
              onSubmit={handleSubmit}
              student={student}
              onBack={handleToCardPage}
            />
          )}
        </div>
      </div>
      {openModal && <Modal />}
    </>
  );
}
