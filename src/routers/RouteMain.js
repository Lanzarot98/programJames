import { Navigate, Route, Routes } from "react-router-dom"
import { AttachedFile, DailyNotes, Master } from "../components"
import Navbar from "../components/navbar/Navbar";


export const RouteMain = () => {
    return (
        <>
            <Navbar />
            <Routes>

                <Route path="/home" element={<Master />} />
                <Route path="/daily-notes" element={<DailyNotes />} />
                <Route path="/attached-file" element={<AttachedFile />} />
                
                <Route path="/" element={<Navigate to="/home"/>} />
            </Routes>
        </>

    );
}