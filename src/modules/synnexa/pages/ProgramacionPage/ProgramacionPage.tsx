import "./ProgramacionPage.scss";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import { useEffect, useState } from "react";
import useProgramacionPage from "./useProgramacionPage";

export const ProgramacionPage = () => {


    const [data, setData] = useState([]);
    const { navegacionCierreSesion, navegacionExpediente, navegacionProgramacion, navegacionControl, programacionList } = useProgramacionPage();

    useEffect(() => {
        listarProgramacion();
    }, []);

    const listarProgramacion = async () => {
        try {
            const programaciones = await programacionList();
            setData(programaciones);
        } catch (error) {
            console.log("Error al listar los expedientes");

        }
    }

    return (

        <div className="global-programacion">

            <div className="header">
                <div className="global-content-header">
                    <div id="content-header">
                        <div id="logo-muni"><img src={miImagen} alt="logo-subgerencia-riesgos-y-desastres" /></div>
                        <div id="tittle-muni">
                            <div>
                                <h1>Sub Gerencia de Gestion del Riesgo de Desastres</h1>
                            </div>
                            <div><a onClick={() => navegacionCierreSesion()}>Cerrar Sesion</a></div>
                        </div>
                    </div>
                </div>
                <nav id="menu">
                    <ul>
                        <li><a onClick={() => navegacionProgramacion()}>Programacion</a></li>
                        <li><a onClick={() => navegacionExpediente()}>Expediente</a></li>
                        <li><a onClick={() => navegacionControl()}>Control</a></li>
                    </ul>
                </nav>
            </div>
            <main className="table-content">
                <div className="box-table">
                    <table>
                        <thead>
                            <th>N. Expediente</th>
                            <th>Ruc</th>
                            <th>Nombre Comercial</th>
                            <th>Direccion</th>
                            <th>Tipo</th>
                            <th>Inspector</th>
                            <th>Firma</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Fecha Devolucion</th>
                        </thead>
                        <tbody>
                            {data.map(programacion => (
                                <tr key={programacion.idProg}>
                                    <td>{programacion.numeroExpediente}</td>
                                    <td>ruc</td>
                                    <td>{programacion.nombreComercial}</td>
                                    <td>{programacion.direccion}</td>
                                    <td>{programacion.Tipo}</td>
                                    <td>{programacion.inspector}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{programacion.fechaDevolucion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}