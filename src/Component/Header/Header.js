import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItem = <>
        <li><Link to='/'>Solution
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        </Link></li>
        <li tabIndex="0">
            <Link to='/' className="justify-between">
                Features
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </Link>
        </li>
        <li><Link to='/'>Pricing</Link></li>
        <li><Link to='/'>Support
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        </Link></li>
    </>;

    return (
        <header className='bg-accent'>
            <div className='w-full lg:w-11/12 px-4 py-2 lg:px-2 mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItem}
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">MailMaker</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/' className="btn mr-0 bg-accent text-black border-0 lg:mr-2 hover:bg-secondary">Login</Link>
                        <Link to='/' className="btn bg-black text-white hover:bg-primary">Sign Up</Link>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;