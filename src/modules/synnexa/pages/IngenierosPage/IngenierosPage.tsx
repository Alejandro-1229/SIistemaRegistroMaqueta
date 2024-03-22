import "./IngenierosPage.scss";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import imageGuardar from "../../../../assets/image/guardar-el-archivo.png";
import imageCalendario from "../../../../assets/image/calendario.png";
import { selectSearch } from '../../../../popups/popupIngeniero'; 
import useIngenierosPage from "./useIngenieroPage";
import { useEffect, useState } from "react"; 

export const IngenierosPage = () => {

    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const { inspeccionSemanalList, navegacionCierreSesion, navegacionIngenieros, navegacionSilecioPositivo, findNumeroExpediente } = useIngenierosPage();
    

    useEffect(() => {
        listarInspeccionesSemanales();
        selectSearch();
    }, []);

    const listarInspeccionesSemanales = async () => { 
        try {
            const inspecciones = await inspeccionSemanalList();
            setData(inspecciones);
        } catch (error) {
            console.log("Error al listar los expedientes");

        }
    };

    const buscarNumeroExpediente = async (numeroExpediente: string) => {
        try {
            const elemento = await findNumeroExpediente(numeroExpediente);
            setData(elemento);
        } catch (error) {
            console.error("Error searching element:", error);
        }
    };

    const handleSubmitForNumeroExpediente = async (e) => {
        e.preventDefault();
        try {
            await buscarNumeroExpediente(searchValue);
        } catch (error) {
            console.error("Error handling submit:", error);
        }
    };

    return (
        <div className="global-ingenieros">
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
                        <li><a onClick={() => navegacionIngenieros()}>Inspecciones Semanales</a></li>
                        <li><a onClick={() => navegacionSilecioPositivo()}>Silecio Positivo</a></li>
                    </ul>
                </nav>
            </div>
            <main className="table-content-ing">
                <div className="content-busqueda">
                    <div className="busqueda-funcion">
                        <div className="dropdown">
                            <button className="btn-drop">Tipo Busqueda</button>
                            <div className="option-search">
                                    <a id="btn-search-razon-social" href="#">Razon Social</a>
                                    <a id="btn-search-file" href="#">Expediente</a>
                                    <a id="btn-search-function" href="#">Funcion</a>
                            </div>
                        </div> 
                    </div>
                    <div id="content-find-function" className="search-function-inspeccion">
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
                    <div id="content-find-file" className="search-file-inspeccion">
                        <form  onSubmit={handleSubmitForNumeroExpediente} id="find-file" action="">
                            <input type="text" name="" id="" placeholder="Numero de Expediente" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                            <input type="submit" value="Buscar" />
                        </form>
                    </div>
                </div>

                <div id="box-table-ing">
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Numero Expediente</th>
                                <th>Local</th>
                                <th>Funcion</th>
                                <th>Direccion</th>
                                <th>Ingeniero1</th>
                                <th>Ingeniero 2</th>
                                <th colSpan={3}>Operaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(inspeccion => (
                                <tr key={inspeccion.idPrSe}>
                                    <td>{inspeccion.fechaInspeccion}</td>
                                    <td>{inspeccion.numeroExp}</td>
                                    <td>{inspeccion.local}</td>
                                    <td>{inspeccion.funcs}</td>
                                    <td>{inspeccion.direccion}</td>
                                    <td>{inspeccion.ingeniero_1}</td>
                                    <td>{inspeccion.ingeniero_2}</td>
                                    <td>
                                        <select name="" id="">
                                            <option value=""selected disabled>--------</option>
                                            <option value="2">Aprobado</option>
                                            <option value="3">Desaprobado</option>
                                        </select>
                                    </td>
                                    <td><button type="submit"><img src={imageGuardar} alt="" /></button></td>
                                    <td><button id="showPopup" type="submit"><img src={imageCalendario} alt="" /></button></td>
                                </tr>

                            ))}
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