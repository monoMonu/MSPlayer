//-----Variables Declaration------//
var songLoader1 = document.querySelector("#songLoader1"),
   songLoader2 = document.querySelector("#songLoader2"),
   replay = document.querySelector("#replay"),
   loop = document.querySelector("#loop"),
   playB = document.querySelector("#playB"),
   pla = document.querySelector("#play"),
   playCnt = document.querySelector("#playCnt"),
   loadin_pg = document.querySelector("#loadin_pg"),
   themePlat = document.querySelector("#themePlat"),
   nxt = document.querySelector("#nxt"),
   prev = document.querySelector("#prev"),
   volum = document.querySelector("#volum"),
   settings = document.querySelector("#settings"),
   srchFild = document.querySelector("#srchFild"),
   srchBack = document.querySelector("#srchBack"),
   search = document.querySelector("#search"),
   searchBar = document.querySelector("#searchBar"),
   curDur = document.querySelector("#curDur"),
   endDur = document.querySelector("#endDur"),
   mnPlrLik = document.querySelector("#mnPlrLik"),
   singers3 = document.querySelector("#singers3"),
   name3 = document.querySelector("#name3"),
   track = document.querySelector("#track"),
   alb3Back = document.querySelector("#alb3Back"),
   alb3 = document.querySelector("#alb3"),
   mnPlrBtn = document.querySelector("#mnPlrBtn"),
   player = document.querySelector("#player"), fixPlrWrap = document.querySelector("#fixPlrWrap"),
   nav = document.getElementsByClassName("nav")[0],
   songCnt, lik = [],
   music_pg = document.querySelector("#music_pg"),
   slider = document.getElementById("slider"),
   favs = document.querySelector("#favs"),
   allSongs = document.querySelector("#allSongs"),
   allSong = document.querySelector("#allSong"),
   fav = document.querySelector("#fav"),
   secs = document.querySelectorAll(".secs"),
   name2 = document.querySelector("#name2"),
   singers2 = document.querySelector("#singers2"),
   alb2 = document.querySelector("#alb2"),
   audio = document.createElement("audio");


//----Welcome Text------//
function welcome() {
   time = new Date().getHours()
   if (time >= 0 && time < 12) {
      return "Good Morning";
   }
   else if (time >= 12 && time < 18) {
      return "Good Afternoon";
   }
   else if (time >= 18 && time < 24) {
      return "Good Evening";
   }
}
document.querySelector("#welcome").innerHTML = welcome();

//------Section Navigators------//
function hideAllSecs() {
   for (sec = 0; sec < secs.length; sec++) {
      secs[sec].style.display = "none";
      document.body.scrollTop = 0;
   }
}

fav.addEventListener("click", function () {
   favs.innerHTML = ""; liked = document.querySelectorAll(".liked");
   for (f = 0; f < liked.length; f++) {
      favs.innerHTML += '<div class="likSongCnt"> <div class="aNd" onclick="playFav(this)"> ' + liked[f].parentNode.childNodes[1].innerHTML + ' </div> <button class="bi-x-circle toLik" onclick="remoFav(this)"></button> </div>';
      if (liked[f].parentNode.childNodes[1].childNodes[3].childNodes[1].innerHTML == name3.innerHTML) {
         favs.childNodes[f].style.background = "var(--theme-D-trans)";
      }
   }
   hideAllSecs();
   favs.style.display = "block";
   slider.style.left = "50%";

})
allSong.addEventListener("click", function () {
   hideAllSecs();
   allSongs.style.display = "block";
   slider.style.left = "0";
})

//----Search Bar------//
search.addEventListener("click", oSearch);
srchBack.addEventListener("click", cSearch)
function oSearch() {
   srchFild.style.width = "100%"
}
function cSearch() {
   srchFild.style.width = "0";
}

//----Main Player Nav----//
mnPlrBtn.addEventListener("click", oPlayer)
function oPlayer() {
   player.style.top = "0";
}

function closPlr() {
   player.style.top = "100%";
}


