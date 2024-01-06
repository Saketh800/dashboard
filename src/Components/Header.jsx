import { FaBarsStaggered } from "react-icons/fa6";


const Header = () => {
  return (
    <section className="bg-black text-white w-[68.4rem] h-[4.5rem]">
        <div className="flex justify-between px-12 py-5 text-3xl">
            <div className="font-bold">
                <p>Tool<span className="text-orange-400">fe</span></p>
            </div>
            <div>
            <FaBarsStaggered />
            </div>
        </div>
    </section>
  )
}

export default Header;