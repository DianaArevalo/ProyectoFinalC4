import React from "react";
import ".Lesson.css";
import "./MenuClient";
import { Link } from "react-router-dom";
import "./ReservationClient"

export default function Lesson() {
    const [usus, setUsu] = useState();

    const lesson = () => {
       
    }

    return(
        <div>
            <header>
                <h1 id="titulo">Bienvenido a las lecciones</h1>
            </header>

            <section className="contenido">
                <article className="Java">
                    <h2>Curso Java</h2>
                    <p>En este curso aprenderemos fundamentos de Java</p>
                    <p>Profesor________________</p>
                    <Link to = {reservar}>Regresar</Link>

                </article>

                <article className="Python">
                    <h2>Curso Java</h2>
                    <p>En este curso aprenderemos fundamentos de Phyton</p>
                    <p>Profesor________________</p>
                </article>

                <article className="JavaScript">
                    <h2>Curso Java</h2>
                    <p>En este curso aprenderemos fundamentos de JavaScript</p>
                    <p>Profesor________________</p>
                </article>


            </section>
        </div>
    )
}