//----Songs & Details-------//
var songs = ["You", "Namo Namo", "STAY(with Justin Bieber)", "Believer", "Shape Of You", "Swarne Lage (From \"Mitron\")", "Sweet Dream", "Heartless(feat. Aashtha Gill)", "Everytime I Cry", "Leja Re", "Makhna", "Kabhi Kabhi Aditi", "Senorita", "Pasoori", "Duniyaa (From \"Luka Chuppi\")", "Proper Patola", "Lily", "Sau Aasmaan", "Sakhiyaan", "Lost In Japan", "Nayan", "Dil Na Jaaneya", "All I Ever Need", "Bum Bum Bole"];

var songDet = [
   {
      singers: "Armaan Malik",
      album: "https://dl.dropbox.com/s/kzlkzp7uqzygl4h/you.jpg",
      sorc: "https://dl.dropbox.com/s/wbtvu5b3rexfu39/you.mp3"
      //Credits - https://youtu.be/GsdYjCLcpN4 
   },

   {
      singers: "Amit Trivedi",
      album: "https://dl.dropbox.com/s/ni7ebim1m3gcchn/kedarnath.jpg",
      sorc: "https://dl.dropbox.com/s/wyws58q7a8lbn5y/namo%20namo.mp"
      //Credits - https://youtu.be/dx4Teh-nv3A       
   },

   {
      singers: "The Kid LAROI, Justin Bieber",
      album: "https://dl.dropbox.com/s/ayxly4s3hd8tyti/stay.jpg",
      sorc: "https://dl.dropbox.com/s/lpcwl7mw3gjlm7p/stay.mp3"
      //Credits - https://youtu.be/kTJczUoc26U       
   },

   {
      singers: "Imagine Dragons",
      album: "https://dl.dropbox.com/s/9s5i6um0kcg1cr9/evolve.jpg",
      sorc: "https://dl.dropbox.com/s/2f4yofgv5qydlvn/believer.mp3"
      //Credits - https://youtu.be/7wtfhZwyrcc       
   },

   {
      singers: "Ed Sheeran",
      album: "https://dl.dropbox.com/s/pp9i96bi03eah4j/divide.jpg",
      sorc: "https://dl.dropbox.com/s/jfsj0yac0fr95be/shape%20of%20you.mp3"
      //Credits - https://youtu.be/JGwWNGJdvx8
   },

   {
      singers: "Tanishk Bagchi, Jubin Nautiyal",
      album: "https://dl.dropbox.com/s/8gcvoipt764d4ih/Mitron_Album.jpg",
      sorc: "https://dl.dropbox.com/s/mgvnznktepgd9pj/sawarne%20lage.mp3"
      //Credits - https://youtu.be/wSXGpoDGDbE
   },

   {
      singers: "Alessia Cara",
      album: "https://dl.dropbox.com/s/0litn79aum0h09p/sweet-dream.jpg",
      sorc: "https://dl.dropbox.com/s/q50ou6ap031z53o/sweet-dream.mp3"
      //Credits - https://youtu.be/2ORj3T5sz-0
   },

   {
      singers: "Badshah, Aashtha Gill",
      album: "https://dl.dropbox.com/s/t01m9zb0qfkoi0w/heartless.jpg",
      sorc: "https://dl.dropbox.com/s/hz7dbgthmbpj07d/heartless.mp3"
      //Credits - https://youtu.be/Gv_XBMrPvRw
   },

   {
      singers: "Ava Max",
      album: "https://dl.dropbox.com/s/2yf9hyii8z1c7p5/everytime-i-cry.jpg",
      sorc: "https://dl.dropbox.com/s/5j222wlijw2cjm9/everytime_i_cry.mp3"
      //Credits - https://youtu.be/CFMz9DOhaJ8
   },

   {
      singers: "Tanishk Bagchi, Dhvani Bhanushali",
      album: "https://dl.dropbox.com/s/ofoquybqw2q47tr/leja-re.jpg",
      sorc: "https://dl.dropbox.com/s/rtzdwaphr0diyqi/leja%20re.mp3"
      //Credits - https://youtu.be/NNqLB7znMLU
   },

   {
      singers: "Tanishk Bagchi, Yasser Desai, Asees Kaur",
      album: "https://dl.dropbox.com/s/pbe91gmze5u5emp/drive.jpg",
      sorc: "https://dl.dropbox.com/s/uzvwjn1lo4ueymd/makhna.mp3"
      //Credits - https://youtu.be/HqUeSjsYLNU
   },

   {
      singers: "Rashid Ali",
      album: "https://dl.dropbox.com/s/ziclzsyx7mn8ldy/jaane-tu-ya-jaane-na.jpg",
      sorc: "https://dl.dropbox.com/s/qo6um5qj99z9wq2/kabhi%20kabhi%20aditi%20zindagi.mp3"
      //Credits - https://youtu.be/HIbzXaBdwZw
   },

   {
      singers: "Shawn Mendes, Camila Cabello",
      album: "https://dl.dropbox.com/s/z6254tntkkhnooi/senorita.jpg",
      sorc: "https://dl.dropbox.com/s/6qaset4v70h3w94/senorita.mp3"
      //Credits - https://youtu.be/Pkh8UtuejGw
   },

   {
      singers: "Shae Gill, Ali Sethi",
      album: "https://dl.dropbox.com/s/i52mpqnlr2u00b2/pasoori.jpg",
      sorc: "https://dl.dropbox.com/s/d1ajevbwo6fv43b/pasoori%20-%20shae%20gill.mp3"
      //Credits - https://youtu.be/5Eqb_-j3FDA
   },

   {
      singers: "Akhil, Dhvani Bhanushali, Abhijeet",
      album: "https://dl.dropbox.com/s/9izjtutrrvmwpb2/duniyaa.jpg",
      sorc: "https://dl.dropbox.com/s/amwqmtqosdarumg/duniyaa%20-%20luka%20chuppi.mp3"
      //Credits - https://youtu.be/hVCYwwFwGEE
   },

   {
      singers: "Badshah, Diljit Dosanjh, Aashtha Gill",
      album: "https://dl.dropbox.com/s/2dx1elr0cnd9vmd/namaste-england.jpg",
      sorc: "https://dl.dropbox.com/s/4cq8qzr4zmddpjg/proper%20patola.mp3"
      //Credits - https://youtu.be/YmXJp4RtBCM
   },

   {
      singers: "Alan Walker, K-391, Emelie Hollow",
      album: "https://dl.dropbox.com/s/scxba97810a20d0/different%20world.jpg",
      sorc: "https://www.dropbox.com/s/u97ao94w5taug9n/lily.mp3"
      //Credits - https://youtu.be/hdonNbzHHXE
   },

   {
      singers: "Armaan Malik, Neeti Mohan",
      album: "https://dl.dropbox.com/s/it85ih1kapdhkoe/Baar-Baar-Dekho.jpg",
      sorc: "https://www.dropbox.com/s/thrp0ovyy255uko/Sau_Aasmaan.mp3"
      //Credits - https://youtu.be/mpjNh-uGBY4
   },

   {
      singers: "Maninder Buttar",
      album: "https://dl.dropbox.com/s/fd8zq58ysqnqx0n/sakhiyaan.jpg",
      sorc: "https://dl.dropbox.com/s/krg0ts1v4cr5avv/sakhiyaan.mp3"
      //Credits - https://youtu.be/S-ezhTXPVGU
   },

   {
      singers: "Shawn Mendes",
      album: "https://dl.dropbox.com/s/bgbuxmp8l0m3d60/lost%20in%20japan.jpg",
      sorc: "https://dl.dropbox.com/s/y3nml3nfkf11mvh/lost%20in%20japan.mp3"
      //Credits - https://youtu.be/ycy30LIbq4w
   },

   {
      singers: "Dhvani Bhanushali",
      album: "https://dl.dropbox.com/s/mztkt40xtco0m7k/nayan.jpg",
      sorc: "https://dl.dropbox.com/s/2zdfcfea3vhr47f/nayan.mp3"
      //Credits - https://youtu.be/1qlw555_I58
   },

   {
      singers: "Rochak Kohli, Lauv, AKASA",
      album: "https://dl.dropbox.com/s/8d14qo545gg4pl8/dilnajaaneya.jpeg",
      sorc: "https://dl.dropbox.com/s/gr7v9guafv7h7rz/Dil%20Na%20Jaaneya.mp3"
      //Credits - https://youtu.be/OwrSOPNpPpM
   },

   {
      singers: "Austin Mahone",
      album: "https://dl.dropbox.com/s/o1c4mlbsv6wkqtz/the%20secret.jpg",
      sorc: "https://dl.dropbox.com/s/j5c62ipjx3h609d/all%20i%20ever%20need.mp3"
      //Credits - https://youtu.be/ZAC_k1HUyE4
   },

   {
      singers: "Shaan, Aamir Khan",
      album: "https://dl.dropbox.com/s/mj1msmlmf44o0sz/taare-zameen-par.jpg",
      sorc: "https://dl.dropbox.com/s/1046cfsv6ys3oeh/bum%20bum%20bole.mp3"
      //Credits - https://youtu.be/NJ1NIIdHhXs
   }

]

