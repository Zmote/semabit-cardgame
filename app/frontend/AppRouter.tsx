import { Navigate, Route, Routes } from 'react-router';
import AppLayout from "./layouts/AppLayout";
import HomeIndex from "./pages/home/HomeIndex"
import QuotesIndex from "./pages/quotes/QuotesIndex";
import MultiPlayerIndex from "./pages/multiplayer/MultiPlayerIndex";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<AppLayout />}>
                <Route index element={<HomeIndex />} />
            </Route>
            <Route path="/quotes" element={<AppLayout />}>
                <Route index element={<QuotesIndex />} />
            </Route>
            <Route path="/multi" element={<AppLayout />}>
                <Route index element={<MultiPlayerIndex />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
    );
};

export default AppRouter;