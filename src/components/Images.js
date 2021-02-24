import React, { useState } from 'react';
import choco from '../images/choco.jpg';
import choco2 from '../images/choco2.jpg';
import cookies from '../images/cookies.jpg';
import cookies2 from '../images/cookies2.jpg';
import pizza from '../images/pizza.JPG';
import slice from '../images/slice.jpg';
import slice2 from '../images/slice2.jpg';
import straw from '../images/straw.jpg';
import straw2 from '../images/straw2.jpg';
import sushi from '../images/sushi.jpg';

let numImages = [];
for (let i = 0; i < 20; i++) {
    numImages.push(i);
}

let sources = [choco, choco2, cookies, cookies2, pizza, slice, slice2, straw, straw2, sushi];

const Images = () => {
    const [overlaySrc, setOverlaySrc] = useState('');
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [backBtnVisible, setBackBtnVisible] = useState(false);

    const expand = (e) => {
        if (!e.target.src) { return; }
        setOverlaySrc(e.target.src);
        setOverlayVisible(true);
    }

    const exit = () => {
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
            <img alt='' className={`overlay ${overlayVisible && 'visible'}`} src={overlaySrc} />
            <div className={`lightbox ${overlayVisible && 'visible'}`} onClick={exit}></div>
            <input className={`back_to_top_bttn ${backBtnVisible && 'visible'}`} type='button' value='Back to Top' onClick={backToTop}></input>

            <div className='container'>
                {numImages.map(num =>
                    <div key={num} className='child'><img alt='' src={sources[num % sources.length]} onClick={expand} /></div>
                )}
            </div>
        </>
    );
}

export default Images;