//-----Song_Cont Adding Or Html work----//
for (s = 0; s < songs.length; s++) {
   allSongs.innerHTML += '<div class="songCnt"> <div class="aNd" onclick="songPlay(this)"> <img class="alb1" src="' + songDet[s].album + '"> <div class="songDet"> <div class="name1">' + songs[s] + '</div> <p class="singer1">' + songDet[s].singers + '</p> </div> </div> <button class="bi-heart toLik" onclick="like(this)"></button> </div>';

   lik[s] = 0;

}
songCnt = document.querySelectorAll(".songCnt");

//------Like & Remove-------//
function like(thiz) {
   ind = songs.indexOf(thiz.parentNode.childNodes[1].childNodes[3].childNodes[1].innerHTML);
   if (lik[ind] == 0) {
      thiz.className = "bi-heart-fill liked";
      lik[ind] = 1;
   }
   else {
      thiz.className = "bi-heart toLik";
      lik[ind] = 0;
   }
}

for (i = 0; i < songCnt.length; i++) {
   if (i == 0 || i == 1 || i == 3 || i == 5 || i == 6 || i == 9 || i == 10 || i == 11 || i == 15 || i == 13 || i == 17 || i == 19 || i == 21) {
      songCnt[i].childNodes[3].click();
   }
}

