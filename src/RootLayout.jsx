import { Outlet } from 'react-router-dom'
import Navbar from './Section/Navbar'

const RootLayout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen font-jost text-slate-900">
                <Navbar />
                <main className="flex-1">
                    <Outlet />
                </main>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default RootLayout