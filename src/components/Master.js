import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { addLocale } from 'primereact/api';


export const Master = () => {
    const [data, setData] = useState([
      { id: 1, numberId: '123456', name: 'Luis', birth: '', dateAdmission: '', responsiblePerson: 'Leo', phone: '1234567890', medicines: 'Dolex', allergic:'Placil'  }
    ]);
    const elementWidth = { width: "20rem" }
    
    const columns = [
      { field: "numberId", header: "Cédula" },
      { field: "name", header: "Nombre y apellidos" },
      { field: "birth", header: "Fecha de Nacimiento" },
      { field: "dateAdmission", header: "Fecha de Ingreso" },
      { field: "responsiblePerson", header: "Persona Responsable" },
      { field: "phone", header: "Telefono" },
      { field: "medicines", header: "Medicamentos Formulados" },
      { field: "allergic", header: "Alérgico a" },
    ];
  
    const cellEditor = (options) => {
      if (options.field === "birth" || options.field === "dateAdmission") return dateEditor(options);
      else return textEditor(options);
    };
    
    const textEditor = (options) => {
      return (
        <InputText
          type="text"
          value={options.value}
          onChange={(e) => options.editorCallback(e.target.value)}
        />
      );
    };
  
    addLocale('es', {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      today: 'Hoy',
      clear: 'Claro'
    });
  
    const dateEditor = (options) => {
      return(
        <Calendar 
          style={elementWidth}
          id="navigators" 
          value={options.value}
          onChange={(e) => options.editorCallback(e.target.value)}
          locale="es"
          dateFormat="dd-mm-yy"
          monthNavigator yearNavigator yearRange="2010:2030" showIcon
        />
      );
    }
  
    function dateFormat(fecha){
      let newDate = fecha
      //console.log(newDate.length)
      if(newDate == null || newDate == undefined || newDate.length == 0 || newDate == "" || newDate == " "){
          newDate = ""
      }
      else{
          const day = fecha.toLocaleString('en-us', { day: 'numeric'})
          const month = fecha.toLocaleString('en-us', { month: 'numeric'})
          const year = fecha.toLocaleString('en-us', {  year: 'numeric'})
          newDate = day+"-"+month+"-"+year
      }
      return newDate
    }
  
    const addRow = () => {
      const newRow = {
        id: data.length + 1,
        numberId: '',
        name: '',
        birth: '',
        dateAdmission: '',
        responsiblePerson: '',
        phone: '',
        medicines: '',
        allergic: '',
      };
      setData(data.concat(newRow));
    };
  
    const saveData = () => {
      // send data to server and update state
    };
  
    const isPositiveInteger = (val) => {
      let str = String(val);
      str = str.trim();
      if (!str) {
          return false;
      }
      str = str.replace(/^0+/, "") || "0";
      let n = Math.floor(Number(str));
      return n !== Infinity && String(n) === str && n >= 0;
    }
  
    const onCellEditComplete = (e) => {
      let { rowData, newValue, field, originalEvent: event } = e;
  
      switch (field) {
        case 'birth':
        case 'dateAdmission':
          // if (isPositiveInteger(newValue))   else
          if (dateFormat(newValue).length <= 9) rowData[field] = dateFormat(newValue); // 
          else event.preventDefault();
          break;
  
        default:
          if (newValue.trim().length > 0) rowData[field] = newValue;
          else event.preventDefault();
          break;
      }
    };
  
    return (
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Archivo Maestro</h1>
  
          <Button label="Agregar fila" icon="pi pi-plus" className="p-button-success mr-2 p-button-sm" onClick={addRow} />
          <Button label="Guardar" onClick={saveData} />
          <div className='card'>
            <DataTable value={data} editMode="cell" className="editable-cells-table"
              resizableColumns columnResizeMode="fit" showGridlines dataKey="id" scrollable scrollHeight="flex" scrollDirection="both"> 
              {columns.map(({ field, header }) => {
                return (
                  <Column
                    key={field}
                    field={field}
                    header={header}
                    style={{ flexGrow: 1, flexBasis: '200px' }} //body={field === "price" && priceBodyTemplate}
                    editor={(options) => cellEditor(options)}
                    onCellEditComplete={onCellEditComplete}
                  />
                );
              })}
            </DataTable>
          </div> 
      </div>
    )
  }