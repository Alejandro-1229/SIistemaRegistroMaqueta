import "./SilecioPositivoPage.scss";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";
import imageCalendario from "../../../../assets/image/calendario.png";
import imageEliminar from "../../../../assets/image/eliminar.png";
import { useEffect, useState } from "react";
import useSilencioPositivoPage from "./useSilencioPositivoPage";
import axios from "axios";
import { SilencioPositivo } from "@/interfaces/SilencioPositivo";


export const SilecioPositivoPage = () => {
    const [isPopupSilencioPositivo, setIsPopupSilencioPositivo] = useState("popup-silencioPositivo--hide");

    const [isOverlaySilencioPositivo, setIsOverlaySilencioPositivo] = useState("overlay-silencioPositivo--hide");

    const [objFecha, setObjFecha] = useState<SilencioPositivo>({
        fechaInspeccion: ""
    });

    const [data, setData] = useState([]);
    const { silencioPositivoList, navegacionCierreSesion, navegacionIngenieros, navegacionSilecioPositivo } = useSilencioPositivoPage();
    const handleInputsSilencioPositivo = (e) => {
        const { name, value } = e.target;

        setObjFecha({
            ...objFecha,
            [name]: value
        });
    }

    useEffect(() => {
        listarSilenciosPositivos();
    }, []);

    const handleEliminar = async (id: string | number) => {
        try {
            await axios.patch(`http://localhost:8000/api/v1/programacionSemanal/updateCancelar/${id}`);
            ocultarPopupSilencioPositivo();
            window.location.reload();
        } catch (error) {
            console.error('Error al actualizar la fecha de Inspeccion:', error);
        }
    };

    const handleForSubmit =async(e) => {
        e.preventDefault();
        handleSubmit(objFecha.idPrSe)
    }
    

    const handleSubmit = async (id: string | number) => {
        try {
            await axios.patch(`http://localhost:8000/api/v1/programacionSemanal/actualizarFecha/${id}`, objFecha);
            ocultarPopupSilencioPositivo();
            window.location.reload();
        } catch (error) {
            console.error('Error al actualizar la fecha de Inspeccion:', error);
        }
    };

    const listarSilenciosPositivos = async () => {
        try {
            const silencioPositivo = await silencioPositivoList();
            setData(silencioPositivo);
        } catch (error) {
            console.log("Error al listar los expedientes");
        }
    }

    const mostrarPopupSilencioPositivo = (params: SilencioPositivo) => {
        if (isPopupSilencioPositivo === "popup-silencioPositivo--hide") {
            setIsPopupSilencioPositivo("popup-silencioPositivo--show");
            setIsOverlaySilencioPositivo("overlay-silencioPositivo--show");
            setObjFecha(params);
        }
    }

    const ocultarPopupSilencioPositivo = () => {
        if (isPopupSilencioPositivo === "popup-silencioPositivo--show") {
            setIsPopupSilencioPositivo("popup-silencioPositivo--hide");
            setIsOverlaySilencioPositivo("overlay-silencioPositivo--hide");
        }
    }


    return (
        <div className="global-silecio">
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
            <main className="table-content">
                <div className="filter-data">

                </div>
                <div id="box-table-silencio">
                    <table>
                        <thead>
                            <tr>
                                <th>Numero Expediente</th>
                                <th>Encargado</th>
                                <th>Local</th>
                                <th>Fecha Establecida</th>
                                <th colSpan={2}>Operaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(silencioPositivo => (
                                <tr key={silencioPositivo.idPrse}>
                                    <td>{silencioPositivo.numeroExp}</td>
                                    <td>{silencioPositivo.ingeniero_1}</td>
                                    <td>{silencioPositivo.local}</td>
                                    <td>{silencioPositivo.fechaInspeccion}</td>
                                    <td><button id="showPopup" type="submit" onClick={() => mostrarPopupSilencioPositivo(silencioPositivo)}><img src={imageCalendario} alt="Boton Restaurar Fecha" title="Boton Restaurar Fecha" /></button></td>
                                    <td><button type="submit" onClick={() => handleEliminar(silencioPositivo.idPrSe)}><img src={imageEliminar} alt="Boton Eliminar" title="Boton Eliminar" /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="overlay-silencio" id={isOverlaySilencioPositivo}></div>

                <div className="popup-silencio" id={isPopupSilencioPositivo}>
                    <h2>Actualizar Fecha</h2>
                    <form id="form-aplazar-fecha" onSubmit={handleForSubmit}>
                        <div className="content-form-silencio">
                            <label htmlFor="">Nueva Fecha</label>
                            <input type="date" onChange={handleInputsSilencioPositivo} required name="fechaInspeccion" />
                        </div>
                        <div className="buttons">
                            <input type="submit" value="Guardar" />
                            <input type="button" onClick={() => ocultarPopupSilencioPositivo()} value="Cancelar" />
                        </div>
                    </form>
                </div>
            </main>

        </div>
    );

}