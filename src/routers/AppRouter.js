import { Route, Routes } from "react-router-dom"
import { RouteMain } from "./RouteMain";


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={
                    <RouteMain />
                } />
            </Routes>
        </>
    );
}


{/* <Route exact path="/home" element={<Master />} />
            <Route path="/daily-notes" element={<DailyNotes />} />
            <Route path="/attached-file" element={<AttachedFile />} /> */}