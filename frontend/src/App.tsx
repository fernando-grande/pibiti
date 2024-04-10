import { BrowserRouter } from "react-router-dom"
import MainRoutes from "./routes/MainRoutes"
import { FormProvider } from "./FormularioContext"

function App() {
    return (
        <FormProvider>
            <BrowserRouter>
                <MainRoutes/>
            </BrowserRouter>
        </FormProvider>
    )
}
export default App