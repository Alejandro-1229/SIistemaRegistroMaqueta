import "./ExpedientePage.scss";
import editExpedienteIcon from "../../../../assets/image/editar.png";
import sendExpedienteIcon from "../../../../assets/image/expediente.png";
import inspeccionLocalIcon from "../../../../assets/image/inspeccion-de-viviendas.png";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";

export const ExpedientePage = () => {
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
                            <div><a href="http://localhost:5173/">Cerrar Sesion</a></div>
                        </div>
                    </div>
                </div>
                <nav id="menu">

                    <ul>
                        <li><a href="http://localhost:5173/programacion">Programacion</a></li>
                        <li><a href="http://localhost:5173/expediente">Expediente</a></li>
                        <li><a href="http://localhost:5173/control">Control</a></li>
                    </ul>
                </nav>
            </div>
            <div className="table-content">
                <div className="box-table">
                    <table>
                        <thead>
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
                            <th>ILO</th>
                            <th colSpan={3}>Operaciones</th>

                        </thead>
                        <tbody>
                            <tr>
                                <td>987564321789</td>
                                <td>asdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
                                <td>Comida</td>
                                <td>comida2</td>
                                <td>ddddddd</td>
                                <td>comida2</td>
                                <td>Comida</td>
                                <td>comida2</td>
                                <td>Comida</td>
                                <td>comida2</td>
                                <td>Comida</td>
                                <td>comida2</td>
                                <td>Comida</td>
                                <td>comida2</td>
                                <td>Comida</td>
                                <td><button id="showPopup" type="submit"><img src={editExpedienteIcon} alt="" /></button></td>
                                <td><button type="submit"><img src={inspeccionLocalIcon} alt="" /></button></td>
                                <td><button type="submit"><img src={sendExpedienteIcon} alt="" /></button></td>
                            </tr> 
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