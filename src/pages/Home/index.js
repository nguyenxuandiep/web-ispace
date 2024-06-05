import React from 'react';
import Navbar from '../Navbar.js';
import Register from './Register.js';
function Home() {
    return (
        <div>
            <Navbar />
            <div className="super_container">
                {/* Home */}
                <div className="home">
                    <div className="home_slider_container">
                        {/* Home Slider */}
                        <div className="owl-carousel owl-theme home_slider">
                            {/* Home Slider Item */}
                            <div className="owl-item">
                                <div
                                    className="home_slider_background"
                                    style={{ backgroundImage: 'url(images/Banner.jpg)' }}
                                />
                            </div>

                            {/* Home Slider Item */}
                            <div className="owl-item">
                                <div
                                    className="home_slider_background"
                                    style={{ backgroundImage: 'url(images/banner_2.jpg)' }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Home Slider Nav */}
                    <div className="home_slider_nav home_slider_prev">
                        <i className="fa fa-angle-left" aria-hidden="true" />
                    </div>
                    <div className="home_slider_nav home_slider_next">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                    </div>
                </div>
                {/* Features */}
                <div className="features">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <h1 className="section_title">CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row  justify-content-between features_row">
                            {/* Features Item */}
                            <div className="col-lg-2 feature_col">
                                <div className="feature text-center trans_400">
                                    <div className="feature_icon">
                                        <img src="images/ANM_3.png" alt="" />
                                    </div>
                                    <h2 className="feature_title">AN NING MẠNG</h2>
                                    <div className="feature_text">
                                        <a href="/">
                                            ĐĂNG KÍ <i class="fa fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Features Item */}
                            <div className="col-lg-2 feature_col">
                                <div className="feature text-center trans_400">
                                    <div className="feature_icon">
                                        <img src="images/PTPM_3.png" alt="" />
                                    </div>
                                    <h2 className="feature_title">PHÁT TRIỂN PHẦN MỀM</h2>
                                    <div className="feature_text">
                                        <a href="/">
                                            ĐĂNG KÍ <i class="fa fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Features Item */}
                            <div className="col-lg-2 feature_col">
                                <div className="feature text-center trans_400">
                                    <div className="feature_icon">
                                        <img src="images/TKDH_3.png" alt="" />
                                    </div>
                                    <h2 className="feature_title">THIẾT KẾ ĐỒ HỌA</h2>
                                    <div className="feature_text">
                                        <a href="/">
                                            ĐĂNG KÍ <i class="fa fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Features Item */}
                            <div className="col-lg-2 feature_col">
                                <div className="feature text-center trans_400">
                                    <div className="feature_icon">
                                        <img src="images/1-1.png" alt="" />
                                    </div>
                                    <h2 className="feature_title">QUẢN TRỊ MẠNG</h2>
                                    <div className="feature_text">
                                        <a href="/">
                                            ĐĂNG KÍ <i class="fa fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 feature_col">
                                <div className="feature text-center trans_400">
                                    <div className="feature_icon">
                                        <img src="images/TMDT.png" alt="" />
                                    </div>
                                    <h2 className="feature_title">THƯƠNG MẠI ĐIỆN TỬ</h2>
                                    <div className="feature_text">
                                        <a href="/">
                                            ĐĂNG KÍ <i class="fa fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Popular Courses */}
                <div className="courses">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <h1 className="section_title">TỔNG QUAN TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE</h1>
                                    <div className="section_subtitle"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 px-2">
                                <div className="section_subtitle">
                                    <p>
                                        Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc NGS Group. iSPACE tiên phong
                                        trong đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.
                                    </p>
                                    <p>
                                        Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt
                                        “CNTT- Học để làm việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT
                                        ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.
                                    </p>
                                    <p>
                                        Năm học 2021- 2022, Trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ
                                        sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.
                                    </p>
                                </div>
                            </div>
                            <div className="col-5 px-2 section_image ">
                                <div className="d-flex align-items-center">
                                    <img src="images/bia.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <h1 className="section_title">iSPACE VÀ NHỮNG CON SỐ BIẾT NÓI</h1>
                                    <div className="section_subtitle"></div>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="layout">
                                        <div class="logo">
                                            <img
                                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon2.png"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <div
                                                class="percentage milestone_counter"
                                                data-end-value={100}
                                                data-sign-after="%"
                                            >
                                                0
                                            </div>
                                            <div class="milestone_text">SINH VIÊN CÓ VIỆC LÀM NGAY</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="layout">
                                        <div class="logo">
                                            <img
                                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon1.png"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <div class="percentage milestone_counter" data-end-value={15000}>
                                                0
                                            </div>
                                            <div class="milestone_text">SINH VIÊN ĐƯỢC ĐÀO TẠO</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="layout">
                                        <div class="logo">
                                            <img
                                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon4.png"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <div
                                                class="percentage milestone_counter"
                                                data-end-value={70}
                                                data-sign-after="%"
                                            >
                                                0
                                            </div>
                                            <div class="milestone_text">THỰC HÀNH</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="layout">
                                        <div class="logo">
                                            <img
                                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon3.png"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <div
                                                class="percentage milestone_counter"
                                                data-end-value={18}
                                                data-sign-after="Năm"
                                            >
                                                0
                                            </div>
                                            <div class="milestone_text">KINH NGHIỆM ĐÀO TẠO</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <h1 className="section_title">18 NĂM HÌNH THÀNH VÀ PHÁT TRIỂN</h1>
                                </div>
                                <div className=" d-flex justify-content-center align-items-center mb-3">
                                    <img src="images/18-NAM.jpg" class="mx-auto" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center mt-3">
                                    <h1 className="section_title">ĐẶC QUYỀN KHI TRỞ THÀNH SINH VIÊN iSPACE</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row courses_row ">
                            {/* Course */}
                            <div className="col-lg-3 course_col ">
                                <div className="course">
                                    <div className="course_image">
                                        <img src="images/DQ-1.png" alt="" />
                                    </div>
                                    <div className="course_body">
                                        <h3 className="course_title">Hơn 300 CLB</h3>

                                        <div className="course_text">
                                            <p>
                                                Cơ hội tham gia hoạt động ngoại khóa, rèn kỹ năng mềm với hơn 300 CLB
                                                tại Làng Đại học Quốc gia TP.HCM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Course */}
                            <div className="col-lg-3 course_col">
                                <div className="course">
                                    <div className="course_image">
                                        <img src="images/DQ-2.jpg" alt="" />
                                    </div>
                                    <div className="course_body">
                                        <h3 className="course_title">Môi trường đẳng cấp</h3>

                                        <div className="course_text">
                                            <p>
                                                Cao đẳng duy nhất có trung tâm SOC (Security Operation Center). Sinh
                                                viên thực hành với dự án thực tế.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Course */}
                            <div className="col-lg-3 course_col">
                                <div className="course">
                                    <div className="course_image">
                                        <img src="images/DQ-3.jpg" alt="" />
                                    </div>
                                    <div className="course_body">
                                        <h3 className="course_title">Hơn 300 CLB</h3>

                                        <div className="course_text">
                                            <p>
                                                Mô hình giảng dạy theo đặt hàng từ doanh nghiệp, đầu ra hơn 100 doanh
                                                nghiệp, cam kết giới thiệu đến khi có việc làm.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Course */}
                            <div className="col-lg-3 course_col">
                                <div className="course">
                                    <div className="course_image">
                                        <img src="images/DQ-4.png" alt="" />
                                    </div>
                                    <div className="course_body">
                                        <h3 className="course_title">Liên thông đại học công TOP đầu</h3>

                                        <div className="course_text">
                                            <p>
                                                Cơ hội liên thông với đại học công top đầu (ĐH CNTT, ĐH SPKT, ĐH Bách
                                                Khoa, ĐH Công nghiệp…)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter */}

                <Register />

                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container text-center mt-5">
                                <h2 className="section_title-h2">
                                    “Ở iSPACE các em sẽ có những câu trả lời thỏa đáng cho câu hỏi ‘Học để làm gì?’
                                    trong mỗi người.”
                                </h2>
                                <div className="section_subtitle">
                                    <h4>PGS. TS. Nguyễn Duy Hàm, Hiệu trưởng</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team */}
                <div className="team">
                    <div
                        className="team_background parallax-window"
                        data-parallax="scroll"
                        data-image-src="images/team_background.jpg"
                        data-speed="0.8"
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <h1 className="section_title mt-0">BAN CỐ VẤN - GIẢNG VIÊN</h1>
                                    <div className="section_subtitle">
                                        <p>Trường Cao đẳng An ning mạng iSPACE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div>
                                    <h1 className="section_title mt-0">HIỆU TRƯỞNG</h1>
                                </div>
                                <div class="col-md-6 mb-5 ">
                                    <a href="/">
                                        <img
                                            src="images/HT-1.jpg"
                                            alt="Profile Picture"
                                            class="profile-picture item-img"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div class="row">
                                <div>
                                    <h1 className="section_title mt-0 ">GIẢNG VIÊN</h1>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-5 item-img">
                                        <a href="/">
                                            <img
                                                src="images/GV-2.jpg"
                                                alt="Profile Picture"
                                                className="profile-picture"
                                            />
                                        </a>
                                    </div>
                                    <div className="mb-5 item-img">
                                        <a href="/">
                                            <img
                                                src="images/GV-3.jpg"
                                                alt="Profile Picture"
                                                className="profile-picture"
                                            />
                                        </a>
                                    </div>
                                    <div className="mb-5 item-img">
                                        <a href="/">
                                            <img
                                                src="images/GV-4.jpg"
                                                alt="Profile Picture"
                                                className="profile-picture"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-5 item-img">
                                        <a href="/">
                                            <img
                                                src="images/GV-5.jpg"
                                                alt="Profile Picture"
                                                className="profile-picture"
                                            />
                                        </a>
                                    </div>

                                    <div className="mb-5 item-img">
                                        <a href="">
                                            <img
                                                src="images/GV-6.jpg"
                                                alt="Profile Picture"
                                                className="profile-picture"
                                            />
                                        </a>
                                    </div>
                                    <div className="mb-5 item-img">
                                        <p>
                                            Cùng đội ngũ giảng viên là các thạc sĩ, kỹ sư, chuyên gia trong các lĩnh vực
                                            Công nghệ thông tin, Thiết kế đồ họa, An toàn thông tin… với nhiều năm kinh
                                            nghiệm thực hiện các dự án tại doanh nghiệp… Xem thêm về đội ngũ giảng viên.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div>
                                    <h1 className="section_title text-center">DOANH NGHIỆP</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-1.jpg" className="object-fit-contain mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-2.jpg" className="object-fit-cover mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-3.jpg" className="object-fit-fill mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-4.jpg" className="object-fit-scale mb-3" alt="..." />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-5.jpg" className="object-fit-contain mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-6.jpg" className="object-fit-cover mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-7.jpg" className="object-fit-fill mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-8.jpg" className="object-fit-scale mb-3" alt="..." />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-9.jpg" className="object-fit-contain mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-10.jpg" className="object-fit-cover mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-11.jpg" className="object-fit-fill mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-12.jpg" className="object-fit-scale mb-3" alt="..." />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-13.jpg" className="object-fit-contain mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-14.jpg" className="object-fit-cover mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-15.jpg" className="object-fit-fill mb-3" alt="..." />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="/">
                                        <img src="images/DN-16.jpg" className="object-fit-scale " alt="..." />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Latest News */}
                <div className="news">
                    <div class="border border-secondary mb-5"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container ">
                                    <h2 className="section_title align-baseline mb-3">TIN NỔI BẬT</h2>
                                    <div className="section_subtitle align-baseline">
                                        <p>Learning by Doing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row news_row">
                            <div className="col-lg-7 news_col">
                                {/* News Post Large */}
                                <div className="news_post_large_container">
                                    <div className="news_post_large">
                                        <div className="news_post_image">
                                            <img src="images/tin-3.jpg" alt="" />
                                        </div>
                                        <div className="news_post_large_title">
                                            <a href="blog_single.html">
                                                Đài HTV phỏng vấn chuyên gia iSPACE với chuyên đề cảnh báo chiêu trò
                                                gian lận qua mail
                                            </a>
                                        </div>
                                        <div className="news_post_meta">
                                            <ul>
                                                <li>
                                                    <a href="#">TIN TỨC, TIN VỀ TRƯỜNG</a>
                                                </li>
                                                <li>
                                                    <a href="#"> MAY 22, 2024</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="news_post_text">
                                            <p>
                                                Sáng ngày 22/05/2024, đài HTV đã có buổi ghi hình tại iSPACE với sự chia
                                                sẻ của Ths. Lê Hoàng Bình Nguyên – Phó Trưởng khoa Công nghệ thông tin
                                                về chuyên đề “Cảnh báo chiêu trò gian lận qua mail...”
                                            </p>
                                        </div>
                                        <div className="news_post_link ">
                                            <a href="/">đọc thêm</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="news_post_large_container">
                                    <div className="news_post_large">
                                        <div className="news_post_image">
                                            <img src="images/tin-4.jpg" alt="" />
                                        </div>
                                        <div className="news_post_large_title">
                                            <a href="blog_single.html">
                                                iCONNECTSPACE #3: SỰ KHÁC BIỆT GIỮA REDTEAM VÀ BLUETEAM
                                            </a>
                                        </div>
                                        <div className="news_post_meta">
                                            <ul>
                                                <li>
                                                    <a href="#">TIN TỨC, TIN VỀ TRƯỜNG</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Mar 21, 2024</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="news_post_text">
                                            <p>
                                                Chiều ngày 21/03/2024, Chuyên gia Ngô Minh Hiếu (Hiếu PC) - Technical
                                                Expert at NCSC, Đồng sáng lập Dự Án Chống Lừa Đảo Anh Trần Quốc Thanh -
                                                BlueTeam Leader at NCS HCM - Cựu sinh viên iSPACE chia sẻ về sự khác
                                                biệt giữa RedTeam & BlueTeam...
                                            </p>
                                        </div>
                                        <div className="news_post_link ">
                                            <a href="/">đọc thêm</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 news_col">
                                <div className="news_posts_small">
                                    {/* News Posts Small */}
                                    <div className="news_post_small">
                                        <div className="news_post_small_title">
                                            <a href="blog_single.html">
                                                Sản phẩm kết thúc môn học Photoshop của sinh viên Thiết kế đồ họa
                                            </a>
                                        </div>
                                        <div className="news_post_meta">
                                            <ul>
                                                <li>
                                                    <a href="#">SẢN PHẨM SINH VIÊN, TIN TỨC</a>
                                                </li>
                                                <li>
                                                    <a href="#">APRIL 22, 2024</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* News Posts Small */}
                                    <div className="news_post_small">
                                        <div className="news_post_small_title">
                                            <a href="/">
                                                Nâng tầm kỹ năng thiết kế với môn Nguyên lý thị giác tại iSPACE
                                            </a>
                                        </div>
                                        <div className="news_post_meta">
                                            <ul>
                                                <li>
                                                    <a href="#">SẢN PHẨM SINH VIÊN, SINH VIÊN ISPACE, TIN TỨC</a>
                                                </li>
                                                <li>
                                                    <a href="#">MAY 10, 2024</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* News Posts Small */}
                                    <div className="news_post_small">
                                        <div className="news_post_small_title">
                                            <a href="blog_single.html">
                                                iCONNECTSPACE #5: Bán hàng trên sàn hay quảng cáo trên mạng chính thức
                                                khởi động.
                                            </a>
                                        </div>
                                        <div className="news_post_meta">
                                            <ul>
                                                <li>
                                                    <a href="#">HOẠT ĐỘNG - SỰ KIỆN, TIN TỨC</a>
                                                </li>
                                                <li>
                                                    <a href="#">MAY 11, 2024</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* News Posts Small */}
                                    <div className="news_post_small">
                                        <div className="news_post_small_title">
                                            <a href="blog_single.html">
                                                Sự kiện iCONNECTSPACE #5: Bán hàng trên sàn hay quảng cáo trên mạng diễn
                                                ra thành công tốt đẹp
                                            </a>
                                        </div>
                                        <div className="news_post_meta">
                                            <ul>
                                                <li>
                                                    <a href="#">HOẠT ĐỘNG - SỰ KIỆN, TIN TỨC</a>
                                                </li>
                                                <li>
                                                    <a href="#">MAY 26, 2024</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter */}
                <div className="newsletter">
                    <div className="container">
                        <div className="row"></div>
                    </div>
                </div>
                {/* Footer */}
            </div>
        </div>
    );
}

export default Home;
