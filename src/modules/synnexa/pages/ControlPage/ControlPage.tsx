import "./ControlPage.scss";
import editExpedienteIcon from "../../../../assets/image/editar.png";
import sendExpedienteIcon from "../../../../assets/image/expediente.png";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import { useEffect, useState } from "react";
import useControlPage from "./useControlPage";




export const ControlPage = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const { navegacionCierreSesion, navegacionProgramacion, navegacionExpediente, navegacionControl, controlList, findRazonSocial, findNumeroExpediente, findFuncion, findTipoItse } = useControlPage();

    useEffect(() => {
        fetchData();
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
            setData(elemento);
        } catch (error) {
            console.error("Error searching element:", error);
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

    const buscarFuncion = async (funcion: string | number) => {
        try {
            const elemento = await findFuncion(funcion);
            setData(elemento);
        } catch (error) {
            console.error("Error searching element:", error);
        }
    };

    const buscarTipoItse = async (tipoItse: string | number) => {
        try {
            const elemento = await findTipoItse(tipoItse);
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
            await buscarFuncion(selectedOption);
        } catch (error) {
            console.error("Error handling submit:", error);
        }
    };

    const handleSubmitForTipoItse = async (e) => {
        e.preventDefault();
        try {
            await buscarTipoItse(selectedOption);
        } catch (error) {
            console.error("Error handling submit:", error);
        }
    };


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
                                    <a href="#">Razon Social</a>
                                    <a href="#">Expediente</a>
                                    <a href="#">Funcion</a>
                                    <a href="#">Tipo Itse</a>
                                </div>
                            </div>
                        </div>
                        <div className="tipos">
                            <div className="razon-social">
                                <form onSubmit={handleSubmitForRazonSocial} action="">
                                    <div className="input-group">
                                        <input type="text" placeholder="Razon Social/Nombre Comercial" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                                        <input type="submit" value="Buscar" />
                                    </div>
                                </form>
                            </div>
                            <div className="expediente">
                                <form onSubmit={handleSubmitForNumeroExpediente} action="">
                                    <div className="input-group">
                                        <input type="text" placeholder="Numero de Expediente" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                                        <input type="submit" value="Buscar" />
                                    </div>
                                </form>
                            </div>
                            <div className="funcion">
                                <form onSubmit={handleSubmitForFuncion} action="">
                                    <div className="input-group">
                                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                            <option value="1">Seleccione Funcion</option>
                                            <option value="2">Encuentro</option>
                                            <option value="3">Comercio</option>
                                            <option value="4">Administrativa</option>
                                            <option value="5">Almacen</option>
                                            <option value="6">Industrial</option>
                                            <option value="7">Educacion</option>
                                            <option value="8">Hospedaje</option>
                                            <option value="9">Salud</option>
                                        </select>
                                        <input type="submit" value="Buscar" />
                                    </div>
                                </form>
                            </div>
                            <div className="tipo-itse">
                                <form onSubmit={handleSubmitForTipoItse} action="">
                                    <div className="input-group">
                                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                            <option value="1">Tipo ITSE</option>
                                            <option value="2">Previa</option>
                                            <option value="3">Posterior</option>
                                        </select>
                                        <input type="submit" value="Buscar" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="nuevo-registro">
                        <button id="showPopup" className="new-register">Nuevo Registro</button>
                        <div className="overlay-control" id="overlay"></div>
                        <div className="popup-control" id="popup">
                            <h2>Nuevo Registro</h2>
                            <form id="form-new-register" action="#" method="post">
                                <div className="content-form">
                                    <div className="datos-left">
                                        <label htmlFor="">Numero Expediente</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Tipo Itse</label>
                                        <select name="" id="">
                                            <option value="">-------</option>
                                            <option value="">Previa</option>
                                            <option value="">Posterior</option>
                                        </select>
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
                                        <label htmlFor="">Nivel de Riesgo</label>
                                        <select name="" id="">
                                            <option value="1">-------</option>
                                            <option value="2">Bajo</option>
                                            <option value="3">Medio</option>
                                            <option value="4">Alto</option>
                                            <option value="5">Muy Alto</option>
                                            <option value="6">ECSE</option>
                                        </select>
                                        <label htmlFor="">Razon Social</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Nombre Establecimiento</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Giro del Negocio</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Datos Solicitante</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Fecha de Ingreso</label>
                                        <input type="date" className="fecha" />
                                        <label htmlFor="">Fecha de Ingreso SGDC</label>
                                        <input type="date" className="fecha" />
                                        <label htmlFor="">Barrio</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Nombre Habilitacion</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Area Ocupada</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Numero Pisos</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Manzana</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Tipo Via</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Nombre Via</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Numero Municipal</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Licencia</label>
                                        <input type="text" name="" id="" />
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
                                            <option value="1">-------</option>
                                            <option value="2">Mesa de Partes</option>
                                            <option value="3">Licencia</option>
                                            <option value="4">Subgerencia</option>
                                            <option value="5">Ingenieria</option>
                                            <option value="6">Area Legal</option>
                                            <option value="7">Administracion</option>
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
