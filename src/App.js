import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="flex-col items-center justify-center h-screen bg-gray-200">
        <header className="justify-between w-full px-4 py-4 bg-white shadow-lg">
          <nav className="flex">
            <Link to="/" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Archivo Maestro</Link>
            <Link to="/daily-notes" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Archivo Notas Diarias</Link>
            <Link to="/attached-file" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Archivo Anexo</Link>
          </nav>
        </header>
        <Routes>
          <Route exact path="/*" element={<Master />} />
          <Route path="/daily-notes" element={<DailyNotes />} />
          <Route path="/attached-file" element={<AttachedFile />} />
        </Routes>
      </div>
    </>
  );
}

const Master = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Archivo Maestro</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="id" className="block text-gray-800 font-bold mb-2">
            Cédula
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Cédula"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
            Nombre y Apellidos
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Nombre y Apellidos"
          />
        </div>
        <div>
          <label htmlFor="dob" className="block text-gray-800 font-bold mb-2">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Fecha de Nacimiento"
          />
        </div>
        <div>
          <label htmlFor="doa" className="block text-gray-800 font-bold mb-2">
            Fecha de Ingreso
          </label>
          <input
            type="date"
            id="doa"
            name="doa"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Fecha de Ingreso"
          />
        </div>
        <div>
          <label htmlFor="responsible" className="block text-gray-800 font-bold mb-2">
            Persona Responsable
          </label>
          <input
            type="text"
            id="responsible"
            name="responsible"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Persona Responsable"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">
            Número de Celular
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Número de Celular"
          />
        </div>
        <div>
          <label htmlFor="medications" className="block text-gray-800 font-bold mb-2">
            Medicamentos Formulados
          </label>
          <input
            type="text"
            id="medications"
            name="medications"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Medicamentos Formulados"
          />
        </div>
        <div>
          <label htmlFor="allergy" className="block text-gray-800 font-bold mb-2">
            Alérgico a:
          </label>
          <input
            type="text"
            id="allergy"
            name="allergy"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese alergias"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
          >
            Guardar Información
          </button>
        </div>
      </form>
    </div>
  )
}

const DailyNotes = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-bold mb-4">Archivo Notas Diarias</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="dailyId" className="block text-gray-800 font-bold mb-2">
            Cédula
          </label>
          <input
            type="text"
            id="dailyId"
            name="dailyId"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese cédula"
          />
        </div>
        <div>
          <label htmlFor="dailyName" className="block text-gray-800 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="dailyName"
            name="dailyName"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Nombre"
            disabled
          />
        </div>
        <div>
          <label htmlFor="dailyDate" className="block text-gray-800 font-bold mb-2">
            Fecha del día
          </label>
          <input
            type="date"
            id="dailyDate"
            name="dailyDate"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Fecha del día"
          />
        </div>
        <div>
          <label htmlFor="dailyObservations" className="block text-gray-800 font-bold mb-2">
            Observaciones
          </label>
          <textarea
            id="dailyObservations"
            name="dailyObservations"
            rows="5"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Observaciones"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
          >
            Guardar Información
          </button>
        </div>
      </form>
    </div>
  )
}

const AttachedFile = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-bold mb-4">Archivo Anexo</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="idAttachment" className="block text-gray-800 font-bold mb-2">
            Cédula
          </label>
          <input
            type="text"
            id="idAttachment"
            name="idAttachment"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Cédula"
          />
        </div>
        <div>
          <label htmlFor="dateAttachment" className="block text-gray-800 font-bold mb-2">
            Fecha del Suceso
          </label>
          <input
            type="date"
            id="dateAttachment"
            name="dateAttachment"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Fecha del Suceso"
          />
        </div>
        <div>
          <label htmlFor="note" className="block text-gray-800 font-bold mb-2">
            Nota de Observación
          </label>
          <textarea
            id="note"
            name="note"
            rows="5"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingrese Nota de Observación"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
          >
            Guardar Información
          </button>
        </div>
      </form>
    </div>
  )
}

export default App;
