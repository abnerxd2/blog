import { useState, useEffect } from "react";
import { listSubjects as listSubjectsRequest, listSubjectsFilter } from "../services/api.jsx";
import toast from "react-hot-toast";

export const useListSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSubjects = async () => {
    setIsLoading(true);
    try {
      const response = await listSubjectsRequest();
      if (response.error) {
        const msg = response.e.response?.data?.message || response.e.message;
        toast.error("Error al obtener materias: " + msg);
        return;
      }
      setSubjects(response.data.subjects);
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubjectsByFilter = async (filtro) => {
    setIsLoading(true);
    try {
      const response = await listSubjectsFilter(filtro);
      if (response.error) {
        const msg = response.e.response?.data?.message || response.e.message;
        toast.error("Error al filtrar materias: " + msg);
        return;
      }
      setSubjects(response.data.materias);
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return { subjects, isLoading, fetchSubjects, fetchSubjectsByFilter };
};
