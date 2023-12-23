interface GeneralInfoProps {
    onNext: () => void
}

function GeneralInformation2({onNext}: GeneralInfoProps) {
    return (
        <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px] ">
                <p className="font-bold text-2xl mb-6">GENERAL INFORMATION</p>
                <p className="font-bold text-xl mb-1">Authors name:</p>
                <input type="text" placeholder="Example: " name="authorsName"
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">University:</p>
                <input type="text" placeholder="Example: " name="university"
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Adress:  (optional)</p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <p className="font-bold text-xl mb-1">Contact Email:  (optional)</p>
                <input type="text" placeholder="Example: "
                    className="w-96 border-[1px] p-2 rounded-md mb-6"/>

                <div className="flex justify-center">
                <button className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24"
                    onClick={onNext}>
                    NEXT
                </button>
                </div>
            </div>
        </div>
    )
}
export default GeneralInformation2