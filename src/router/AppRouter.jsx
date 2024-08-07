import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {
  return (
    
    <Routes>
        {/* Login Y Registro */}
        <Route path="/auth/*" element={<AuthRoutes />}/>

        {/* HandballApp */}
        {/* <Route /> */}
    </Routes>

  )
}
