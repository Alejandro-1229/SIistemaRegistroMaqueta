import "./ExpedientePage.scss";
import editExpedienteIcon from "../../../../assets/image/editar.png";
import sendExpedienteIcon from "../../../../assets/image/expediente.png";
import inspeccionLocalIcon from "../../../../assets/image/inspeccion-de-viviendas.png";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import { useEffect, useState } from "react";
import useExpedientePage from "./useExpedientePage";

export const ExpedientePage = () => {
    const [data, setData] = useState([]);
    const { navegacionCierreSesion, navegacionExpediente, navegacionProgramacion, navegacionControl, expedienteList } = useExpedientePage();


    useEffect(() => {
        listarExpediente();
    }, []);

    const listarExpediente = async () => {
        try {
            const expedientes = await expedienteList();
            setData(expedientes);
        } catch (error) {
            console.log("Error al listar los expedientes");

        }
    }

    return (

        <div className="global-expediente">
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
            <div className="table-content">
                <div className="box-table">
                    <table>
                        <thead>
                            <th>Numero Expediente</th>
                            <th>RUC</th>
                            <th>Nombre Comercial</th>
                            <th>Direccion</th>
                            <th>Tipo</th>
                            <th>Inspector</th>
                            <th>Fecha Ingreso Mesa de Partes</th>
                            <th>Fecha Ingreso SGDC</th>
                            <th>Fecha Recepcion Inspeccion</th>
                            <th>Recepcion Licencia de Funcionamiento</th>
                            <th>Fecha Limite Inspeccion</th>
                            <th>Numero informe</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Inspectores</th>
                            <th>ILO</th>
                            <th colSpan={3}>Operaciones</th>

                        </thead>
                        <tbody>
                            {data.map(expediente => (
                                <tr key={expediente.idExpe}>
                                    <td>{expediente.numeroExpediente}</td>
                                    <td>{expediente.ruc}</td>
                                    <td>{expediente.nombreComercial}</td>
                                    <td>{expediente.direccion}</td>
                                    <td>{expediente.Tipo}</td>
                                    <td>{expediente.inspector}</td>
                                    <td>{expediente.fechaIngresoMesaPartes}</td>
                                    <td>{expediente.fechaIngresoSGDC}</td>
                                    <td>{expediente.fechaRecepcionInpeccion}</td>
                                    <td>{expediente.recepcionLicenciaFuncionamiento}</td>
                                    <td>{expediente.fechaLimiteInspeccion}</td>
                                    <td>{expediente.numeroInforme}</td>
                                    <td>{expediente.estado}</td>
                                    <td>{expediente.fecha}</td>
                                    <td>{expediente.hora}</td>
                                    <td>{expediente.inspectores}</td>
                                    <td>{expediente.ILO}</td>
                                    <td><button id="showPopup" type="submit"><img src={editExpedienteIcon} alt="" /></button></td>
                                    <td><button type="submit"><img src={inspeccionLocalIcon} alt="" /></button></td>
                                    <td><button type="submit"><img src={sendExpedienteIcon} alt="" /></button></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="overlay-expediente" id="overlay"></div>
                <div className="popup-expediente" id="popup">
                    <h2>Actualizar Expediente</h2>
                    <form id="form-update-expediente" action="#" method="post">
                        <div className="content-form">
                            <div className="datos-left">
                                <label htmlFor="">Fecha Ingreso Mesa Partes</label>
                                <input type="date" name="" id="" />
                                <label htmlFor="">Fecha Ingreso SGDC</label>
                                <input type="date" name="" id="" />
                                <label htmlFor="">Fecha de Recepcion Inspeccion</label>
                                <input type="date" name="" id="" />
                                <label htmlFor="">Recepcion de Licencia de Funcionamiento</label>
                                <input type="date" name="" id="" />
                                <label htmlFor="">Fecha Limite Inspeccion</label>
                                <input type="date" name="" id="" />
                            </div>
                            <div className="datos-rigth">
                                <label htmlFor="">N. Informe</label>
                                <input type="tel" name="" id="" />
                                <label htmlFor="">Estado</label>
                                <select name="" id="">
                                    <option value="1">-------</option>
                                    <option value="2">Aprobado</option>
                                    <option value="3">Desaprobado</option>
                                </select>
                                <label htmlFor="">Fecha</label>
                                <input type="date" name="" id="" />
                                <label htmlFor="">Hora</label>
                                <input type="time" name="" id="" />
                                <label htmlFor="">Inspectores</label>
                                <input type="text" name="" id="" />
                                <label htmlFor="">ILO</label>
                                <input type="date" name="" id="" />
                            </div>
                        </div>
                        <div className="buttons">
                            <input type="submit" value="Guardar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}