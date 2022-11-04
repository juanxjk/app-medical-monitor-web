import ConfigView from "./views/ConfigView";
import ChangePasswordView from "./views/ConfigView/ChangePasswordView";
import DashboardView from "./views/DashboardView";
import HomeView from "./views/DashboardView/HomeView";
import DevicesView from "./views/DevicesView";
import DeviceView from "./views/DevicesView/DeviceView";
import ErrorView from "./views/ErrorView";
import LoginView from "./views/LoginView";
import PatientsView from "./views/PatientsView";
import PatientView from "./views/PatientsView/PatientView";
import SignInView from "./views/SignInView";
import UsersView from "./views/UsersView";
import UserView from "./views/UsersView/UserView";

const routes = [
  {
    name: "index",
    path: "/",
    element: <DashboardView />,
    errorElement: <ErrorView />,
    children: [
      {
        name: "home-dashboard",
        path: "/",
        element: <HomeView />,
      },
      {
        name: "config",
        path: "/config",
        element: <ConfigView />,
        children: [
          {
            name: "change-password",
            path: "change-password",
            element: <ChangePasswordView />,
          },
        ],
      },
      {
        name: "users",
        path: "/users",
        element: <UsersView />,
      },
      {
        name: "user-view",
        path: "/user/:id",
        element: <UserView />,
      },
      {
        name: "patients",
        path: "/patients",
        element: <PatientsView />,
      },
      {
        name: "patient-view",
        path: "/patient/:id",
        element: <PatientView />,
      },
      {
        name: "devices",
        path: "/devices",
        element: <DevicesView />,
      },
      {
        name: "device-view",
        path: "/device/:id",
        element: <DeviceView />,
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    element: <LoginView />,
  },
  {
    name: "sign-in",
    path: "/sign-in",
    element: <SignInView />,
  },
  {
    name: "404",
    path: "*",
    element: <ErrorView />,
  },
];

export default routes;
