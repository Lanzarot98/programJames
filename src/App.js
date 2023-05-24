import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AttachedFile, DailyNotes, Master } from './components';
import Navbar from './components/navbar/Navbar';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <>
      <AppRouter />

    </>
  );
}

export default App;

{/* <div className="flex-col items-center justify-center h-screen bg-gray-200">
<header className="justify-between w-full px-4 py-4 bg-white shadow-lg">
  <nav className="flex">
    <Link to="/" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Archivo Maestro</Link>
    <Link to="/daily-notes" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Archivo Notas Diarias</Link>
    <Link to="/attached-file" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Archivo Anexo</Link>
  </nav>
</header>

</div> */}
