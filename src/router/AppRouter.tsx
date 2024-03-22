import { Navigate, createBrowserRouter } from "react-router-dom";
import { SynnexaTemplate } from "@/modules/synnexa/templates/SynnexaTemplate";
import { HomePage } from "@/modules/synnexa/pages/HomePage/HomePage";
import { ControlPage } from "@/modules/synnexa/pages/ControlPage/ControlPage";
import { ExpedientePage } from "@/modules/synnexa/pages/ExpedientePage/ExpedientePage";
import { ProgramacionPage } from "@/modules/synnexa/pages/ProgramacionPage/ProgramacionPage";
import { IngenierosPage } from "@/modules/synnexa/pages/IngenierosPage/IngenierosPage";
import { SilecioPositivoPage } from "@/modules/synnexa/pages/SilecioPositivo/SilecioPositivoPage";
// import { LoginPage } from "@/modules/auth/pages/LoginPage/LoginPage";
// import { LostPassword } from "@/modules/auth/pages/LostPassword/LostPassword";
// import { RegisterPage } from "@/modules/auth/pages/RegisterPage/RegisterPage";
// import { AuthTemplate } from "@/modules/auth/templates/AuthTemplate";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <SynnexaTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
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
  },
  // {
  //   path: "/auth/*",
  //   element: <AuthTemplate />,
  //   children: [
  //     {
  //       path: 'login',
  //       index: true,
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: 'register',
  //       element: <RegisterPage />,
  //     },
  //     {
  //       path: 'lost-password',
  //       element: <LostPassword />,
  //     },
  //     {
  //       path: '/auth/*',
  //       element: <Navigate to="login" />,
  //     },
  //   ],
  // },
]);
