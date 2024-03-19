import ProgramacionServices from "@/services/ProgramacionServices";
import { useNavigate } from "react-router-dom"


const useProgramacionPage = () => {
    const navigate = useNavigate();
    const apiProgramacionService = new ProgramacionServices();

    const navegacionCierreSesion = () => {
        navigate("/");
    }
    const navegacionProgramacion = () => {
        navigate("/programacion");
    }
    const navegacionExpediente = () => {
        navigate("/expediente");
    }
    const navegacionControl = () => {
        navigate("/control");
    }
    const programacionList = async(): Promise<Object[]> => {
        try {
            const response = await apiProgramacionService.getAll();
            return response.data.data;
        } catch (error) {
            throw new Error('Error al buscar expedientes: ' + error);
        }
    };

    return (
        {
            navegacionCierreSesion, 
            navegacionProgramacion,
            navegacionExpediente,
            navegacionControl,
            programacionList,
        }
    )

}

export default useProgramacionPage