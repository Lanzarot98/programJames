

export const AttachedFile = () => {
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