import AuthService from "@/services/AuthService";
import SilecioPositivoServices from "@/services/SilencioPositivoServices";
import { useNavigate } from "react-router-dom";

const useSilencioPositivoPage = () => {
    const navigate = useNavigate();
    const apiSilecioPositivo = new SilecioPositivoServices;

    const navegacionCierreSesion = () => {
        const apiClose = new AuthService();
        apiClose.logout();
        navigate("/"); 
    }
    const navegacionIngenieros = () => { 
        navigate("/ingenieros");
    }
    const navegacionSilecioPositivo = () => { 
        navigate("/silencioPositivo");
    };

    const silencioPositivoList = async () : Promise<Object[]> => {
        try {
            const response = await apiSilecioPositivo.getAll();
            return response.data.data;
        } catch (error) {
            throw new Error("Error al busca los silencio positivos " + error);
        }
    };

    const cambiarEstadoEliminado = async (id: string|number) : Promise<void>=> {
        try {
            await apiSilecioPositivo.eliminarElemento(id);
        } catch (error) {
            throw new Error("Error al eliminar al elemento" + error);
        }
    };

    const restaurarFecha = async (id: string|number, body = {}) : Promise<void>=> {
        try {
            await apiSilecioPositivo.restaurarFecha(id,body);
        } catch (error) {
            throw new Error("Error al reestablecer la fecha " + error);
        }
    };

    const getCantidadElementos = async () : Promise<void>=> {
        try {
           const response = await apiSilecioPositivo.cantidadElementos();
           return response.data.data
        } catch (error) {
            throw new Error("Error al obtener la cantidad de elementos" + error);
        }
    };  

    return (
        {
            navegacionCierreSesion,
            navegacionIngenieros,
            navegacionSilecioPositivo,
            silencioPositivoList,
            cambiarEstadoEliminado,
            restaurarFecha,
            getCantidadElementos
        }
    )
}
export default useSilencioPositivoPage;