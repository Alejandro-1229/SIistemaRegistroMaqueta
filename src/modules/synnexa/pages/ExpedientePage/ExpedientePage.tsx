import "./ExpedientePage.scss";
import editExpedienteIcon from "../../../../assets/image/editar.png";
import sendExpedienteIcon from "../../../../assets/image/expediente.png";
import inspeccionLocalIcon from "../../../../assets/image/inspeccion-de-viviendas.png";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import { useEffect, useState } from "react";
import useExpedientePage from "./useExpedientePage";
import { Expediente } from "@/interfaces/Expediente";

export const ExpedientePage = () => {
    const [data, setData] = useState([]);
    const { crearProgramacion, navegacionCierreSesion, navegacionExpediente, navegacionProgramacion, navegacionControl, expedienteList } = useExpedientePage();



    const [isPopupExpediente, setIsPopupExpediente] = useState("popup-expediente--hide");

    const [isOverlayExpediente, setIsOverlayExpediente] = useState("overlay-expediente--hide");

    const [objExpediente, setObjExpediente] = useState<Expediente>({
        idExpe: "",
        ruc: "",
        fechaIngresoMP: "",
        fechaSGDC: "",
        fechaRecepcion: "",
        fechaRecepcionLF: "",
        fechaLimiteInspeccion: "",
        numeroInforme: "",
        estado: "",
        fecha: "",
        hora: "",
        inspectores: "",
        ilo: "",
    });

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
    const handleInputsExpediente = (e: any) => {
        const { name, value } = e.target;

        setObjExpediente({
            ...objExpediente,
            [name]: value
        });
    }

    const mandarProgramacion = async (id: any) => {
        try {
            await crearProgramacion(id);
            console.log(id);

        } catch (error) {
            console.log("Error al listar los expedientes");

        }
    }


    const mostrarPopupExpediente = (paramExpediente: Expediente) => {
        if (isPopupExpediente === "popup-expediente--hide") {
            setIsPopupExpediente("popup-expediente--show");
            setIsOverlayExpediente("overlay-expediente--show");
            setObjExpediente(paramExpediente);
        }

    }
    const ocultarPopupExpediente = () => {
        if (isPopupExpediente === "popup-expediente--show") {
            setIsPopupExpediente("popup-expediente--hide");
            setIsOverlayExpediente("overlay-expediente--hide");
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
                            <tr>
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
                            </tr>
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
                                    <td><button id="showPopup-expediente" onClick={() => mostrarPopupExpediente(expediente)}><img src={editExpedienteIcon} alt="boton-editar-expediente" /></button></td>
                                    <td><button type="submit"><img src={inspeccionLocalIcon} alt="boton-mandar-inspeccion" /></button></td>
                                    <td><button onClick={() => mandarProgramacion(expediente.idExpe)}><img src={sendExpedienteIcon} alt="boton-enviar-programacion" /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="overlay-expediente" id={isOverlayExpediente}></div>
                <div className="popup-expediente" id={isPopupExpediente}>
                    <h2>Actualizar Expediente</h2>
                    <form id="form-update-expediente" action="#" method="post">
                        <div className="content-form">
                            <div className="datos-left">
                                <label htmlFor="">Fecha Ingreso Mesa Partes</label>
                                <input onChange={handleInputsExpediente} type="date" name="fechaIngresoMP" id="" value={objExpediente.fechaIngresoMP} />
                                <label htmlFor="">Fecha Ingreso SGDC</label>
                                <input onChange={handleInputsExpediente} type="date" name="fechaSGDC" id="" value={objExpediente.fechaSGDC} />
                                <label htmlFor="">Fecha de Recepcion Inspeccion</label>
                                <input onChange={handleInputsExpediente} type="date" name="fechaRecepcion" id="" value={objExpediente.fechaRecepcion} />
                                <label htmlFor="">Recepcion de Licencia de Funcionamiento</label>
                                <input onChange={handleInputsExpediente} type="date" name="fechaRecepcionLF" id="" value={objExpediente.fechaRecepcionLF} />
                                <label htmlFor="">Fecha Limite Inspeccion</label>
                                <input onChange={handleInputsExpediente} type="date" name="fechaLimiteInspeccion" id="" value={objExpediente.fechaLimiteInspeccion} />
                            </div>
                            <div className="datos-rigth">

                                <label htmlFor="">Ruc</label>
                                <input onChange={handleInputsExpediente} type="text" name="ruc" id="" value={objExpediente.ruc} />
                                <label htmlFor="">N. Informe</label>
                                <input onChange={handleInputsExpediente} type="tel" name="numeroInforme" id="" value={objExpediente.numeroInforme} />
                                <label htmlFor="">Estado</label>
                                <select name="estado" id="" value={objExpediente.estado}>
                                    <option value="" disabled>-------</option>
                                    <option value="2">Aprobado</option>
                                    <option value="3">Desaprobado</option>
                                </select>
                                <label htmlFor="">Fecha</label>
                                <input onChange={handleInputsExpediente} type="date" name="fecha" id="" value={objExpediente.fecha} />
                                <label htmlFor="">Hora</label>
                                <input onChange={handleInputsExpediente} type="time" name="hora" id="" value={objExpediente.hora} />
                                <label htmlFor="">Inspectores</label>
                                <input onChange={handleInputsExpediente} type="text" name="inspectores" id="" value={objExpediente.inspectores} />
                                <label htmlFor="">ILO</label>
                                <input onChange={handleInputsExpediente} type="date" name="ilo" id="" value={objExpediente.ilo} />
                            </div>
                        </div>
                        <div className="buttons-update-expediente">
                            <input onChange={handleInputsExpediente} type="submit" value="Guardar" />
                            <input type="button" onClick={() => ocultarPopupExpediente()} value="Cancelar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}