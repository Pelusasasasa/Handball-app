import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HandballRoutes } from "../handball/routes/HandballRoutes"

export const AppRouter = () => {
  return (
    
    <Routes>
        {/* Login Y Registro */}
        <Route path="/auth/*" element={<AuthRoutes />}/>

        <Route path="/*" element={<HandballRoutes />}/>
        {/* <Route /> */}
    </Routes>

  )
}
