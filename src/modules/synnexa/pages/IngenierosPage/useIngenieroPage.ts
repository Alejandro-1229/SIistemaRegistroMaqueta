import AuthService from "@/services/AuthService";
import IngeneiroServices from "@/services/IngeneroServices";
import { useNavigate } from "react-router-dom"

const useIngenierosPage = () => { 

    const navigate = useNavigate();
    const apiIngenieroService = new IngeneiroServices();

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
    }

    const guardarInspeccion = async (id: string|number, body = {}): Promise<void> => {
        try {
            await apiIngenieroService.guardarInspeccion(id, body);
        } catch (error) {
            throw new Error('Error al guardar el elemento: ' + error);
        }
    }

    const cambiarFecha = async (body = {}): Promise<void> => {
        try {
            await apiIngenieroService.cambioFecha(body);
        } catch (error) {
            throw new Error('Error al reestablecer fechas: ' + (error.response?.data || error.message)); // Lanza un nuevo error con el mensaje específico
        }
    }

    const inspeccionSemanalList = async (): Promise<Object[]> => {
        try {
            const response = await apiIngenieroService.getAll();
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar expedientes: ' + error);
        }
    }

    const findNumeroExpediente = async(findNumeroExpediente: string): Promise<Object[]> => {
        try {
            const response = await apiIngenieroService.filtroNumeroExpediente(findNumeroExpediente);
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        } 
    }

    const findRazonSocial = async(razonSocial: string): Promise<Object[]> => {
        try {
            const response = await apiIngenieroService.filtroRazonSocial(razonSocial);
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }
    }
    
    const findFuncion = async (funcion: string, fechaInicio: string, fechaFinal: string) => {

        try {
            const response = await apiIngenieroService.filtroFuncion(funcion, fechaInicio, fechaFinal);
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }

    }



    return (
        {
            navegacionCierreSesion,
            navegacionIngenieros,
            navegacionSilecioPositivo,
            inspeccionSemanalList,
            findNumeroExpediente,
            findRazonSocial,
            findFuncion,
            guardarInspeccion,
            cambiarFecha
        }
    ) 
}

export default useIngenierosPage;