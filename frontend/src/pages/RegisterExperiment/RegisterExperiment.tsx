import { useNavigate } from "react-router-dom"
import Layout from "../../components/Layout"

function RegisterExperiment() {
    const navigate = useNavigate()

    return (
        <Layout>
            <div className="bg-gray-700 h-full w-full">
                <div className="grid grid-cols-2 grid-rows-6 mt-8 mx-3 md:mx-8 bg-blue-50  h-max">
                    <div className="flex flex-col items-center justify-start border-r-[1px]">
                        <p className="bg-sky-600 h-16 w-16 mt-3 text-white font-bold text-3xl
                            flex justify-center items-center rounded-full">
                            1
                        </p>
                        <p className="font-bold text-xl">GENERAL INFORMATION</p>
                    </div>
                    <div className="flex flex-col items-center justify-start border-r-[1px]">
                        <p className="bg-sky-600 h-16 w-16 mt-3 text-white font-bold text-3xl
                            flex justify-center items-center rounded-full">
                            2
                        </p>
                        <p className="font-bold text-xl">DOCUMENTATION</p>
                    </div>
                    <div className="flex flex-col items-center justify-start border-r-[1px]">
                        <p className="bg-sky-600 h-16 w-16 mt-3 text-white font-bold text-3xl
                            flex justify-center items-center rounded-full">
                            3
                        </p>
                        <p className="font-bold text-xl">EXPERIMENT PLANNING</p>
                    </div>
                    <div className="flex flex-col items-center justify-start border-r-[1px]">
                        <p className="bg-sky-600 h-16 w-16 mt-3 text-white font-bold text-3xl
                            flex justify-center items-center rounded-full">
                            4
                        </p>
                        <p className="font-bold text-xl">EXECUTION</p>
                    </div>                    
                    <div className="flex flex-col items-center justify-start">
                        <p className="bg-sky-600 h-16 w-16 mt-3 text-white font-bold text-3xl
                            flex justify-center items-center rounded-full">
                            5
                        </p>
                        <p className="font-bold text-xl">ANALYSIS</p>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <p className="bg-sky-600 h-16 w-16 mt-3 text-white font-bold text-3xl
                            flex justify-center items-center rounded-full">
                            6
                        </p>
                        <p className="font-bold text-xl">DISCUSSION</p>
                    </div>
                </div>
                <button onClick={() => navigate('./form-register')}>
                    START
                </button>
            </div>
        </Layout>
    )
}
export default RegisterExperiment