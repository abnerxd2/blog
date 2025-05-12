import { useState } from "react";
import toast from "react-hot-toast";
import { createCommentRequest } from "../services/api"; // Asegúrate de que esta función esté correctamente definida en el servicio.

export const useCreateComment = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Función que crea un comentario
  const createComment = async (titulo, { name, content }) => {
    setIsLoading(true);
    try {
      // Enviar el objeto 'data' al backend
      const response = await createCommentRequest(titulo, {
        data: { autor: name, contenido: content, titulo },
      });

      if (response.error) {
        const msg = response.error.response?.data?.message || response.error.message;
        toast.error(msg);
        return null;
      }

      toast.success("Comentario agregado");
      return response.comentario; // Recibimos la data del comentario desde el backend
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { createComment, isLoading };
};