mnPlrLik.addEventListener("click", function () {
   ind = songs.indexOf(name3.innerHTML);
   songCnt[ind].childNodes[3].click();
   if (lik[ind] == 1) {
      this.className = "bi-heart-fill lik";
   }
   else {
      this.className = "bi-heart toLik";
   }
})

function remoFav(thiz) {
   thiz.className = "bi-x-circle-fill toLik";
   ind = songs.indexOf(thiz.parentNode.childNodes[1].childNodes[3].childNodes[1].innerHTML);
   songCnt[ind].childNodes[3].click();
   setTimeout(function () {
      thiz.parentNode.style.left = "-100%";
      setTimeout(function () {
         favs.removeChild(thiz.parentNode);
      }, 300)
   }, 150)
}

//----Play the Song function-----//
var song, singer, album;
function getSongDet(thiz) {
   song = thiz.childNodes[3].childNodes[1];
   singer = thiz.childNodes[3].childNodes[3];
   album = thiz.childNodes[1].src;
}


function songPlay(thiz) {
   getSongDet(thiz);
   ind = songs.indexOf(song.innerHTML);
   fixPlrWrap.style.bottom = "-4.5rem";
   alb3.src = album;
   alb3Back.style.background = "url('" + album + "') no-repeat";
   alb3Back.style.backgroundSize = "100% 100%";
   setTimeout(function () {
      fixPlrWrap.style.bottom = "0";
      name2.innerHTML = song.innerHTML;
      singers2.innerHTML = singer.innerHTML;
      alb2.src = album;
   }, 300)

   if (lik[ind] == 1) {
      mnPlrLik.className = "bi-heart-fill lik";
   }
   else {
      mnPlrLik.className = "bi-heart toLik";
   }

   name3.innerHTML = song.innerHTML;
   singers3.innerHTML = singer.innerHTML;
   for (l = 0; l < songCnt.length; l++) {
      songCnt[l].style.background = "linear-gradient(to top left, rgba(255,255,255,.1),transparent,rgba(255,255,255,.1))";
      songCnt[l].style.background = "-webkit-linear-gradient(top left, rgba(255,255,255,.1),transparent,rgba(255,255,255,.1))";
      songCnt[l].childNodes[1].childNodes[3].childNodes[3].style.color = "#bbb";
   }
   thiz.parentNode.style.background = "var(--theme-D-trans)";
   audio.src = songDet[ind].sorc;
   curDur.innerHTML = "00:00";
   track.style.background = "var(--theme-D-trans)";
   track.value = "0";
   if (pla.classList.contains("bi-play")) {
      plaPauseTog();
   }
   songLoader1.style.display = "block";
   songLoader2.style.display = "block";
   audio.play().then(function () {
      songLoader1.style.display = "none";
      songLoader2.style.display = "none";
   }).catch(function () { });
   var updDur = setInterval(function () {
      if (audio.duration) {
         endDur.innerHTML = audDur(audio.duration);
         runTrack();
         clearInterval(updDur)
      }
   })
   audio.addEventListener("ended", next)

}

