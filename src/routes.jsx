import { SubjectList } from "./pages/SubjectList.jsx";
import { SubjectDetail } from "./components/SubjectDetail.jsx";

export const routes = [
    {path: '/', element: <SubjectList /> },
    {path:"/subjects/:id", element: <SubjectDetail />},
];