import "./ControlPage.scss";
import editExpedienteIcon from "../../../../assets/image/editar.png";
import sendExpedienteIcon from "../../../../assets/image/expediente.png";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import { useEffect, useState } from "react";
import useControlPage from "./useControlPage";
import { initPopup, selectSearch } from '../../../../popups/popupControl';

export const ControlPage = () => {
    const [data, setData] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState('');
    
    const [searchDate1, setSearchDate1] = useState('');
    const [searchDate2, setSearchDate2] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertMessage2, setAlertMessage2] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const { navegacionCierreSesion, navegacionProgramacion, navegacionExpediente, navegacionControl, controlList, findRazonSocial, findNumeroExpediente, findFuncion, findTipoItse } = useControlPage();

    useEffect(() => {
        fetchData();
        initPopup();
        selectSearch();
    }, []);

    const fetchData = async () => {
        try {
            const controles = await controlList();
            setData(controles);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const buscarLocal = async (nombreComercial: string) => {
        try {
            const elemento = await findRazonSocial(nombreComercial);
            if (Array.isArray(elemento) && elemento.length > 0) {
                setData(elemento);
                setAlertMessage2('');
            } else {
                setAlertMessage2('No se encontraron resultados con ese nombre.');
            }
        } catch (error) {
            console.error("Error searching element:", error);
            setAlertMessage('Error al buscar el elemento.');
        }
    };

    const buscarNumeroExpediente = async (numeroExpediente: string) => {
        try {
            const elemento = await findNumeroExpediente(numeroExpediente);
            if (Array.isArray(elemento) && elemento.length > 0) {
                setData(elemento);
                setAlertMessage('');
            } else {
                setAlertMessage('No se encontraron resultados con ese expediente.');
            }
        } catch (error) {
            console.error("Error searching element:", error);
            setAlertMessage('Error al buscar el elemento.');
        }
    };

    const buscarFuncion = async (funcion: string | number, fechaInicio: string, fechaFinal: string) => {
        try {
            const elemento = await findFuncion(funcion, fechaInicio, fechaFinal);
            setData(elemento);
        } catch (error) {
            console.error("Error searching element:", error);
        }
    };

    const buscarTipoItse = async (tipoItse: string | number, fechaInicio: string, fechaFinal: string) => {
        try {
            const elemento = await findTipoItse(tipoItse, fechaInicio, fechaFinal);
            setData(elemento);
        } catch (error) {
            console.error("Error searching element:", error);
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

    const handleSubmitForFuncion = async (e) => {
        e.preventDefault();
        try {
            await buscarFuncion(selectedOption, searchDate1, searchDate2);
        } catch (error) {
            console.error("Error handling submit:", error);
        }
    };

    const handleSubmitForTipoItse = async (e) => {
        e.preventDefault();
        try {
            await buscarTipoItse(selectedOption, searchDate1, searchDate2);
        } catch (error) {
            console.error("Error handling submit:", error);
        }
    };
    
/*
    const handleSubmitUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updateControl(datosFormulario, idRegistro); // Asegúrate de tener los datos correctos del formulario y el ID del registro.
        } catch (error) {
            console.error('Error al enviar el formulario de edición:', error);
        }
    };
*/

    return (
        <div className="global-control">
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
            <div className="table-content" >
                <div className="lists-buttons">
                    <div className="busqueda-tipos">
                        <div className="search">
                            <div className="dropdown">
                                <button className="dropbtn">Tipo Busqueda</button>
                                <div className="option-search">
                                    <a id="btn-search-razon-social" href="#">Razon Social</a>
                                    <a id="btn-search-expediente" href="#">Expediente</a>
                                    <a id="btn-search-funcion" href="#">Funcion</a>
                                    <a id="btn-search-tipo" href="#">Tipo Itse</a>
                                </div>
                            </div>
                        </div>
                        <div className="tipos">
                            <div id="content-find-razon-social" className="razon-social">
                                <form onSubmit={handleSubmitForRazonSocial} action="">
                                    <div className="input-group">
                                        <input type="text" autoFocus placeholder="Razon Social/Nombre Comercial" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                                        <input type="submit" value="Buscar" />
                                    </div>
                                </form>
                                {alertMessage && <p>{alertMessage2}</p>}
                            </div>
                            <div id="content-find-expediente" className="expediente">

                                <form onSubmit={handleSubmitForNumeroExpediente} action="">
                                    <div className="input-group">
                                        <input type="text" placeholder="Numero de Expediente" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                                        <input type="submit" value="Buscar" />
                                    </div>
                                </form>
                                {alertMessage && <p>{alertMessage}</p>}
                            </div>
                            <div id="content-find-funcion" className="funcion">
                                <form onSubmit={handleSubmitForFuncion} action="">
                                    <div className="input-group">
                                        <input onChange={(e) => setSearchDate1(e.target.value)} type="date" name="" id="" required/>
                                        <input onChange={(e) => setSearchDate2(e.target.value)} type="date" name="" id="" required/>
                                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                                            <option value="" disabled>Funcion</option>
                                            <option value="1">Encuentro</option>
                                            <option value="2">Comercio</option>
                                            <option value="3">Administrativa</option>
                                            <option value="4">Almacen</option>
                                            <option value="5">Industrial</option>
                                            <option value="6">Educacion</option>
                                            <option value="7">Hospedaje</option>
                                            <option value="8">Salud</option>
                                        </select>
                                        <input type="submit" value="Buscar" />
                                    </div>
                                </form>
                            </div>
                            <div id="content-find-tipo" className="tipo-itse">
                                <form onSubmit={handleSubmitForTipoItse} action="">
                                    <div className="input-group">
                                        <input onChange={(e) => setSearchDate1(e.target.value)} type="date" name="" id="" required/>
                                        <input onChange={(e) => setSearchDate2(e.target.value)} type="date" name="" id="" required/>
                                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                                            <option value="" disabled>Tipo ITSE</option>
                                            <option value="1">Previa</option>
                                            <option value="2">Posterior</option>
                                        </select>
                                        <input type="submit" value="Buscar" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="nuevo-registro">
                        <button id="showPopup-control" className="new-register-control">Nuevo Registro</button>
                        <div className="overlay-control" id="overlay-control"></div>
                        <div className="popup-control" id="popup-control">
                            <h2>Nuevo Registro</h2>
                            <form id="form-new-register" action="#" method="post">
                                <div className="content-form">
                                    <div className="datos-left">
                                        <label htmlFor="">Numero Expediente</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Tipo Itse</label>
                                        <select name="" id="" required>
                                            <option value="1">Previa</option>
                                            <option value="2">Posterior</option>
                                        </select>
                                        <label htmlFor="">Funcion</label>
                                        <select name="" id="" required>
                                            <option value="1">Encuentro</option>
                                            <option value="2">Comercio</option>
                                            <option value="3">Administrativa</option>
                                            <option value="4">Almacen</option>
                                            <option value="5">Industrial</option>
                                            <option value="6">Educacion</option>
                                            <option value="7">Hospedaje</option>
                                            <option value="8">Salud</option>
                                        </select>
                                        <label htmlFor="">Nivel de Riesgo</label>
                                        <select name="" id="" required>
                                            <option value="1">Bajo</option>
                                            <option value="2">Medio</option>
                                            <option value="3">Alto</option>
                                            <option value="4">Muy Alto</option>
                                            <option value="5">ECSE</option>
                                        </select>
                                        <label htmlFor="">Razon Social</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Nombre Establecimiento</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Giro del Negocio</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Datos Solicitante</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Fecha de Ingreso</label>
                                        <input type="date" className="fecha" required/>
                                        <label htmlFor="">Fecha de Ingreso SGDC</label>
                                        <input type="date" className="fecha" required/>
                                        <label htmlFor="">Barrio</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Nombre Habilitacion</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Area Ocupada</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Numero Pisos</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Manzana</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Tipo Via</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Nombre Via</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Numero Municipal</label>
                                        <input type="text" name="" id="" required/>
                                        <label htmlFor="">Licencia</label>
                                        <input type="text" name="" id="" required/>
                                    </div>
                                    <div className="datos-rigth">
                                        <label htmlFor="">Solicitud</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Fecha Resolucion</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Numero Resolucion</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Numero Certificado</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Vigencia Certificado</label>
                                        <input type="date" name="" id="" />
                                        <label htmlFor="">Inspector 1</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Inspector 2</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Fecha Inspeccion 1</label>
                                        <input type="date" name="" id="" />
                                        <label htmlFor="">Fecha Inspeccion 2</label>
                                        <input type="date" name="" id="" />
                                        <label htmlFor="">Fecha Inspeccion 3</label>
                                        <input type="date" name="" id="" />
                                        <label htmlFor="">Fecha Inspeccion ILO</label>
                                        <input type="date" name="" id="" />
                                        <label htmlFor="">Fecha Devolucion 1</label>
                                        <input type="date" name="" id="" />
                                        <label htmlFor="">Fecha Devolucion 2</label>
                                        <input type="date" name="" id="" />
                                        <label htmlFor="">Numero Observaciones</label>
                                        <input type="date" name="" id="" />
                                        <label htmlFor="">Area Recepcion</label>
                                        <select name="" id="">
                                            <option value=""disabled>-------</option>
                                            <option value="2">Mesa de Partes</option>
                                            <option value="3">Licencia</option>
                                            <option value="3">Subgerencia</option>
                                            <option value="4">Ingenieria</option>
                                            <option value="5">Area Legal</option>
                                            <option value="6">Administracion</option>
                                        </select>
                                        <label htmlFor="">Pago Derecho de Inspeccion</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className="buttons">
                                    <input type="submit" value="Guardar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="box-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Numero Expediente</th>
                                <th>Tipo ITSE</th>
                                <th>Funcion</th>
                                <th>Nivel Riesgo</th>
                                <th>Nombre Establecimiento/Razon Social</th>
                                <th>Giro del Negocio</th>
                                <th>Datos Solicitante</th>
                                <th>Fecha Ingreso</th>
                                <th>Fecha Ingreso SGDC</th>
                                <th>Barrio</th>
                                <th>Nombre Habilitacion Urbana</th>
                                <th>Area Ocupada</th>
                                <th>Numero Pisos</th>
                                <th>Manzana</th>
                                <th>Lote</th>
                                <th>Tipo Via</th>
                                <th>Nombre Via</th>
                                <th>Numero Municipal</th>
                                <th>Licencia</th>
                                <th>Solicitud</th>
                                <th>Fecha Resolucion</th>
                                <th>Numero Resolucion</th>
                                <th>Numero Certificado</th>
                                <th>Vigencia del Certificado</th>
                                <th>Inspector 1</th>
                                <th>Inspector 2</th>
                                <th>Fecha Inpeccion 1</th>
                                <th>Fecha Inpeccion 2</th>
                                <th>Fecha Inpeccion 3</th>
                                <th>Fecha Inpeccion ILO</th>
                                <th>Fecha Devolucion 1</th>
                                <th>Fecha Devolucion 2</th>
                                <th>Numero Observaciones</th>
                                <th>Area Recepcion</th>
                                <th>Pago Derecho Inspeccion</th>
                                <th colSpan={2} >Operaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(control => (
                                <tr key={control.idControl}>
                                    <td>{control.numeroExpediente}</td>
                                    <td>{control.tipoItse}</td>
                                    <td>{control.funcion}</td>
                                    <td>{control.nivelRiesgo}</td>
                                    <td>{control.nombreComercial}</td>
                                    <td>{control.giroNegocio}</td>
                                    <td>{control.datosSolicitante}</td>                                    <td>{control.fechaIngreso}</td>
                                    <td>{control.fechaIngresoSGDC}</td>
                                    <td>{control.barrio}</td>
                                    <td>{control.nombreHabilitacionUrbana}</td>
                                    <td>{control.areaOcupada}</td>
                                    <td>{control.numeroPisos}</td>
                                    <td>{control.manzana}</td>
                                    <td>{control.lote}</td>
                                    <td>{control.tipoVia}</td>
                                    <td>{control.nombreVia}</td>
                                    <td>{control.numeroMunicipal}</td>
                                    <td>{control.licencia}</td>
                                    <td>{control.solicitud}</td>
                                    <td>{control.fechaResolucion}</td>
                                    <td>{control.numeroResolucion}</td>
                                    <td>{control.numeroResolucion}</td>
                                    <td>{control.vigenciaCertificado}</td>
                                    <td>{control.inspector_1}</td>
                                    <td>{control.inspector_2}</td>
                                    <td>{control.fechaInspeccion_1}</td>
                                    <td>{control.fechaInspeccion_2}</td>
                                    <td>{control.fechaInspeccion_3}</td>
                                    <td>{control.fechaInspeccionILO}</td>
                                    <td>{control.fechaDevolucion_1}</td>
                                    <td>{control.fechaDevolucion_2}</td>
                                    <td>{control.numeroObservaciones}</td>
                                    <td>{control.areaRecepcion}</td>
                                    <td>{control.pagoDerechoInspeccion}</td>
                                    <td><button type="submit"><img src={editExpedienteIcon} alt="" /></button></td>
                                    <td><button type="submit"><img src={sendExpedienteIcon} alt="" /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </div>

    )
}
