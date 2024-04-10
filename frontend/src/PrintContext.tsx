import { useFormularioContext } from "./FormularioContext"

function PrintContext() {
    const { values } = useFormularioContext();

    return (
        <main>
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </main>
    )
}

export default PrintContext