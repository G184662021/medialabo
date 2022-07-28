let ba = document.querySelector("span#basyo");
let hk = document.querySelector("span#highkion");
let lk = document.querySelector("span#lowkion");
let si = document.querySelector("span#sitsudo");
let hus = document.querySelector("span#husoku")
let img = document.createElement('img');
let tenki =document.querySelector("span#tenki");
let count=0;
    let b = document.querySelector('button#push');
    b.addEventListener('click', search);

// 通信を開始する処理
function search() {
  console.log(count);    
  let math;
  let x;
      let y=document.querySelectorAll('input[name="push"]');
      for(math of y){
          if(math.checked){
              x=math.value;
          }
      }

      // URL を設定
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+x+'.json';

      // 通信開始
      axios.get(url)
          .then(showResult)   // 通信成功
          .catch(showError)   // 通信失敗
          .then(finish);      // 通信の最後の処理
  }


  // 通信が成功した時の処理
  function showResult(resp) {
      count+=1;
      // サーバから送られてきたデータを出力
      let data = resp.data;

      // data が文字列型なら，オブジェクトに変換する
      if (typeof data === 'string') {
          data = JSON.parse(data);
      }

      let a;
      let toshi=document.querySelector('div#tosi');
      if(data.name==="State of Rio de Janeiro"){
          a="リオデジャネイロ";
      }else if(data.name==="Paris"){
          a="パリ";
      }else{
          a=data.name;
      }
      toshi.textContent='都市名:'+a;
      

      let iremono;
      let r;
      let ul;
      let li;
      let i=document.querySelectorAll('input[name="know"]');
          ul=document.createElement("ul");
          toshi.insertAdjacentElement("afterend",ul);

      for(r of i){
          if(r.checked){
              li=document.createElement("li");
              iremono=r.value;
              if(iremono==='weather.description'){
                  li.textContent='天気:'+ data.weather[0].description;
                  ul.insertAdjacentElement("beforeend",li);
                  if(data.weather[0].main==="Clear"){
                      ul.style.backgroundColor="rgba(2, 175, 255, 0.373)";
                  }else if(data.weather[0].main==="Clouds"){
                      ul.style.backgroundColor="rgba(177, 174, 197, 0.575)";
                  }else if(data.weather[0].main==="Rain"){
                      ul.style.backgroundColor="rgba(81, 148, 255, 0.495)";
                  }else if(data.weather[0].main==="Mist"){
                      ul.style.backgroundColor="rgba(190, 220, 255, 0.495)";
                  }
              }
              if(iremono==='main.humidity'){
                  li.textContent='湿度:'+ data.main.humidity+"%";
                  ul.insertAdjacentElement("beforeend",li);
              }
              if(iremono==='main.temp_max'){
                  li.textContent='最高気温:'+ data.main.temp_max+"℃";
                  ul.insertAdjacentElement("beforeend",li);
              }
              if(iremono==='main.temp_min'){
                  li.textContent='最低気温:'+ data.main.temp_min+"℃";
                  ul.insertAdjacentElement("beforeend",li);
              }
              if(iremono==='wind.speed'){
                  li.textContent='風速:'+ data.wind.speed+"m/s";
                  ul.insertAdjacentElement("beforeend",li);
              }
          if(iremono==='feels_like'){
              li.textContent='体感温度:'+data.feels_like+"℃";
              ul.insertAdjacentElement("beforeend",li);
          }
          }
      }if(count>=1){
          let p=document.createElement("p");
          p.textContent=a+"の検索結果です  ⤴";
          ul.insertAdjacentElement("afterend",p);
      }
  }


// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
    
}

