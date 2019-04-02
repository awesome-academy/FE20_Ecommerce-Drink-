import React, { Component } from 'react';

class Introduce extends Component {
    render() {
        return (
            <div className="introduce" id="introduce">
                <div className="container">
                    <img className="introduce__left" src="./../image/introduce.jpg" alt="introduce_left" />
                    <img className="introduce__right" src="./../image/introduce1.png" alt="introduce_right" />
                    <h1 className="title">Giới thiệu</h1>
                    <img className="after" src="./../image/title_dark.png" alt="title_dark" />
                    <div className="introduce__infor">
                        <p>Mriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faciteorum claritatem. Investigtiones demonstraverunt lectores legere me lius quod ii legunt saepius.Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putam</p>
                        <button className="button">xem thêm</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduce;