function Register() {
    return (
        <div className="counter">
            <div className="counter_background" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="counter_content d-flex flex-column align-items-center justify-content-center text-left ">
                            <h3>
                                VÀO ISPACE NHẬN <span>IPHONE</span>
                            </h3>
                            <h4 className="counter_title">
                                09 iPhone 15 Pro dành tặng cho 09 bạn có điểm cao nhất mỗi đợt xét tuyển
                            </h4>
                            <div className="counter_img text-center">
                                <img src="images/DQ-5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter_form">
                    <div className="row fill_height">
                        <div className="col fill_height">
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
                                <input type="tel" className="counter_input" placeholder="Email *" required="required" />
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
                                <button type="submit" className="counter_form_button">
                                    GỬI NGAY
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
