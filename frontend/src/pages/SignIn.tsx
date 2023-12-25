import Layout from "../components/Layout";

function SignIn() {

    return (
        <Layout>
            <div className="flex items-center justify-center h-full bg-gray-50 ">
                <div className="border-[1px] w-[448px] h-auto flex flex-col my-12 box-border text-center bg-white">
                    <p className="text-center text-black font-bold text-xl mt-12 ">SIGN IN</p>
                    <input type="text" placeholder="Email" 
                        className="border-[1px] p-2 rounded w-96 mt-12 h-12 mx-8" />
                    <input type="text" placeholder="Email"  
                        className="border-[1px] p-2 rounded w-96 mt-8 h-12 mx-8" />
                    <div className="flex items-center mt-8 mx-8">
                        <input type="checkbox" id="connected" className="mr-2 h-4 w-4"/>
                        <label htmlFor="connected" className="">Keep me connected</label>
                    </div>
                    <button className="mt-3 h-12 p-2 bg-orange-600 font-bold text-white rounded w-96 mx-8 mb-12">SIGN IN</button>

                </div>
            </div>
        </Layout>
    )
}
export default SignIn