import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="flex-col items-center justify-center h-screen bg-gray-200">
        <header className="justify-between w-full px-4 py-4 bg-white shadow-lg">
          <nav className="flex">
            <Link to="/" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Master File</Link>
            <Link to="/daily-notes" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Daily Notes File</Link>
            <Link to="/attached-file" className="text-lg mr-4 font-medium text-gray-800 hover:text-black">Attached File</Link>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<Master />} />
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
      <h1 className="text-3xl font-bold mb-4">Master File</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="id" className="block text-gray-800 font-bold mb-2">
            Identity Card
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter identity card"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
            Name and Surname
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter name and surname"
          />
        </div>
        <div>
          <label htmlFor="dob" className="block text-gray-800 font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter date of birth"
          />
        </div>
        <div>
          <label htmlFor="doa" className="block text-gray-800 font-bold mb-2">
            Date of Admission
          </label>
          <input
            type="date"
            id="doa"
            name="doa"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter date of admission"
          />
        </div>
        <div>
          <label htmlFor="responsible" className="block text-gray-800 font-bold mb-2">
            Responsible Person
          </label>
          <input
            type="text"
            id="responsible"
            name="responsible"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter responsible person"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">
            Cell Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter cell phone number"
          />
        </div>
        <div>
          <label htmlFor="medications" className="block text-gray-800 font-bold mb-2">
            Medications Prescribed
          </label>
          <input
            type="text"
            id="medications"
            name="medications"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter medications prescribed"
          />
        </div>
        <div>
          <label htmlFor="allergy" className="block text-gray-800 font-bold mb-2">
            Allergy To
          </label>
          <input
            type="text"
            id="allergy"
            name="allergy"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter allergy to"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

const DailyNotes = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-bold mb-4">Daily Notes File</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="dailyId" className="block text-gray-800 font-bold mb-2">
            Cedula
          </label>
          <input
            type="text"
            id="dailyId"
            name="dailyId"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter cedula"
          />
        </div>
        <div>
          <label htmlFor="dailyName" className="block text-gray-800 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="dailyName"
            name="dailyName"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Name will be displayed here"
            disabled
          />
        </div>
        <div>
          <label htmlFor="dailyDate" className="block text-gray-800 font-bold mb-2">
            Date of the Day
          </label>
          <input
            type="date"
            id="dailyDate"
            name="dailyDate"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter date of the day"
          />
        </div>
        <div>
          <label htmlFor="dailyObservations" className="block text-gray-800 font-bold mb-2">
            Observations
          </label>
          <textarea
            id="dailyObservations"
            name="dailyObservations"
            rows="5"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter observations"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

const AttachedFile = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-bold mb-4">Attached File</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="idAttachment" className="block text-gray-800 font-bold mb-2">
            Identity Card
          </label>
          <input
            type="text"
            id="idAttachment"
            name="idAttachment"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter identity card"
          />
        </div>
        <div>
          <label htmlFor="dateAttachment" className="block text-gray-800 font-bold mb-2">
            Date of the Event
          </label>
          <input
            type="date"
            id="dateAttachment"
            name="dateAttachment"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter date of the event"
          />
        </div>
        <div>
          <label htmlFor="note" className="block text-gray-800 font-bold mb-2">
            Note of Observation
          </label>
          <textarea
            id="note"
            name="note"
            rows="5"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter note of observation"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default App;
