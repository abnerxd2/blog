import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSubjectById } from "../services/api";
import { useNavigate } from "react-router-dom";
import { CommentForm } from "../components/CommentForm"; // Asegúrate de importar el formulario
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

export const SubjectDetail = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); 
  };

  useEffect(() => {
    const fetchSubject = async () => {
      const res = await getSubjectById(id);
      setSubject(res.data.subject); 
    };
    fetchSubject();
  }, [id]);

  if (!subject) return <p className="text-white text-center">Cargando detalle...</p>;

  return (
    <div className="min-vh-100 vw-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      <button
        onClick={handleBack}
        className="mb-4 btn btn-warning text-dark font-weight-bold"
      >
        ← Volver a la lista
      </button>

      <div className="container mt-4 p-4 bg-light text-dark rounded shadow">
        <h2 className="text-center font-weight-bold mb-4">{subject.titulo}</h2>
        <p className="mb-2">{subject.descripcion}</p>
        <p className="text-primary">Código: {subject.materia}</p>
      </div>

      {}
      <div className="container mt-4">
        <CommentForm subjectId={id} />
      </div>

      {}
    </div>
  );
};
