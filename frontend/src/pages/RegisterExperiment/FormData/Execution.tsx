import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const executionSchema = z.object({
    dataCollect: z.string(),
    training: z.string(),
    pilotProject: z.string(),
    experimentConduction: z.string(),
    experimentConductionDate: z.coerce.date(),
    experimentConductionPlace: z.string()
})

type ExecutionData = z.infer<typeof executionSchema>

export function Execution() {

    const { register, handleSubmit, formState: { errors } } = useForm<ExecutionData>({
        resolver: zodResolver(executionSchema),
    })

    return (
        <main className="flex items-center justify-center h-full bg-gray-50">
            <form onSubmit={handleSubmit(SubmitForm)} className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">EXECUTION</p>

                <label htmlFor="dataCollect">Data Collect:</label>
                <input type="dataCollect" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('dataCollect')} />
                {errors.dataCollect && <span>{errors.dataCollect.message}</span>}

                <label htmlFor="training">Training:</label>
                <input type="training" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('training')} />
                {errors.training && <span>{errors.training.message}</span>}

                <label htmlFor="pilotProject">Pilot Project:</label>
                <input type="pilotProject" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('pilotProject')} />
                {errors.pilotProject && <span>{errors.pilotProject.message}</span>}

                <label htmlFor="experimentConduction">Experiment Conduction:</label>
                <input type="experimentConduction" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentConduction')} />
                {errors.experimentConduction && <span>{errors.experimentConduction.message}</span>}

                <label htmlFor="experimentConductionDate">Experiment Conduction Date: </label>
                <input type="experimentConductionDate" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentConductionDate')} />
                {errors.experimentConductionDate && <span>{errors.experimentConductionDate.message}</span>}

                <label htmlFor="experimentConductionPlace">Experiment Conduction Place: </label>
                <input type="experimentConductionPlace" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentConductionPlace')} />
                {errors.experimentConductionPlace && <span>{errors.experimentConductionPlace.message}</span>}
            </form>
        </main>
    )
}