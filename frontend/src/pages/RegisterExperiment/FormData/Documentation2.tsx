interface DocProps {
    onPrev: () => void,
    onNext: () => void
}

function Documentation2({onPrev, onNext}: DocProps) {

    return (
        <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px] ">
                <p className="font-bold text-2xl mb-6">DOCUMENTATION</p>
                <p className="font-bold text-xl mb-1">Abstract: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Introduction: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Related Work: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Conclusion and Future Work: </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Is the experimental package informed? </p>
                <input type="checkbox" placeholder="Example: "
                    className="w-8 h-8 border-[1px] accent-sky-600 p-2 rounded-md mb-6 "/>

                <p className="font-bold text-xl mb-1">If yes, what URL? The link is still available? </p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">References:  </p>
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
export default Documentation2