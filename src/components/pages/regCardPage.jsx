import RegEditForm from "../ui/regEditForm";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export default function RegCardPage() {
  const navigate = useNavigate();
  const handleToCardsPage = () => {
    navigate(`/`);
  };
  const handleSubmit = (data) => {
    api.users
      .addUser({ ...data, id: Date.now().toString() })
      .then(handleToCardsPage());
  };
  return (
    <>
      <div className="min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Создать карточку
          </h2>
          <RegEditForm onSubmit={handleSubmit} onBack={handleToCardsPage} />
        </div>
      </div>
    </>
  );
}
