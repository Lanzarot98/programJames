


export const DailyNotes = () => {
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