interface ExpPlanningProps {
    onPrev: () => void,
    onNext: () => void
}

function ExperimentPlanning2({onPrev, onNext}: ExpPlanningProps) {
    return (
        <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px] ">
                <p className="font-bold text-2xl mb-6">EXPERIMENT PLANNING</p>
                <p className="font-bold text-xl mb-1">Goals :</p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Experimental Units:</p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Experimental Material: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Tasks: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Hypotheses: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Parameters: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Variables: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Experimental Design: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Procedure: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Is it a quasi-experiment? </p>
                <input type="checkbox" placeholder="Example: "
                    className="w-8 h-8 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Is it an original experiment? </p>
                <input type="checkbox" placeholder="Example: "
                    className="w-8 h-8 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Describe how was the selection of participants/experimental objects: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Describe the context selection: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>


                <div className="flex justify-center">
                    <button className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24"
                        onClick={onPrev}>
                        PREVIOUS
                    </button>
                    <button className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24"
                        onClick={onNext}>
                        NEXT
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ExperimentPlanning2