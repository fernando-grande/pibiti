// import Footer from "./Footer"
import Header from "./Header"

function Layout({children}: any) {
    return (
        <div className="grid grid-flow-row grid-rows-[60px_1fr] md:grid-rows-[120px_1fr]">
            <Header/>
            {children}
            {/* <Footer/> */}
        </div>
    )
}
export default Layout