import { useState, useRef, useEffect } from 'react';
import Logo from '../assets/images/LOGO.jpg';
import Hamburger from '../assets/icons/🦆 icon _hamburger menu_.svg';

const Nav = () => {
    const navItems = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
    const styles = {
        listItem: "hover:bg-[#4c8d48] hover:text-white transition-colors duration-300 px-4 py-2 rounded",
        mobileListItem: "w-full block hover:bg-[#4c8d48] hover:text-white transition-colors duration-300 text-center",
        navButton: "p-2",
        dropdown: "bg-white shadow-lg mt-2 rounded-lg md:hidden w-full overflow-hidden transition-max-height duration-700 ease-in-out"
    };

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const dropdownRef = useRef(null);

    const toggleMenu = () => setIsOpen(prev => !prev);

    useEffect(() => {
        if (dropdownRef.current) {
            setHeight(isOpen ? dropdownRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    const renderNavItems = (items, style) => (
        items.map((item, index) => (
            <li key={index} className={style}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="block w-full text-center">
                    {item}
                </a>
            </li>
        ))
    );

    return (
        <>
            <nav className="flex items-center justify-center p-2 text-black font-bold">
                <img src={Logo} alt="Logo" className="px-8 h-14" />
                <div className="hidden md:flex">
                    <ul className="flex space-x-14">
                        {renderNavItems(navItems, styles.listItem)}
                    </ul>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className={styles.navButton} aria-label="Toggle navigation">
                        <img src={Hamburger} alt="Menu" className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            <div
                ref={dropdownRef}
                style={{ maxHeight: `${height}px` }}
                className={styles.dropdown}
            >
                <ul className="flex flex-col space-y-2 p-4">
                    {renderNavItems(navItems, styles.mobileListItem)}
                </ul>
            </div>
        </>
    );
};

export default Nav;
