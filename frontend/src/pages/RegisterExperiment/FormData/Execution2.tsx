interface ExecutionProps {
    onPrev: () => void,
    onNext: () => void
}

function Execution2({onPrev, onNext}: ExecutionProps) {
    return (
        <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px] ">
                <p className="font-bold text-2xl mb-6">EXECUTION</p>
                <p className="font-bold text-xl mb-1">Preparation of the experiment: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Deviations from the plan: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">There was a pilot project?</p>
                <input type="checkbox" placeholder="Example: "
                    className="w-8 h-8 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">The pilot project was carried out??</p>
                <input type="checkbox" placeholder="Example: "
                    className="w-8 h-8 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">If yes, describe the condution of the pilot project</p>
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
export default Execution2