import { useState } from 'react';

const MenuDropdown = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen);

    return (
        <div className="relative md:hidden">
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-[#EDEDED] rounded-2xl px-4 py-2 text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                </svg>

            </button>


            {menuOpen && (
                <ul className="absolute top-full left-0 w-auto bg-[#EDEDED] rounded-2xl shadow-md p-4 space-y-2 text-lg font-normal">
                    <li className="hover:text-teal-500 cursor-pointer">About me</li>
                    <li className="hover:text-teal-500 cursor-pointer">Skills</li>
                    <li className="hover:text-teal-500 cursor-pointer">Education</li>
                    <li className="hover:text-teal-500 cursor-pointer">Experience</li>
                </ul>
            )}
        </div>
    );
};

export default MenuDropdown;