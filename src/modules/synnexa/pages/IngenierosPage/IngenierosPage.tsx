import "./IngenierosPage.scss";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import imageGuardar from "../../../../assets/image/guardar-el-archivo.png";
import imageCalendario from "../../../../assets/image/calendario.png";

export const IngenierosPage = () => {
    return (
        <div className="global-ingenieros">
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
            <main className="table-content-ing">
                <div className="content-busqueda">
                    <div className="busqueda-funcion">
                        <div className="dropdown">
                            <button className="btn-drop">Tipo Busqueda</button>
                            <div className="option-search">
                                <a href="#">Funcion</a>
                                <a href="#">Expediente</a>
                            </div>
                        </div> 
                    </div> 
                    <div className="search-function">
                        <form id="find-function" action="">
                            <label htmlFor="">Funcion</label>
                            <select name="" id="">
                                <option value="1">-------</option>
                                <option value="2">Encuentro</option>
                                <option value="3">Comercio</option>
                                <option value="4">Administrativa</option>
                                <option value="5">Almacen</option>
                                <option value="6">Industrial</option>
                                <option value="7">Educacion</option>
                                <option value="8">Hospedaje</option>
                                <option value="9">Salud</option>
                            </select>
                            <label htmlFor="">Fecha Inicio</label>
                            <input type="date" name="" id="" />
                            <label htmlFor="">Fecha Final</label>
                            <input type="date" name="" id="" />
                            <input type="submit" value="Buscar" />
                        </form>
                    </div>
                    <div className="search-file">
                        <form id="find-file" action="">
                            <input type="text" name="" id="" placeholder="Numero de Expediente" />
                            <input type="submit" value="Buscar" />
                        </form>
                    </div>
                </div>

                <div id="box-table-ing">
                    <table>
                        <thead>
                            <th>Fecha</th>
                            <th>Numero Expediente</th>
                            <th>Local</th>
                            <th>Funcion</th>
                            <th>Direccion</th>
                            <th>Ingeniero1</th>
                            <th>Ingeniero 2</th>
                            <th colSpan={3}>Operaciones</th>

                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-05-02</td>
                                <td>123ASD54</td>
                                <td>Cevicheria el Pulpo</td>
                                <td>Comercio</td>
                                <td>Av. los Usares cerca a la piscina Mansiche</td>
                                <td>Ing Manuel Villar</td>
                                <td>Ing. Cesar Falla</td>
                                <td>
                                    <select name="" id="">
                                        <option value="1">--------</option>
                                        <option value="2">Aprobado</option>
                                        <option value="3">Desaprobado</option>
                                    </select>
                                </td>
                                <td><button type="submit"><img src={imageGuardar} alt="" /></button></td>
                                <td><button id="showPopup" type="submit"><img src={imageCalendario} alt="" /></button></td>
                            </tr>
                            <tr>
                                <td>2024-05-02</td>
                                <td>123ASD54</td>
                                <td>Cevicheria el Pulpo</td>
                                <td>Comercio</td>
                                <td>Av. los Usares cerca a la piscina Mansiche</td>
                                <td>Ing Manuel Villar</td>
                                <td>Ing. Cesar Falla</td>
                                <td>
                                    <select name="" id="">
                                        <option value="1">--------</option>
                                        <option value="2">Aprobado</option>
                                        <option value="3">Desaprobado</option>
                                    </select>
                                </td>
                                <td><button type="submit"><img src={imageGuardar} alt="" /></button></td>
                                <td><button id="showPopup" type="submit"><img src={imageCalendario} alt="" /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="overlay-ingenieros" id="overlay"></div>

                <div className="popup-ingenieros" id="popup">
                    <h2>Actualizar Fecha</h2>
                    <form id="form-aplazar-fecha" action="#" method="post">

                        <div className="content-form-ingenieros">
                            <label htmlFor="">Nueva Fecha</label>
                            <input type="date" required />
                            <label htmlFor="">Razon</label>
                            <select name="" id="" required>
                                <option value="1">--------</option>
                                <option value="2">Ausencia del la administradora o de la persona a quien estela designe</option>
                                <option value="3">Complejidad del establecimiento objeto de inspeccion</option>
                                <option value="4">Impedimentos para la verificacion de todo o parte del establecimiento objeto de inspeccion</option>
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
    )
}