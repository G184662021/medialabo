let b = document.querySelector('button#push');
b.addEventListener('click', search)

function search() {
  var a=document.getElementById('search');
  if(a.value ==="1") {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json";
    axios.get(url)
    .then(showResult)  //通信成功
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
    let te =data.weather[0].description;
    tenki.textContent =data.weather[0].description;
    ba.textContent =data.name;
    hk.textContent =data.main.temp_max+"℃";
    lk.textContent =data.main.temp_min+"℃";
    si.textContent =data.main.humidity+"%";
    huk.textContent =data.wind.deg;
    hus.textContent =data.wind.speed+"m/s";
    let sun = "tennki-illust2.png";
    let cloud = "tennki-illust6.png";
    let rain = "tennki-illust7.png";
    let kiri = "yama_kiri.png";
    if (te==='晴天'){

      img.setAttribute('src', sun);
      img.setAttribute('width', '300px');
      img.setAttribute('height', 'auto');
      img.setAttribute('margin', 'auto');
      let picture = document.querySelector("div#weather");
      picture.insertAdjacentElement("beforeend", img);
    }else if (te==="厚い雲"||te==="雲"||te==="曇りがち"){

      img.setAttribute('src', cloud);
      img.setAttribute('width', '300px');
      img.setAttribute('height', 'auto');
      img.setAttribute('margin', 'auto');
      let picture = document.querySelector("div#weather");
      picture.insertAdjacentElement("beforeend", img);
    }else if (te==="小雨") {

      img.setAttribute('src', rain);
      img.setAttribute('width', '300px');
      img.setAttribute('height', 'auto');
      img.setAttribute('margin', 'auto');
      let picture = document.querySelector("div#weather");
      picture.insertAdjacentElement("beforeend", img);
    }else if (te==="霧") {
  
      img.setAttribute('src', kiri);
      img.setAttribute('width', '300px');
      img.setAttribute('height', 'auto');
      img.setAttribute('margin', 'auto');
      let picture = document.querySelector("div#weather");
      picture.insertAdjacentElement("beforeend", img);
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

