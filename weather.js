let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};
////////// 課題3-2 ここからプログラムを書こう
console.log('都市名：'+data.name);
console.log('最高気温：'+data.main.temp_max);
console.log('最低気温：'+data.main.temp_min);

// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});



//ローディング画面
$(window).on('load',function(){    
  $("#youtube-area").addClass('appear');
  $("#loading").addClass('disappear');
});

//youtube API
var tag = document.createElement('script');
tag.src = "https://youtu.be/hpzoSf2d9ko";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
function onYouTubeIframeAPIReady() {
ytPlayer = new YT.Player('youtube', {//動画を表示させたいIDを指定
  videoId: 'Kq95zgCrxeY',//動画のアドレスの指定
  playerVars: {
      playsinline: 1,// インライン再生を行う
      autoplay:1,//自動再生を行う
      fs:0,//全画面表示ボタンを表示しない    
      rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
      controls: 0,// プレーヤー コントロールを表示しない
      modestbranding: 1, // YouTubeロゴの非表示
      iv_load_policy: 3, // アノテーションの非表示
      start:50,//50秒後から動画がスタート
  },    
  events: {//　イベント
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
  }
});
}

//ミュートにしてから再生する設定
function onPlayerReady(event) {
event.target.mute();
event.target.playVideo();
}


//ループ設定
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.ENDED) {
event.target.playVideo();
}
}