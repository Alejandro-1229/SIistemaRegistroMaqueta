import SilecioPositivoServices from "@/services/SilencioPositivoServices";
import { useNavigate } from "react-router-dom";

const useSilencioPositivoPage = () => {
    const navigate = useNavigate();
    const apiSilecioPositivo = new SilecioPositivoServices;

    const navegacionCierreSesion = () => {
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

    return (
        {
            navegacionCierreSesion,
            navegacionIngenieros,
            navegacionSilecioPositivo,
            silencioPositivoList,
        }
    )
}
export default useSilencioPositivoPage;