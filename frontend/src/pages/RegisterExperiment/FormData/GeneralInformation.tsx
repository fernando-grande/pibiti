import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import { useFormularioContext } from "../../../FormularioContext"

interface GeneralInformationProps {
    onNext: () => void
}

const generalInfoSchema = z.object({
    authorsName: z.string().min(1, "This field is mandatory"),
    university: z.string().min(1, "This field is mandatory"),
    addres: z.string(),
    contactEmail: z.string()
})

type GeneralInfoData = z.infer<typeof generalInfoSchema>

export function GeneralInformation({onNext}: GeneralInformationProps) {

    const [output, setOutput] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm<GeneralInfoData>({
        resolver: zodResolver(generalInfoSchema),
    })


    // const { values } = useFormularioContext();

    function printData(data: any) {
        setOutput(JSON.stringify(data, null, 4))
    }

    return (
        <main className="flex items-center justify-center h-full bg-gray-50">
            <form onSubmit={handleSubmit(printData)} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">GENERAL INFORMATION</p>

                <label htmlFor="authorsName">Authors Name:</label>
                <input type="authorsName" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('authorsName')} />
                {errors.authorsName && <span>{errors.authorsName.message}</span>}

                <label htmlFor="university">University:</label>
                <input type="university" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('university')} />
                {errors.university && <span>{errors.university.message}</span>}

                <label htmlFor="addres">Adress: (Optional)</label>
                <input type="addres" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('addres')} />
                {errors.addres && <span>{errors.addres.message}</span>}

                <label htmlFor="contactEmail">Contact Email: (Optional)</label>
                <input type="contactEmail" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('contactEmail')} />
                {errors.contactEmail && <span>{errors.contactEmail.message}</span>}

                <button onClick={onNext} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24" >
                    NEXT
                </button>

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PRINT DATA
                </button>

                <pre>{output}</pre>
            </form>
        </main>
    )
}