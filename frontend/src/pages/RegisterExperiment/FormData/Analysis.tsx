import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const analysisSchema = z.object({
    implicationTreatmentDeveloped: z.string(),
    mortalityRate: z.string(),
    conclusionValidity: z.boolean(),
    constructoValidity: z.boolean(),
    externalValidity: z.boolean(),
    internalValidity: z.boolean(),
    effectSize: z.string(),
    statisticalTool: z.string(),
    descriptiveStatistics: z.string(),
    correlation: z.boolean(),
    hypothesisTest: z.boolean(),
    normalityTest: z.boolean()
})

type AnalysisData = z.infer<typeof analysisSchema>

export function Analysis() {

    const { register, handleSubmit, formState: { errors } } = useForm<AnalysisData>({
        resolver: zodResolver(analysisSchema),
    })

    return (
        <main className="flex items-center justify-center h-full bg-gray-50">
            <form className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">ANALYSIS</p>

                <label htmlFor="implicationTreatmentDeveloped">Implication of the Developed Treatment: </label>
                <input type="implicationTreatmentDeveloped" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('implicationTreatmentDeveloped')} />
                {errors.implicationTreatmentDeveloped && <span>{errors.implicationTreatmentDeveloped.message}</span>}

                <label htmlFor="mortalityRate">Mortality Rate: </label>
                <input type="mortalityRate" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('mortalityRate')} />
                {errors.mortalityRate && <span>{errors.mortalityRate.message}</span>}

                <label htmlFor="effectSize">Effect Size: </label>
                <input type="effectSize" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('effectSize')} />
                {errors.effectSize && <span>{errors.effectSize.message}</span>}

                <label htmlFor="statisticalTool">Statistical Tool: </label>
                <input type="statisticalTool" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('statisticalTool')} />
                {errors.statisticalTool && <span>{errors.statisticalTool.message}</span>}

                <label htmlFor="descriptiveStatistics">Descriptive Statistics: </label>
                <input type="descriptiveStatistics" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('descriptiveStatistics')} />
                {errors.descriptiveStatistics && <span>{errors.descriptiveStatistics.message}</span>}
            </form>
        </main>
    )
}