import PropTypes from "prop-types";

export const SubjectCard = ({ subject, onClick }) => {
  return (
    <div
      onClick={() => onClick(subject._id)}
      className="card bg-dark text-white border border-light cursor-pointer hover:bg-secondary transition"
      style={{ width: "18rem", backgroundColor: "#343a40" }}
    >
      <div className="card-body">
        <h3 className="card-title font-weight-bold">{subject.titulo}</h3>
        <p className="card-text">{subject.descripcion}</p>
        <p className="text-primary">Código: {subject.materia}</p>
      </div>
    </div>
  );
};

SubjectCard.propTypes = {
  subject: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    materia: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
