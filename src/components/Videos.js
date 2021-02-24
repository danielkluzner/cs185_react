import React, { useState } from 'react';
import cloth from '../videos/cloth.mp4';
import trailer from '../videos/trailer.mp4';
import drone from '../videos/drone.mov';

let numVideos = [];
for (let i = 0; i < 20; i++) {
    numVideos.push(i);
}

let sources = [cloth, trailer, drone];

const Videos = () => {
    const [overlaySrc, setOverlaySrc] = useState(null);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [backBtnVisible, setBackBtnVisible] = useState(false);

    const expand = (e) => {
        e.preventDefault();
        if (!e.target.src) { return; }
        setOverlaySrc(e.target.src);
        setOverlayVisible(true);
    }

    const exit = () => {
        let video = document.querySelector('.overlay');
        video.pause();
        setOverlayVisible(false);
    }

    // source: https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
    // for getting page height
    let body = document.body;
    let html = document.documentElement;
    let height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    // source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    // used for going back to the top of page
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.addEventListener("scroll",
        function (event) {
            if (document.body.scrollTop > height / 4 || document.documentElement.scrollTop > height / 4) {
                setBackBtnVisible(true);
            } else {
                setBackBtnVisible(false);
            }
        }
    );

    return (
        <>
            <video className={`overlay ${overlayVisible && 'visible'}`} src={overlaySrc} controls></video>
            <div className={`lightbox ${overlayVisible && 'visible'}`} onClick={exit}></div>
            <input className={`back_to_top_bttn ${backBtnVisible && 'visible'}`} type='button' value='Back to Top' onClick={backToTop}></input>

            <div className='container'>
                {numVideos.map(num =>
                    <div key={num} className='child'><video width='80%' height='80%' src={sources[num % sources.length]} onClick={expand}></video></div>
                )}
            </div>
        </>
    );
}

export default Videos;