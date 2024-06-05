import Navbar from '../Navbar.js';
import Dangki from '../../components/Dangki.js';

function Anning() {
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
            <div>
                <img src="images/banner-an.jpg" />
            </div>
            <Dangki />

            <div className="top_header_text text-center">
                <h3 className=" top_header_text mt-4">
                    <span>
                        Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức, nền tảng mới kết hợp với thực
                        hành thao luyện trên THAO TRƯỜNG MẠNG &#8211; Cyber Range. Học viên được trực tiếp trải nghiệm
                        các tình huống tấn công mạng thực tiếp, giúp học viên thành thạo và có kinh nghiệm thực tiễn
                        ngay khi còn ngồi trên ghế nhà trường.
                    </span>
                </h3>
                <h3 className="">
                    <span>
                        Chương trình đào tạo &#8220;Vệ sĩ mạng&#8221; của iSPACE sẽ giúp sinh viên học được cách rà soát
                        và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn gây mất ATTT trong hạ tầng CNTT của các doanh
                        nghiệp/ tổ chức.
                    </span>
                </h3>
            </div>

            <img
                class="banner-image"
                decoding="async"
                src="https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG.jpg"
                alt=""
            />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className=" element_section_title text-center mt-4">
                            <h1>LỘ TRÌNH HỌC</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start ">
                        <img src="images/ANM_HK1.png" className="small-image" />
                        <img src="images/ANM_HK2.png" className="small-image" />
                        <img src="images/ANM_HK3.png" className="small-image" />
                        <img src="images/ANM_HK4.png" className="small-image" />
                        <img src="images/ANM_HK5.png" className="small-image" />
                        <img src="images/ANM_HK6.png" className="small-image" />
                        <img src="images/ANM_HK7.png" className="small-image" />
                    </div>
                </div>
                <div className="row ">
                    <div class="elementor-widget-container d-flex justify-content-center">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="640"
                            height="58"
                            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png"
                            className="attachment-medium_large size-medium_large wp-image-9974 "
                            alt=""
                            srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png 768w,"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center element_section_title mt-4">
                        <h1>NỘI DUNG CHƯƠNG TRÌNH HỌC</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 element_section">
                        <div className="element_section d-flex justify-content-start">
                            <img src="images/ICON-HOC-KY-01.png" />
                        </div>
                        <div className="element_section   ">
                            <ul className="d-inline-block">
                                <li>– Đại cương về CNTT</li>
                                <li>– Cơ sở lập trình</li>
                            </ul>
                            <ul className="d-inline-block">
                                <li>– Kiến trúc máy tính và Hệ điều hành</li>
                                <li>– Toán ứng dụng cho Tin học</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 element_section">
                        <div className="element_section d-flex justify-content-start">
                            <img src="images/ICON-HOC-KY-02.png" />
                        </div>
                        <div className="element_section   ">
                            <ul className="d-inline-block">
                                <li> – Mạng máy tính căn bản</li>
                                <li>– Cấu trúc dữ liệu và giải thuật</li>
                            </ul>
                            <ul className="d-inline-block">
                                <li>– Ngôn ngữ lập trình Python</li>
                                <li>– Luật ANM và đạo đức trong lĩnh vực CNTT</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 element_section">
                        <div className="element_section d-flex justify-content-start">
                            <img src="images/ICON-HOC-KY-03.png" />
                        </div>
                        <div className="element_section   ">
                            <ul className="d-inline-block">
                                <li>– Mạng máy tính nâng cao</li>
                                <li>– Quản trị hệ thống mạng</li>
                            </ul>
                            <ul className="d-inline-block">
                                <li>– An ninh mạng</li>
                                <li>– Điện toán đám mây</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 element_section">
                        <div className="element_section d-flex justify-content-start">
                            <img src="images/ICON-HOC-KY-04.png" />
                        </div>
                        <div className="element_section   ">
                            <ul className="d-inline-block">
                                <li> – Bảo mật ứng dụng Web</li>
                                <li>– Kiểm thử An toàn thông tin</li>
                            </ul>
                            <ul className="d-inline-block">
                                <li>– Thâm nhập và phòng thủ</li>
                                <li>– Mật mã và An toàn thông tin</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 element_section">
                        <div className="element_section d-flex justify-content-start">
                            <img src="images/ICON-HOC-KY-05.png" />
                        </div>
                        <div className="element_section   ">
                            <ul className="d-inline-block">
                                <li>– Điều tra số</li>
                                <li>– Phân tích và Đánh giá An toàn thông tin</li>
                            </ul>
                            <ul className="d-inline-block">
                                <li>– Bảo mật hệ thống thông tin</li>
                                <li>– Hệ thống giám sát An toàn thông tin</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 element_section">
                        <div className="element_section d-flex justify-content-start">
                            <img src="images/ICON-HOC-KY-06.png" />
                        </div>
                        <div className="element_section   ">
                            <ul className="d-inline-block">
                                <li>– Phân tích mã độc và kỹ thuật dịch ngược</li>
                                <li>– Ứng cứu sự cố an ninh mạng</li>
                            </ul>
                            <ul className="d-inline-block">
                                <li>– Chuyên đề hãng CN/DN</li>
                                <li>– Đồ án An ninh mạng</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 element_section">
                        <div className="element_section d-flex justify-content-start">
                            <img src="images/ICON-HOC-KY-07.png" />
                        </div>
                        <div className="element_section   ">
                            <ul className="d-inline-block">
                                <li>– Thực tập tốt nghiệp</li>
                                <li>– Bảo vệ đồ án tốt nghiệp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Anning;