function playFav(thiz) {
   getSongDet(thiz);
   ind = songs.indexOf(song.innerHTML);
   songCnt[ind].childNodes[1].click();
   likCnt = document.querySelectorAll(".likSongCnt");
   for (fv = 0; fv < likCnt.length; fv++) {
      likCnt[fv].style.background = "linear-gradient(to top left, rgba(255,255,255,.1),transparent,rgba(255,255,255,.1))";
      likCnt[fv].style.background = "-webkit-linear-gradient(top left, rgba(255,255,255,.1),transparent,rgba(255,255,255,.1))";
      likCnt[fv].childNodes[1].childNodes[3].childNodes[3].style.color = "#bbb";
   }
   thiz.parentNode.style.background = "var(--theme-D-trans)";
}

pla.addEventListener("click", plaPause);
playB.addEventListener("click", plaPause);
function plaPause() {
   if (audio.paused) {
      audio.play().then(function () {
         songLoader1.style.display = "none";
         songLoader2.style.display = "none";
      }).catch(function () { });
      runTrack()
      plaPauseTog();
   }
   else {
      audio.pause()
      plaPauseTog();
   }
}
function plaPauseTog() {
   pla.classList.toggle("bi-play");
   pla.classList.toggle("bi-pause");
   playB.classList.toggle("bi-play");
   playB.classList.toggle("bi-pause");
}

replay.addEventListener("click", function () {
   audio.currentTime = "0";
   audio.play()
})

//-----Player------//
function audDur(durr) {
   var mins = Math.floor(durr / 60);
   var secs = Math.floor(durr % 60);
   if (secs < 10) {
      secs = "0" + secs;
   }
   return "0" + mins + ':' + secs;
}

//----Track Controlling Function-----//
track.addEventListener("input", function () {
   inPrcnt = audio.duration * (track.value / 100);
   if (audio.duration) {
      curDur.innerHTML = audDur(inPrcnt);
   }
   audio.currentTime = inPrcnt;
})

function runTrack() {
   runiTrack = setInterval(function () {
      track.value = (audio.currentTime / audio.duration) * 100;
      curDur.innerHTML = audDur(audio.currentTime)
      filTrack()
      if (audio.currentTime == audio.duration || audio.paused) {
         clearInterval(runiTrack)
      }
   }, 1000)
}

