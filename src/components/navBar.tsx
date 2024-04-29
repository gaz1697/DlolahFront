import { Link } from 'react-router-dom';
import navLinks from '../data/nav_links';

const Navbar = () => {
    return (
        <nav className='bg-primary text-white focus:text-white'>
            <div className='navbar '>
                <div className='flex-1'>
                    <ul className='menu menu-horizontal px-1'>
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link to={link.href}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-auto'>
                    <Link to={'/'} className='btn btn-ghost text-xl'>
                        Dlolah
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
