import React, {useEffect} from "react";
import "./Register";


export const  perfil =(props) =>{

   
 return (
 <main>
    <div className="container" style={{background: "Lightgray", marginTop:20,}}>
    <h1 style={{color:"blue", textalign: "center"}} >Tu perfil</h1>
    
    
    
    <Link to = {"/Login"}><button>Regresar</button></Link>
    </div>
 </main>)
}