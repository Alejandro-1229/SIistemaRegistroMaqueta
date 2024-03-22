import IngeneiroServices from "@/services/IngeneroServices";
import { useNavigate } from "react-router-dom"

const useIngenierosPage = () => { 

    const navigate = useNavigate();
    const apiIngenieroService = new IngeneiroServices();

    const navegacionCierreSesion = () => {
        navigate("/");
    }
    const navegacionIngenieros = () => {
        navigate("/ingenieros");
    }
    const navegacionSilecioPositivo = () => { 
        navigate("/silencioPositivo");
    }

    const inspeccionSemanalList = async (): Promise<Object[]> => {
        try {
            const response = await apiIngenieroService.getAll();
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar expedientes: ' + error);
        }
    };

    const findNumeroExpediente = async(findNumeroExpediente: string): Promise<Object[]> => {
        try {
            const response = await apiIngenieroService.filtroNumeroExpediente(findNumeroExpediente);
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar el elemento: ' + error);
        }
    };



    return (
        {
            navegacionCierreSesion,
            navegacionIngenieros,
            navegacionSilecioPositivo,
            inspeccionSemanalList,
            findNumeroExpediente,
        }
    ) 
}

export default useIngenierosPage;