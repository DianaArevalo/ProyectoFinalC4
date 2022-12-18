import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import { Login } from "./Login";

export const Register = () => {

const [registros, setRegistros] = useState([]);

const [nombreyapellido, setNombreyapellido]= useState("");
const [edad, setEdad] = useState ("");
const [correo, setCorreo] = useState("");
const [profesion, setProfesion] = useState("");
const [ciudad, setCiudad] = useState("");
const [profesional, setProfesional] = useState("");
const [buscoServicio, setBuscoServicio] = useState("");



const botonGuardar = (e) => {
    e.preventDefault();
    var myObject = {nombreyapellido, edad, correo, profesion, ciudad, profesional, buscoServicio}
    setRegistros([...registros, myObject]);
    limpiarFormulario();
}

useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros))
}, )

const limpiarFormulario =() => {
    setNombreyapellido("");
    setEdad("");
    setCorreo("");
    setProfesion("");
    setCiudad("");
    setProfesional("");
    setBuscoServicio("");
    document.getElementById("registro").reset();
}
 const soyProfesional = (props) => {
  // soyProfesional === "true" && <MenuProfessional usu={usu}/>
 }

 const servicio = () =>{
   // if(soyProfesional === "true"){
       // return ;
    }

 const compañia = () => {
// soyProfesional === "true" && <Panel usu={usu}/>
 }


    return (

        <main >
            <div>
        <form ClassName= "my-10 bg-white shadow rounded-lg p-5"id="registro" onSubmit={ botonGuardar}> 
        <h2>Ingrese sus datos</h2>

        <div className="my-5">
        <label className="uppercase text-gray-600 block text-lx font-bold">Nombres y Apellidos</label>
        <input
        type="Nombres y Apellidos" 
        placeholder='Nombres y Apellidos'onChange={(e)=> setNombreyapellido(e.target.value)} required
        className="w-full mt-3 border rounded-xl bg-gray-50"/>


        <input placeholder='edad'onChange={(e)=> setEdad(e.target.value)} required/>
        <input placeholder='correo' onChange={(e)=> setCorreo(e.target.value)} required/>
        <input placeholder='profesion'onChange={(e)=> setProfesion(e.target.value)} required/>
        <input placeholder='ciudad'onChange={(e)=> setCiudad(e.target.value)} required/>

        <label>seleccione</label>
        <select>
            <option value={soyProfesional}></option>
            <option value={servicio}></option>
            <option value={compañia}></option>

        </select>
        
        <button>Registrar Usuario</button>
        <Link to = {"/Login"}>Regresar</Link>
        </div>
        
    </form>
    </div>
    </main>
       
            )
}
export default Register;