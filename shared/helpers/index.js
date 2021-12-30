function msToDhms(t) {
  const d = Math.floor(t / (1000 * 60 * 60 * 24)),
    h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
    s = Math.floor((t % (1000 * 60)) / 1000);
  return {
    d: String(d).padStart(2, "0"),
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
}

export function getTimeLeft(date) {
  const diffInMilliSec = +date - +new Date();

  return msToDhms(diffInMilliSec);
}
export function AudioPlayer() {}
AudioPlayer.prototype = {
  init: function ({ url, loop = true, onload = () => {} }) {
    let _this = this;
    _this.player = document.createElement("audio");
    _this.player.src = url;
    _this.player.loop = loop;
    _this.player.controls = true;
    _this.player.style.display = "none";
    _this.isPlaying = false;
    document.body.appendChild(_this.player);
    _this.onload = onload;
    _this.player.oncanplaythrough = function () {
      if (_this.isPlaying) _this.player.play();
      _this.onload.call(_this);
    };
  },
  play: function () {
    this.isPlaying = true;
    this.player.play();
  },
};

const makeNavLinksSmooth = (to) => {
  const navLinks = document.querySelectorAll(to);

  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};

const spyScrolling = (from, to, offset) => {
  const sections = document.querySelectorAll(to);

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections) {
      if (
        sections.hasOwnProperty(s) &&
        sections[s].offsetTop <= scrollPos + offset
      ) {
        const id = sections[s].id;
        [...document.querySelectorAll(`${from}.active`)].forEach((el) => {
          el.classList.remove("active");
        });
        [...document.querySelectorAll(`a[href*=${id}]`)].forEach((el) => {
          el.classList.add("active");
        });
      }
    }
  };
};

export function navspy({ from, to, offset = 0 }) {
  makeNavLinksSmooth(from);
  spyScrolling(from, to, offset);
}
