import { useState } from "react"
import Layout from "../../components/Layout"
import GeneralInformation from "./FormData/GeneralInformation2"
import Documentation from "./FormData/Documentation2"
import ExperimentPlanning from "./FormData/ExperimentPlanning2"
import Execution from "./FormData/Execution2"
import Analysis from "./FormData/Analysis2"
import Discussion from "./FormData/Discussion2"

function FormRegister2() {
    const [currentForm, setCurrentForm] = useState<number>(1)

    const nextForm = () => {
        setCurrentForm((currentForm) => currentForm + 1)
    }

    const prevForm = () => {
        setCurrentForm((currentForm) => currentForm - 1)
    }

    const handleSubmit = () => {
        console.log("submited!!")
    }

    const renderForm = () => {
        switch(currentForm) {
            case 1:
                return (
                    <GeneralInformation
                        onNext={nextForm}
                    />
                )
            case 2:
                return (
                    <Documentation
                        onPrev={prevForm}
                        onNext={nextForm}
                    />
                )
            case 3:
                return (
                    <ExperimentPlanning
                        onPrev={prevForm}
                        onNext={nextForm}
                    />
                )
            case 4:
                return (
                    <Execution
                        onPrev={prevForm}
                        onNext={nextForm}
                    />
                )
            case 5:
                return (
                    <Analysis
                        onPrev={prevForm}
                        onNext={nextForm}
                    />
                )
            case 6:
                return (
                    <Discussion
                        onPrev={prevForm}
                        onFinish={handleSubmit}
                    />
                )
        }
    }

    return (
        <Layout>
            <div>{renderForm()}</div>
        </Layout>
    )
}
export default FormRegister2