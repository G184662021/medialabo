let count = 0;
let url;
const main = document.querySelector("div>img");
const thumb = document.querySelector("div.thumbnails");
let nowPlaying = false;
let timer;

function next() {
    let old = count;
    count++;
    count = count % 19;
    url = makeURL(count);
    main.setAttribute("src", url);
    changeOpacity(old, count);
}

function prev() {
    let old = count;
    count--;
    count = (19 + count) % 19;
    url = makeURL(count);
    main.setAttribute("src", url);
    changeOpacity(old, count);
}

function changeOpacity(oldNum, newNum) {
    thumb.children[oldNum].classList.remove("selected");
    thumb.children[newNum].classList.add("selected");
}

function makeURL(num) {
    const head = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
    const tail = ".jpg";
    let n;
    num++;
    if (num < 10) {
        n = "0" + num;
    } else {
        n = num;
    }
    return head + n + tail;
}

function play() {
    if (!nowPlaying) {
        autoPlay();
    }
}

function autoPlay() {
    next();
    timer = setTimeout(autoPlay, 1000);
}

function stop() {
    clearTimeout(timer);
    nowPlaying = false;
}

function reset() {
    stop();
    thumb.children[count].classList.remove("selected");
    count = 0;
    url = makeURL(count);
    main.setAttribute("src", url);
    thumb.children[count].classList.add("selected");
}

function doubleSpeedPlay() {
    stop();
    autoPlay();
}

function reversePlay() {
    stop();
    prev();
    timer = setTimeout(reversePlay, 1000);
}

function doubleSpeedReversePlay() {
    stop();
    prev();
    timer = setTimeout(doubleSpeedReversePlay, 500);
}
