import React, { useEffect, useState } from "react";

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo vehículo");

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear nuevo Vehiculo");
    } else {
      setTextoBoton("Mostrar todos los Vehiculos");
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Pagina de administración de vehiculos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className="text-white bg-indigo-500 p-5 rounded-full m-6 w-50 self-center"
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? <TablaVehiculos /> : <FormularioCreacionVehiculos />}
    </div>
  );
};

const TablaVehiculos = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">Todos los vehículos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Vehículo</th>
            <th>Marca del Vehículo</th>
            <th>Modelo del Vehículo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Corolla</td>
            <td>Toyota</td>
            <td>2014</td>
          </tr>
          <tr>
            <td>Sandero</td>
            <td>Renault</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Duster</td>
            <td>Toyota</td>
            <td>2014</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionVehiculos = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nuevo vehículo
      </h2>
      <form action="" className="grid grid-cols-2">
        <input
          className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
          type="text"
        />
        <input
          className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
          type="text"
        />
        <input
          className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
          type="text"
        />
        <input
          className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
          type="text"
        />
        <button className="col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white">
          Guardar Vehículo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;
