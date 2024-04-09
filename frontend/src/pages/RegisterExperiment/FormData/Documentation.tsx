import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const documentationSchema = z.object({
    domain: z.string(),
    goal: z.string(),
    result: z.string(),
    experimentalTemplate: z.string()
})

type DocumentationData = z.infer<typeof documentationSchema>

export function Documentation() {

    const { register, handleSubmit, formState: { errors } } = useForm<DocumentationData>({
        resolver: zodResolver(documentationSchema),
    })

    return (
        <main className="flex items-center justify-center h-full bg-gray-50">
            <form className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">DOCUMENTATION</p>

                <label htmlFor="domain">Domain:</label>
                <input type="domain" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('domain')} />
                {errors.domain && <span>{errors.domain.message}</span>}

                <label htmlFor="goal">Training:</label>
                <input type="goal" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('goal')} />
                {errors.goal && <span>{errors.goal.message}</span>}

                <label htmlFor="result">Result:</label>
                <input type="result" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('result')} />
                {errors.result && <span>{errors.result.message}</span>}

                <label htmlFor="experimentalTemplate">Experimental Template:</label>
                <input type="experimentalTemplate" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentalTemplate')} />
                {errors.experimentalTemplate && <span>{errors.experimentalTemplate.message}</span>}
            </form>
        </main>
    )
}