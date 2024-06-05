import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row footer_row">
                    <div className="col">
                        <div className="footer_content">
                            <div className="row">
                                <div className="col-lg-4 footer_col">
                                    {/* Footer About */}
                                    <div className="footer_section footer_about">
                                        <div className="footer_logo_container">
                                            <a href="#">
                                                <img src="images/logo-01.png" />
                                            </a>
                                        </div>
                                        <div className="footer_about_text text-center">
                                            <p>KẾT NỐI VỚI CHÚNG TÔI</p>
                                        </div>
                                        <div className="footer_social text-center ">
                                            <ul className="px-0">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-brands fa-facebook" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-brands fa-youtube" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-brands fa-tiktok" aria-hidden="true" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 footer_col">
                                    {/* Footer Contact */}
                                    <div className="footer_section footer_contact">
                                        <div className="footer_title">LIÊN HỆ</div>
                                        <div className="footer_contact_info">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-phone fot-icon"></i>Email:
                                                    quangcao@ispace.edu.vn
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-envelope fot-icon"></i>Phone: 0938 205 966
                                                    (Ms. Chinh)
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-map-pin fot-icon"></i>240 Võ Văn Ngân,
                                                    Phường Bình Thọ, TP. Thủ Đức, TP. Hồ Chí Minh
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 footer_col">
                                    {/* Footer links */}
                                    <div className="footer_section footer_links">
                                        <div className="footer_title">LIÊN HỆ</div>
                                        <div className="footer_links_container">
                                            <ul>
                                                <li>
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                                <li>
                                                    <a href="#">Features</a>
                                                </li>
                                                <li>
                                                    <a href="courses.html">Courses</a>
                                                </li>
                                                <li>
                                                    <a href="#">Events</a>
                                                </li>
                                                <li>
                                                    <a href="#">Gallery</a>
                                                </li>
                                                <li>
                                                    <a href="#">FAQs</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row copyright_row">
                    <div className="col">
                        <div className="copyright d-flex flex-lg-row flex-column align-items-center ">
                            <div className="cr_text ">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Website iSPACE by 2024 Powered
                                <i className="fa fa-heart-o" aria-hidden="true" /> by{' '}
                                <a href="/" target="Me">
                                    Dev Me
                                </a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                            <div className=" cr_links  ">
                                <ul className="cr_list">
                                    <li>
                                        <a href="#">Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="#">Sitemap</a>
                                    </li>
                                    <li>
                                        <a href="#">Tin tức</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
