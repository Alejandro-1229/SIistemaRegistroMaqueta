import "./IngenierosPage.scss";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import imageGuardar from "../../../../assets/image/guardar-el-archivo.png";
import imageCalendario from "../../../../assets/image/calendario.png";
import { selectSearch } from '../../../../popups/popupIngeniero';
import useIngenierosPage from "./useIngenieroPage";
import useSilencioPositivoPage from "../SilecioPositivo/useSilencioPositivoPage";
import { useEffect, useState } from "react";
import { Ingeniero } from "@/interfaces/Ingeniero";

export const IngenierosPage = () => {

    const [isPopupIngenieros, setIsPopupIngenieros] = useState("popup-ingenieros--hide");

    const [isOverlayIngenieros, setIsOverlayIngenieros] = useState("overlay-ingenieros--hide");
    
    const [cantidad, setCantidad] = useState<number | null>(null);

    const [objFecha, setObjFecha] = useState<Ingeniero>({
        idPrSe: "",
        fechaActualizada: "",
        idRazon: "",
    });

    const [data, setData] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [searchDate1, setSearchDate1] = useState('');
    const [searchDate2, setSearchDate2] = useState('');
    const [idEstado, setIdEstado] = useState('');
    const { getCantidadElementos } = useSilencioPositivoPage();
    const { cambiarFecha ,guardarInspeccion ,inspeccionSemanalList, navegacionCierreSesion, navegacionIngenieros, navegacionSilecioPositivo, findNumeroExpediente, findRazonSocial, findFuncion } = useIngenierosPage();


    useEffect(() => {
        listarInspeccionesSemanales();
        selectSearch();
        cantidadElementos()
    }, []);

    const handleInputsIngeniero= (e) => {
        const { name, value } = e.target;

        setObjFecha({
            ...objFecha,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await cambiarFecha(objFecha)
            ocultarPopupIngenieros();
            window.location.reload();
        } catch (error) {
            console.error('Error al actualizar la fecha de Inspeccion:', error);
        }
    };

    const handleGuardar = async (id : string|number) => {
        try {
            await guardarInspeccion(id,{idEstado: idEstado});
            window.location.reload();
        } catch (error) {
            console.error('Error al actualizar la fecha de Inspeccion:', error);
        }
    };

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
            if (Array.isArray(elemento) && elemento.length > 0) {
                setData(elemento);
                setAlertMessage('');
            } else {
                setAlertMessage('No se encontraron resultados.');
            }
        } catch (error) {
            console.error("Error searching element:", error);
            setAlertMessage('Error al buscar el elemento.');
        }
    };
    const buscarLocal = async (nombreComercial: string) => {
        try {
            const elemento = await findRazonSocial(nombreComercial);
            if (Array.isArray(elemento) && elemento.length > 0) {
                setData(elemento);
                setAlertMessage('');
            } else {
                setAlertMessage('No se encontraron resultados con ese nombre.');
            }
        } catch (error) {
            console.error("Error searching element:", error);
            setAlertMessage('Error al buscar el elemento.');
        }
    };

    const cantidadElementos = async () => {
        try {
            // Lógica para obtener la cantidad de elementos
            const cantidadObtenida = await getCantidadElementos();
            setCantidad(cantidadObtenida);
        } catch (error) {
            console.error('Error al obtener la cantidad de elementos:', error);
        }
    };

    const buscarFuncion = async (funcion: string, fechaInicio: string, fechaFinal: string) => {
        try {
            const elementos = await findFuncion(funcion, fechaInicio, fechaFinal);
            setData(elementos);
        } catch (error) {
            console.error("Error searching element:", error);
        }
    }
    const handleSubmitForFunction = async (e) => {
        e.preventDefault();
        try {
            await buscarFuncion(selectedValue, searchDate1, searchDate2);

        } catch (error) {
            console.error("Error handling submit:", error);
        }
    };

    const handleSubmitForRazonSocial = async (e) => {
        e.preventDefault();
        try {
            await buscarLocal(searchValue);
        } catch (error) {
            console.error("Error handling submit:", error);
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

    const mostrarPopupIngenieros = (params: Ingeniero) => {
        if (isPopupIngenieros === "popup-ingenieros--hide") {
            setIsPopupIngenieros("popup-ingenieros--show");
            setIsOverlayIngenieros("overlay-ingenieros--show");
            setObjFecha(params);
        }
    }

    const ocultarPopupIngenieros = () => {
        if (isPopupIngenieros === "popup-ingenieros--show") {
            setIsPopupIngenieros("popup-ingenieros--hide");
            setIsOverlayIngenieros("overlay-ingenieros--hide");
        }
    }

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
                        <li><a onClick={() => navegacionSilecioPositivo()}>Silecio Positivo {cantidad !== null && cantidad}</a></li>
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
                    <div className="tipo-filtros">
                        <div id="content-find-razon-social" className="search-razonSocial-inspeccion">
                            <form onSubmit={handleSubmitForRazonSocial} action="">
                                <div className="input-group-inspeccion">
                                    <input type="text" autoFocus placeholder="Razon Social/Nombre Comercial" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                                    <input type="submit" value="Buscar" />
                                </div>
                            </form>
                            {alertMessage && <p>{alertMessage}</p>}
                        </div>
                        <div id="content-find-function" className="search-function-inspeccion">
                            <form onSubmit={handleSubmitForFunction} action="">
                                <div className="input-group-inspeccion">
                                    <label htmlFor="">Funcion</label>
                                    <select name="" defaultValue={""} onChange={(e) => setSelectedValue(e.target.value)} required>
                                        <option value="" disabled></option>
                                        <option value="Encuentro">Encuentro</option>
                                        <option value="Comercio">Comercio</option>
                                        <option value="Administrativa">Administrativa</option>
                                        <option value="Almacen">Almacen</option>
                                        <option value="Industrial">Industrial</option>
                                        <option value="Educacion">Educacion</option>
                                        <option value="Hospedaje">Hospedaje</option>
                                        <option value="Salud">Salud</option>
                                    </select>
                                    <label htmlFor="">Fecha Inicio</label>
                                    <input onChange={(e) => setSearchDate1(e.target.value)} type="date" name="" id="" required />
                                    <label htmlFor="">Fecha Final</label>
                                    <input onChange={(e) => setSearchDate2(e.target.value)} type="date" name="" id="" required />
                                    <input type="submit" value="Buscar" />
                                </div>
                            </form>
                        </div>
                        <div id="content-find-file" className="search-file-inspeccion">
                            <form onSubmit={handleSubmitForNumeroExpediente} id="find-file" action="">
                                <div className="input-group-inspeccion">
                                    <input type="text" name="" id="" placeholder="Numero de Expediente" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                                    <input type="submit" value="Buscar" />
                                </div>
                            </form>
                            {alertMessage && <p>{alertMessage}</p>}
                        </div>

                    </div>
                </div>

                <div className="box-table-ing">
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
                            {data && data.length > 0 && data.map(inspeccion => (
                                <tr key={inspeccion.idPrSe}>
                                    <td>{inspeccion.fechaInspeccion}</td>
                                    <td>{inspeccion.numeroExp}</td>
                                    <td>{inspeccion.local}</td>
                                    <td>{inspeccion.funcs}</td>
                                    <td>{inspeccion.direccion}</td>
                                    <td>{inspeccion.ingeniero_1}</td>
                                    <td>{inspeccion.ingeniero_2}</td>
                                    <td>
                                        <select name="idEstado" defaultValue={idEstado} onChange={(e) => setIdEstado(e.target.value)} required>
                                            <option value="1">--------</option>
                                            <option value="2">Aprobado</option>
                                            <option value="3">Desaprobado</option>
                                        </select>
                                    </td>
                                    <td><button onClick={() => handleGuardar(inspeccion.idPrSe)} ><img src={imageGuardar} alt=" Boton Guardar Registro" title="Boton Guardar Registro" /></button></td>
                                    <td><button onClick={() => mostrarPopupIngenieros(inspeccion)} type="submit"><img src={imageCalendario} alt="Boton Cambiar Fecha" title="Boton Cambiar Fecha" /></button></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="overlay-ingenieros" id={isOverlayIngenieros}></div>

                <div className="popup-ingenieros" id={isPopupIngenieros}>
                    <h2>Actualizar Fecha</h2>
                    <form id="form-aplazar-fecha" onSubmit={handleSubmit}>
                        <div className="content-form-ingenieros">
                            <input type="hidden" value={objFecha.idPrSe} name="idPrSe"/>
                            <label htmlFor="">Nueva Fecha</label>
                            <input onChange={handleInputsIngeniero} name="fechaActualizada" type="date" required/>
                            <label htmlFor="">Razon</label>
                            <select required  onChange={handleInputsIngeniero} name="idRazon" id="">
                                <option value="1">--------</option>
                                <option value="2">Ausencia del la administradora o de la persona a quien estela designe</option>
                                <option value="3">Complejidad del establecimiento objeto de inspeccion</option>
                                <option value="4">Impedimentos para la verificacion de todo o parte del establecimiento objeto
                                    de inspeccion</option>
                                <option value="5">Caso fortuito o caso mayor</option>
                            </select>
                        </div>
                        <div className="buttons-update-ingenieros">
                            <input type="submit" value="Guardar" />
                            <input type="button" onClick={() => ocultarPopupIngenieros()} value="Cancelar" />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}