import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    const handleMouseEnter2 = () => {
        setIsDropdownOpen2(true);
    };

    const handleMouseLeave2 = () => {
        setIsDropdownOpen2(false);
    };

    const DropdownMenu = () => {
        return (
            <div
                className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link to="/ceh" className="dropdown-item">
                    Khóa học CEH
                </Link>
                <Link to="/aws" className="dropdown-item">
                    Khóa học AWS Cloud Foundation
                </Link>
            </div>
        );
    };

    const DropdownMenu2 = () => {
        return (
            <div
                className={`dropdown-menu ${isDropdownOpen2 ? 'show' : ''}`}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
            >
                <Link to="/anningmang" className="dropdown-item">
                    An ninh mạng
                </Link>
                <Link to="/phattrienphanmem" className="dropdown-item">
                    Phát triển phần mềm
                </Link>
                <Link to="/thietkedohoa" className="dropdown-item">
                    Thiết kế đồ họa
                </Link>
                <Link to="/thuongmaidientu" className="dropdown-item">
                    Thương mại điện tử
                </Link>
            </div>
        );
    };
    return (
        <React.Fragment>
            <div className="">
                <header className="header">
                    {/* Top Bar */}
                    <div className="top_bar">
                        <div className="top_bar_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="top_bar_content d-flex flex-row align-items-center justify-content-end">
                                            <ul className="top_bar_contact_list">
                                                <li>
                                                    <div className="question">Learning By Doing</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-phone" aria-hidden="true" />
                                                    <div>0938 205 966 </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope-o" aria-hidden="true" />
                                                    <div>quangcao@ispace.edu.vn</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Header Content */}
                    <div className="header_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="header_content d-flex flex-row align-items-center ">
                                        <div className="logo_container justify-content-start">
                                            <a href="/">
                                                <img src="images/logo-01.png" />
                                            </a>
                                        </div>
                                        <nav className="main_nav_contaner ml-auto">
                                            <ul className="main_nav">
                                                <li className="menu_mm">
                                                    <Link to="/">TRANG CHỦ</Link>
                                                </li>
                                                <li className="menu_mm  ">
                                                    <div
                                                        className="nav-link dropdown-toggle"
                                                        onMouseEnter={handleMouseEnter2}
                                                        onMouseLeave={handleMouseLeave2}
                                                    >
                                                        CHUYÊN NGÀNH ĐÀO TẠO
                                                    </div>
                                                    {isDropdownOpen2 && <DropdownMenu2 />}
                                                </li>
                                                <li className="menu_mm  ">
                                                    <div
                                                        className="nav-link dropdown-toggle"
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        KHÓA NGẮN HẠN
                                                    </div>
                                                    {isDropdownOpen && <DropdownMenu />}
                                                </li>
                                                <li className="menu_mm">
                                                    <Link to="/registers">ĐĂNG KÍ NGAY</Link>
                                                </li>
                                                <li className="menu_mm">
                                                    <Link to="/contact">LIÊN HỆ</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
