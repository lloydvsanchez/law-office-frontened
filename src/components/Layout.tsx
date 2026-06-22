import { Outlet } from 'react-router-dom'
import Navbar     from "../components/Navbar";
import Footer     from "../components/Footer";

export function Layout() {
  return (
    <>
      <Navbar/>
      <div className="flex min-h-screen flex-col bg-white text-slate-800">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer/>
    </>
  )
}
