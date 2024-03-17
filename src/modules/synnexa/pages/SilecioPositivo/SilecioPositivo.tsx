import "./SilecioPositivo.scss";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import imageCalendario from "../../../../assets/image/calendario.png";
import imageEliminar from "../../../../assets/image/eliminar.png";


export const SilecioPositivo = () => {
    return (
        <div className="global-silecio">
            <div className="header">
                <div className="global-content-header">
                    <div id="content-header">
                        <div id="logo-muni"><img src={miImagen} alt="lpgo-subgerencia-riesgos-y-desastres" /></div>
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
                        <li><a href="http://localhost:5173/ingenieros">Inspecciones Semanales</a></li>
                        <li><a href="http://localhost:5173/silecioPositivo">Silecio Positivo</a></li>
                    </ul>
                </nav>
            </div>
            <main className="table-content">
                <div className="filter-data">

                </div>
                <div id="box-table-silencio">
                    <table>
                        <thead>
                            <th>Numero Expediente</th>
                            <th>Encargado</th>
                            <th>Local</th>
                            <th>Fecha Establecida</th>
                            <th colSpan={2}>Operaciones</th>

                        </thead>
                        <tbody>
                            <tr>
                                <td>987ASD</td>
                                <td>Ing Manuel Villar</td>
                                <td>Cevicheria el Pulpo</td>
                                <td>2024-05-02</td>
                                <td><button id="showPopup" type="submit"><img src={imageCalendario} alt="" /></button></td>
                                <td><button type="submit"><img src={imageEliminar} alt="" /></button></td>
                            </tr>
                            <tr>
                                <td>9875QWEW</td>
                                <td>Ing Manuel Villar</td>
                                <td>Cevicheria el Pulpo</td>
                                <td>2024-05-02</td>
                                <td><button id="showPopup" type="submit"><img src={imageCalendario} alt="" /></button></td>
                                <td><button type="submit"><img src={imageEliminar} alt="" /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overlay-silencio" id="overlay"></div>

                <div className="popup-silencio" id="popup">
                    <h2>Actualizar Fecha</h2>
                    <form action="#" method="post">

                        <div className="content-form-silencio">
                            <label htmlFor="">Nueva Fecha</label>
                            <input type="date" required />
                            <label htmlFor="">Razon</label>
                            <select name="" id="" required>
                                <option value="1">--------</option>
                                <option value="2">Ausencia del la administradora o de la persona a quien estela designe</option>
                                <option value="3">Complejidad del establecimiento objeto de inspeccion</option>
                                <option value="4">Impedimentos para la verificacion de todo o parte del establecimiento objeto
                                    de inspeccion</option>
                                <option value="5">Caso fortuito o caso mayor</option>
                            </select>
                        </div>
                        <div className="buttons">
                            <input type="submit" value="Guardar" />
                        </div>
                    </form>
                </div>
            </main>

        </div>
    );

}