import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const experimentPlanningSchema = z.object({
    task: z.string(),
    sampleSize: z.string(),
    experimentalPackage: z.string(),
    nuleHypothesis: z.boolean(),
    alternativeHypothesis: z.boolean(),
    independentVariables: z.string(),
    dependentVariables: z.string(),
    simpleRandomSampling: z.boolean(),
    systematicSampling: z.boolean(),
    stratifiedRandomSampling: z.boolean(),
    convenienceSampling: z.boolean(),
    balancing: z.string(),
    block: z.string(),
    randomness: z.string(),
    oneFactorTwoTreatments: z.boolean(),
    oneFactorPlusTwoTreatments: z.boolean(),
    twoFactorsTwoTreatments: z.boolean(),
    plusTwoFactorsEachTwoTreatments: z.boolean(),
    artifact: z.string(),
    materialValidation: z.string()
})

type ExperimentPlanningData = z.infer<typeof experimentPlanningSchema>

export function ExperimentPlanning() {

    const { register, handleSubmit, formState: { errors } } = useForm<ExperimentPlanningData>({
        resolver: zodResolver(experimentPlanningSchema),
    })

    return (
        <main className="flex items-center justify-center h-full bg-gray-50">
            <form className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">EXPERIMENT PLANNING</p>

                <label htmlFor="task">Task: </label>
                <input type="task" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('task')} />
                {errors.task && <span>{errors.task.message}</span>}

                <label htmlFor="sampleSize">Sample Size: </label>
                <input type="sampleSize" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('sampleSize')} />
                {errors.sampleSize && <span>{errors.sampleSize.message}</span>}

                <label htmlFor="experimentalPackage">Experimental Package: </label>
                <input type="experimentalPackage" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentalPackage')} />
                {errors.experimentalPackage && <span>{errors.experimentalPackage.message}</span>}
            </form>
        </main>
    )
}