import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import RegisterExperiment from "../pages/RegisterExperiment/RegisterExperiment"
import Experiments from "../pages/Experiments/Experiments"
import SignIn from "../pages/SignIn"
import MyAccount from "../pages/MyAccount"
import FormRegister from "../pages/RegisterExperiment/FormRegister2"
import { Ex } from "../pages/example/Ex"

function MainRoutes() {
    return (
        <Routes>
            <Route path="/ex" element={<Ex/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/my-account" element={<MyAccount/>} />
            <Route path="/register-experiment" element={<RegisterExperiment/>} />
            <Route path="/register-experiment/form-register" element={<FormRegister/>}/>
            <Route path="/experiments" element={<Experiments/>} />
        </Routes>
    )
}
export default MainRoutes