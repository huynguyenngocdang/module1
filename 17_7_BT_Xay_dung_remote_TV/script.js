var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT("player", {
//     height: 500,
//     width: 900,
//     videoId: "GFokXnCCMf8",
//     playerVars: {
//       playsinline: 1,
//       autoplay: 0,
//       controls: 1
//     }
//   })
// }

// let form = document.getElementById("form");
let currChanel = document.getElementById("currentChanel");
currChanel.innerHTML = 0;
let videoId;
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let url = document.getElementById("url").value;
//   videoId = YoutubeGetID(url);
//   // console.log(e)
//   changeVideo(videoId);
// });

let chanel = [
  //redflags
  "https://www.youtube.com/watch?v=GFokXnCCMf8&ab_channel=tomcardy",
  //H.S
  "https://www.youtube.com/watch?v=EuRjmzz6qL0&ab_channel=tomcardy",
  //That's why you go away
  "https://www.youtube.com/watch?v=tWHzycT3yZ8&ab_channel=Th%C3%A0nhNguy%E1%BB%85n",
  //There is only you in my heart
  "https://www.youtube.com/watch?v=s6ICVgp5PZU&ab_channel=Th%C3%A0nhNguy%E1%BB%85n",
  //Boulevard
  "https://www.youtube.com/watch?v=sjNV4ms9pxE&ab_channel=Th%C3%A0nhNguy%E1%BB%85n",
  //Scaborough fair
  "https://www.youtube.com/watch?v=CFZJf-HVEE4&ab_channel=Th%C3%A0nhNguy%E1%BB%85n",
  //love story
  "https://www.youtube.com/watch?v=mCa07ujl3jM&ab_channel=Th%C3%A0nhNguy%E1%BB%85n",
  //lemon tree
  "https://www.youtube.com/watch?v=Tdgfva1Bc-E&ab_channel=Th%C3%A0nhNguy%E1%BB%85n",
  //rhythm of the rain
  "https://www.youtube.com/watch?v=P7T-PJD_M3U&ab_channel=Th%C3%A0nhNguy%E1%BB%85n",
];

// let defaultVol = 60;

class TV {
  constructor(chanel) {
    this.chanel = chanel;
    this.id;
    this.volume = 60;
  }

  getChanel(id) {
    let url = this.chanel[id];
    return YoutubeGetID(url);
  }

  changeChanelTv(videoId) {
    player.cueVideoById({ videoId: videoId });
  }

  playChanelTv() {
    player.playVideo();
  }

  stopChanelTv() {
    player.stopVideo();
  }
  pauseChanelTv() {
    player.pauseVideo();
  }

  setVolumeChanelTv(value) {
    value = parseInt(value);

    if (this.volume >= 90 && this.volume <= 10) {
      this.volume += parseInt(value);
    }

    if (this.volume === 100) {
      if (value === 10) {
        alert("Max volume allowed");
      } else if (value === -10) {
        this.volume += parseInt(value);
      }
    }

    if (this.volume === 0) {
      if (value === -10) {
        alert("Min volume allowed");
      } else if (value === 10) {
        this.volume += parseInt(value);
      }
    }
    return this.volume;
  }
}

let tv = new TV(chanel);

// function changeChanel(id) {
//   let url = chanel[id];
//   videoId = YoutubeGetID(url);

//   changeVideo(videoId);
// }

function changeChanel(id) {
  let videoId = tv.getChanel(id);
  currChanel.innerHTML = id;
  // console.log(videoId);
  tv.changeChanelTv(videoId);
}

function webRefresh() {}

function YoutubeGetID(stringInput) {
  var ID = "";
  stringInput = stringInput
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\embed\/)/);
  if (stringInput[2] !== undefined) {
    ID = stringInput[2].split(/[^0-9a-z_\-]/i);
    // ID = stringInput[2].split(/[^0-9a-z\-_]/i);
    ID = ID[0];
  } else {
    ID = stringInput;
  }
  return ID;
}



function playChanel() {
  tv.playChanelTv();
}

function stopChanel() {
  tv.stopChanelTv();
}

function pauseChanel() {
  tv.pauseChanelTv();
}

// function setVolumeChanel(value) {
//   let thisInput = parseInt( value);
//   let currentVolume = tv.setVolumeChanelTv(thisInput);
//   console.log(currentVolume)
//   player.setVolume(currentVolume);
//   document.getElementById("currentVol").innerHTML = currentVolume;
// }
let defaultVol = 60;
function setVolumeChanel(value) {
  if (defaultVol <= 100 && defaultVol >= 0) {
    if (defaultVol == 100 && value == 10) {
      alert("Max volume allowed");
    } else if (defaultVol == 0 && value == -10) {
      alert("Min volume allowed");
    } else {
      defaultVol += parseInt(value);
    }
  }

  player.setVolume(defaultVol);
  document.getElementById("currentVol").innerHTML = defaultVol;
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "GFokXnCCMf8",
    playerVars: {
      playsinline: 1,
      autoplay: 1,
      controls: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady() {
  // console.log(player.getVolume());

  document.getElementById("currentVol").innerHTML = player.getVolume();
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
  }
}
