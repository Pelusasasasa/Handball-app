import { Route, Routes } from "react-router-dom";
import { HandballPage } from "../pages/HandballPage";

export const HandballRoutes = () => {
  return (
    <Routes>

        <Route path="/*" element={ <HandballPage /> } />

    </Routes>  
  )
}
