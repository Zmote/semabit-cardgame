import { Navigate, Route, Routes } from 'react-router';
import AppLayout from "./layouts/AppLayout";
import HomeIndex from "./pages/home/HomeIndex"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<AppLayout />}>
                <Route index element={<HomeIndex />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
    );
};

export default AppRouter;