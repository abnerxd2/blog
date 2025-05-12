import axios from "axios";

const apiClient = axios.create({
baseURL: "http://127.0.0.1:3000/blog/v1",
timeout: 5000,
httpsAgent: false,


});

export const listSubjects = async () => {
    try {
        const res = await apiClient.get("/subjects");
        return { data: res.data }
    } catch (e) {
        return {
         error: true,
            e,
        };
    }
};

export const listSubjectsFilter = async (dato) => {
    try {
        const res = await apiClient.get(`/subjects/filter/${dato}`);
        return { data: res.data }
    } catch (e) {
        return {
         error: true,
            e,
        };
    }
};


export const getSubjectById = async (id) => {
    try {
        const res = await apiClient.get(`/subjects/${id}`);
        return { data: res.data }
    } catch (e) {
        return {
         error: true,
            e,
        };
    }
};


// api de parte de los comentario xd


export const createCommentRequest = async (titulo, { data }) => {
  try {
    const response = await apiClient.post(`/comments/add/${titulo}`, { data });
    return response.data;
  } catch (error) {
    return { error }; 
  }
};





