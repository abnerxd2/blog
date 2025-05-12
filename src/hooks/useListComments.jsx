import { useState, useEffect } from "react";
import { listComments } from "../services/api";

export const useListComments = (idMateria) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await listComments(idMateria);
        if (response.error) {
          setError(response.error);
        } else {
          setComments(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [idMateria]);

  return { comments, isLoading, error };
};
