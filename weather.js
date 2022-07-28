let ba = document.querySelector("span#basyo");
let hk = document.querySelector("span#highkion");
let lk = document.querySelector("span#lowkion");
let si = document.querySelector("span#sitsudo");
let hus = document.querySelector("span#husoku")
let img = document.createElement('img');
let tenki =document.querySelector("span#tenki");

    let b = document.querySelector('button#push');
    b.addEventListener('click', search);

    function search() {
      var a=document.getElementById('search');
      if(a.value ==="1") {
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json";  
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);  
      }else if(a.value ==="2" ){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value=== "3"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value === "4"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);  
      }else if(a.value === "5"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value === "6"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value === "7"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value=== "8"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value === "9"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value === "10"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value === "11"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else if(a.value ==="12"){
        let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json";
        axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
      }else {
        let url =null;
        
      }
    
    }
    
    // 通信が成功した時の処理
    function showResult(resp) {
        // サーバから送られてきたデータを出力
        let data = resp.data;
    
        // data が文字列型なら，オブジェクトに変換する
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }
      let a;
      
      let iremono;
      let r;
      let ul;
      let li;
      let i=document.querySelectorAll('input[name="know"]');
          ul=document.createElement("ul");

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

