import { createBrowserRouter } from "react-router-dom"
import ComponentLab from "../pages/ComponentLab"
import App from "./App"
export const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    children: [
      { path: "lab", element: <ComponentLab /> },
    ],
  },
])
