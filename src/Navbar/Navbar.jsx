import { useState } from "react";
import Link from "./link/Link";
import { FaRegWindowClose, FaAlignJustify } from 'react-icons/fa';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];
    return (
        <nav className="text-black p-4 bg-yellow-300 text-center container mx-auto rounded-lg">
            <div className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}>
                {
                    open === true ? <FaRegWindowClose></FaRegWindowClose> : <FaAlignJustify></FaAlignJustify>
                }

            </div>
            <ul className={`md:flex duration-1000 absolute my-2 p-4 md:static md:bg-slate-100 md:rounded-xl
            ${open ? 'top-12' : '-top-60'} bg-yellow-400 shadow-lg`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;