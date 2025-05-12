import { useState } from "react";
import { useCreateComment } from "../hooks/useCreateComment"; // Este hook es el que usas para enviar los comentarios
import toast from "react-hot-toast";

export const CommentForm = ({ subjectId }) => {
  const { createComment, isLoading } = useCreateComment();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await createComment(subjectId, { name, content });
    if (success) {
      setName("");
      setContent("");
    } else {
      toast.error("Error al agregar el comentario");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Escribe tu comentario"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isLoading ? "Enviando..." : "Comentar"}
      </button>
    </form>
  );
};
