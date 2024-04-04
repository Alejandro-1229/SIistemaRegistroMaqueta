import { createBrowserRouter } from "react-router-dom";
import { SynnexaTemplate } from "@/modules/synnexa/templates/SynnexaTemplate";
import { ControlPage } from "@/modules/synnexa/pages/ControlPage/ControlPage";
import { ExpedientePage } from "@/modules/synnexa/pages/ExpedientePage/ExpedientePage";
import { ProgramacionPage } from "@/modules/synnexa/pages/ProgramacionPage/ProgramacionPage";
import { IngenierosPage } from "@/modules/synnexa/pages/IngenierosPage/IngenierosPage";
import { SilecioPositivoPage } from "@/modules/synnexa/pages/SilecioPositivo/SilecioPositivoPage";
import { AuthTemplate } from "@/modules/auth/templates/AuthTemplate";
import { LoginPage } from "@/modules/auth/pages/LoginPage/LoginPage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthTemplate />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      }/*
      ,
      {
        path: 'logout',
        element: <RegisterPage />,
      }*/
    ],
  },
  {
    path: "/",
    element: <SynnexaTemplate />,
    children: [
      {
        path: 'control',
        element: <ControlPage />,
      },
      {
        path: 'expediente',
        element: <ExpedientePage />
      },
      {
        path: 'programacion',
        element: <ProgramacionPage />
      },
      {
        path: 'ingenieros',
        element: <IngenierosPage />
      },
      {
        path: 'silencioPositivo',
        element: <SilecioPositivoPage />
      }
    ],
  }
]);