var lop = 0;
loop.addEventListener("click", function () {
   if (lop == 0) {
      audio.setAttribute("loop", "true");
      lop = 1;
      loop.style.color = "var(--theme-L)";
   }
   else {
      audio.removeAttribute("loop", "false");
      lop = 0;
      loop.style.color = "#fff";
   }
})

//----Next & Previous Nav-----//
nxt.addEventListener("click", next);
function next() {
   if (ind >= songCnt.length - 1) {
      ind = -1;
   }
   songCnt[ind + 1].childNodes[1].click();
   alb3Back.classList.add("nxt");
   setTimeout(function () {
      alb3Back.classList.remove("nxt");
   }, 500)
}

prev.addEventListener("click", previous)
function previous() {
   if (ind <= 0) {
      ind = songCnt.length;
   }
   songCnt[ind - 1].childNodes[1].click();
   alb3Back.classList.add("prev");
   setTimeout(function () {
      alb3Back.classList.remove("prev");
   }, 500)
}

for (let p = 1; p < playCnt.childNodes.length; p += 2) {
   playCnt.childNodes[p].addEventListener("click", function () {
      t = this;
      t.classList.add("clck");
      setTimeout(function () {
         t.classList.remove("clck");
      }, 500)
   })
}

//---Track fill function-----//
track.addEventListener("change", filTrack)
track.addEventListener("input", filTrack)
function filTrack() {
   track.style.background = "-webkit-linear-gradient(to right, var(--theme) 0%, var(--theme) " + track.value + "%, var(--theme-D-trans) " + track.value + "%, var(--theme-D-trans) 100%)";
   track.style.background = "linear-gradient(to right, var(--theme) 0%, var(--theme) " + track.value + "%, var(--theme-D-trans) " + track.value + "%, var(--theme-D-trans) 100%)";
}

//----Settings----//
function oSettings() {
   settings.style.display = "block";
   setTimeout(() => settings.style.left = "0");
   setTimeout(() => music_pg.style.display = "none", 200);
}
function cSettings() {
   settings.style.left = "100%";
   music_pg.style.display = "block";
   setTimeout(() => {
      settings.style.display = "none";
   }, 200);
}

//----Audio Volume------//
volum.addEventListener("input", function () {
   audio.volume = volum.value / 100;
})

//---Theme Changing function----//
const Themes = {
   red: ["#DA4267", "#C93256", "rgba(180,100,140,.4)", "#FC6489"],
   blue: ["#4B839B", "#3A728A", "rgba(62,120,150,.4)", "#6DA5BD"],
   green: ["#6A8", "#597", "rgba(100,150,125,.4)", "#8BA"],
   choco: ["#AD6444", "#9C5333", "rgba(156,83,51,.4)", "#CF8666"],
   indigo: ["#7D53DE", "#6C42CD", "rgba(125,83,222,.4)", "#9F75FF"]
}
var root = document.querySelector(":root");

function themeOpn() {
   themePlat.style.display = "grid";
}
function themeClos() {
   themePlat.style.display = "none";
}

function setTheme(opt) {
   opt = Themes[opt];
   root.style.setProperty("--theme", opt[0])
   root.style.setProperty("--theme-D", opt[1])
   root.style.setProperty("--theme-D-trans", opt[2])
   root.style.setProperty("--theme-L", opt[3])
}

//----Loader-----//
setTimeout(() => {
   loadin_pg.style.top = "-100%";
   setTimeout(function () {
      loadin_pg.style.display = "none";
   }, 300)
}, 4000)

//---Initial Step----//
songCnt[9].childNodes[1].click();
plaPause();
audio.pause();
songLoader1.style.display = "none";
songLoader2.style.display = "none";
document.querySelectorAll(".theme")[1].click()
document.querySelector('#right').innerHTML = `@${Math.now()}, Monu. All Rights Reserved.`

