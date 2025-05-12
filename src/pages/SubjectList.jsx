import { useState } from "react";
import { useListSubjects } from "../hooks/useListSubjects.jsx";
import { useNavigate } from "react-router-dom";
import { SubjectCard } from "../components/SubjectCard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap


export const SubjectList = () => {
  const { subjects, isLoading, fetchSubjectsByFilter, fetchSubjects } = useListSubjects();
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/subjects/${id}`);
  };

  const handleCategorySearch = async (e) => {
    e.preventDefault();
    if (category === "") {
      await fetchSubjects();
    } else {
      await fetchSubjectsByFilter(category);
    }
  };

  return (
    <div className="min-vh-100 vw-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      {/* Barra de búsqueda y selección */}
      <div className="container mb-5 text-center">
        <h2 className="mb-4 font-weight-bold">Cursos</h2>
        <form onSubmit={handleCategorySearch} className="d-flex justify-content-center gap-2">
          <select
            className="form-select w-auto"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas las publicaciones</option>
            <option value="fecha">Fecha</option>
            <option value="Taller III">Taller III</option>
            <option value="Tecnologia III">Tecnologia III</option>
          </select>
          <button
            className="btn btn-warning text-dark font-weight-bold"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>

      {/* Mostrar materias */}
      {isLoading ? (
        <p className="text-center mt-6">Cargando materias...</p>
      ) : !subjects.length ? (
        <p className="text-center mt-6">No hay materias registradas.</p>
      ) : (
        <>
          <h2 className="text-center font-weight-bold mb-4">Materias Registradas</h2>
          <div className="container d-flex flex-wrap justify-content-center gap-4">
            {subjects.map((subject) => (
              <SubjectCard key={subject._id} subject={subject} onClick={handleClick} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
