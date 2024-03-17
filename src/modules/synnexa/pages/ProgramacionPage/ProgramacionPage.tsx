import "./ProgramacionPage.scss";
import miImagen from "../../../../assets/image/Diseño_sin_título-removebg-preview.png";

export const ProgramacionPage = () => {
    return (
        <div className="global-programacion">

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
            <main className="table-content">
                <div className="box-table">
                    <table>
                        <thead>
                            <th>N. Expediente</th>
                            <th>Ruc</th>
                            <th>Nombre Comercial</th>
                            <th>Direccion</th>
                            <th>Tipo</th>
                            <th>Inspector</th>
                            <th>Firma</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Fecha Devolucion</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>lkjoiu123456</td>
                                <td>987654321159</td>
                                <td>Centro Recreativo "Los Arcos del Edén"</td>
                                <td>Av. América Oeste N° 750  Tienda A-1023 y A-1025 C.C. Mall Aventura Plaza, Urb. El Ingenio</td>
                                <td>Posterior</td>
                                <td>Ing. Carlos Villanueva</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>2024-03-01</td>
                            </tr>
                            <tr>
                                <td>lkjoiu123456</td>
                                <td>987654321159</td>
                                <td>Centro Recreativo "Los Arcos del Edén"</td>
                                <td>Av. América Oeste N° 750  Tienda A-1023 y A-1025 C.C. Mall Aventura Plaza, Urb. El Ingenio</td>
                                <td>Posterior</td>
                                <td>Ing. Carlos Villanueva</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>2024-03-01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}