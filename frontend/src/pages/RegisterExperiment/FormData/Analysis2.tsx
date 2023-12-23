interface AnalysisProps {
    onPrev: () => void,
    onNext: () => void
}

function Analysis2({onPrev, onNext}: AnalysisProps) {
    return (
        <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px] ">
                <p className="font-bold text-2xl mb-6">ANALYSIS</p>
                <p className="font-bold text-xl mb-1">Describe Descriptive statistics: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Describe Data Set Preparation: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Describe Hypothesis testing:</p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Do it have qualitative analysis of the experiment?</p>
                <input type="checkbox" placeholder="Example: "
                    className="w-8 h-8 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">If yes, what qualitative analysis was performed? <br /> How the data has been analyzed?</p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Is the conclusion of the experiment based on P-value?</p>
                <input type="checkbox" placeholder="Example: "
                    className="w-8 h-8 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Did the study perform meta-analysis?</p>
                <input type="checkbox" placeholder="Example: "
                    className="w-8 h-8 border-[1px] p-2 rounded-md mb-6"/>

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
export default Analysis2