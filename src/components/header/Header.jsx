import { Link } from "react-router-dom";



export default function Header(){
    return <div>
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto bg-blue-900">
            <Link to={'/'}>
                <div className="ml-5">
                    <h1 className="text-red-100 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
                        ShopMart
                    </h1>
                </div>
            </Link>
            <ul className="flex  items-center list-none space-x-6 text-white font-semibold">
                <Link to={'/'}>
                    <li className="cursor-pointer">Home</li>
                </Link>
                <Link to={'/cart'}>
                    <li className="cursor-pointer mr-4">Cart</li>
                </Link>
            </ul>
        </nav>
    </div>
}