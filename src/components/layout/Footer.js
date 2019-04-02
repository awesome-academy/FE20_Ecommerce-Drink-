import React, { Component } from 'react';
import Brandlogo from './Brandlogo';

class footer extends Component {
    render() {
        return (
            <div>
                <Brandlogo />
                <footer className="footer" id="footer">
                    <div className="container">
                        <div className="footer__above">
                            <div className="footer__above__card">
                                <h3>Thông tin</h3>
                                <ul>
                                    <li><a href="/">về chúng tôi</a></li>
                                    <li><a href="/">giao hàng</a></li>
                                    <li><a href="/">cảm nghĩ</a></li>
                                    <li><a href="/">lưu trữ</a></li>
                                    <li><a href="/">chính sách riêng tư</a></li>
                                </ul>
                            </div>
                            <div className="footer__above__card">
                                <h3>mua hàng</h3>
                                <ul>
                                    <li><a href="/">vận chuyển và tra hàng</a></li>
                                    <li><a href="/">mua hàng an toàn</a></li>
                                    <li><a href="/">vận quốc tế</a></li>
                                    <li><a href="/">liên kết</a></li>
                                    <li><a href="/">dịch vụ giảm giá</a></li>
                                </ul>
                            </div>
                            <div className="footer__above__sendemail">
                                <h3>gửi email</h3>
                                <p>Gửi email cho chúng tôi để được hổ trợ</p>
                                <div className="footer__above__sendemail__button">
                                    <input type="text" name="sendmail" placeholder="Enter your email" /><img src="image/footer_send.png" alt="" /><span>Gửi</span>
                                </div>
                                <ul>
                                    <li><a href="/"><i className="fas fa-dove"></i></a></li>
                                    <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="/"><i className="fas fa-volleyball-ball"></i></a></li>
                                    <li><a href="/"><i className="fab fa-invision"></i></a></li>
                                    <li><a href="/"><i className="fas fa-wifi"></i></a></li>
                                </ul>
                            </div>
                            <div className="footer__above__contact">
                                <h3>Liên hệ</h3>
                                <p><i className="fas fa-map-marker-alt">  Tầng 4,Tòa nhà HaNoi Group Số 442 Đội Cần, P.Cộng Vị, Quận Ba ĐÌnh, Hà Nội.</i><br /><i className="fas fa-phone-volume">  (04) 6674 2332 -    </i><i className="fas fa-phone-volume">  (04) 37868904</i><br /><i className="fas fa-phone-volume">  (08) 6608 9686      </i><i className="fas fa-envelope"><a href="/">  Support@bizweb.vn</a></i></p>
                            </div>
                        </div>
                        <hr />
                        <div className="footer__under">
                            <div className="footer__under__left">
                                <p>&copy CoppyRight 2018-2014 DKT Technology JSC</p>
                            </div>
                            <div className="footer__under__right"><img src="image/footer.png" alt="" /></div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default footer;