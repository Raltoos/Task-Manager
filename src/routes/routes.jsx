import Layout from "../pages/Layout";
import Landing from "../pages/Landing" 
import TaskManager from "../pages/TaskManager";
import UserProfileManager from "../pages/Form";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Landing />},
            {path: "task-manager", element: <TaskManager />},
            {path: "form", element: <UserProfileManager />},
        ]
    }
];

export default routes;