import React from 'react';
import Navbar from '../Navbar.js';
import { Link, NavLink } from 'react-router-dom';
import Dangki from '../../components/Dangki.js';
function Contact() {
    return (
        <div>
            <Navbar />
            <div className="container_top_header">
                <div className="top_header">
                    <div
                        className="top_header_background"
                        style={{ backgroundImage: 'url("images/banner-01.jpeg")' }}
                    />
                </div>
            </div>
            <div className="counter">
                <div className="counter_background" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="counter_content d-flex flex-column align-items-center justify-content-center text-left ">
                                <div className=" footer_col">
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
                            </div>
                        </div>
                    </div>
                    <div className="counter_form  mt-0">
                        <div className="row fill_height">
                            <div className="col fill_height  ">
                                <div className="counter_form_title">ĐIỀN THÔNG TIN BÊN DƯỚI</div>

                                <form
                                    className="counter_form_content d-flex flex-column align-items-center justify-content-center"
                                    action="#"
                                >
                                    <input
                                        type="text"
                                        className="counter_input"
                                        placeholder="Họ Tên Bạn *"
                                        required="required"
                                    />
                                    <input
                                        type="tel"
                                        className="counter_input"
                                        placeholder="Email *"
                                        required="required"
                                    />
                                    <input
                                        type="text"
                                        className="counter_input"
                                        placeholder="Số điện thoại *"
                                        required="required"
                                    />
                                    <select
                                        name="counter_select"
                                        id="counter_select"
                                        className="counter_input counter_options"
                                    >
                                        <option>--Đối tượng--</option>
                                        <option>HS đang học lớp 12 (đăng kí giữ chỗ)</option>
                                        <option>HS Tốt nghiệp THPT</option>
                                        <option>Sinh Viên</option>
                                        <option>Người đi làm</option>
                                    </select>
                                    <select
                                        name="counter_select"
                                        id="counter_select"
                                        className="counter_input counter_options"
                                    >
                                        <option>--Chương trình học--</option>
                                        <option>An ninh mạng</option>
                                        <option>Phát triển phần mềm</option>
                                        <option>Thiết kế đồ họa</option>
                                        <option>Thương mại điện tử</option>
                                    </select>
                                    <button type="submit" className="counter_form_button mb-5 ">
                                        GỬI NGAY
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
