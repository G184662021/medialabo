// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let b2 = document.querySelector('button#print');
b2.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
   
    // 第5回課題:テキストボックスの数値をここに代入
    let i = document.querySelector('input[name="nyuryoku"]');
    let yoso = Number(i.value);
    kaisu = kaisu +1;
    // 課題3-1：ここの判定処理を作成する．
    let a = document.querySelector('span#result')
    let b = document.querySelector('span#answer')
    b.textContent = kaisu+'回目の予想 '+yoso;
    if(kaisu >= 4){
        a.textContent = '答えは'+kotae+'でした。すでにゲームはおわっています。';
    }

    else if(kotae === yoso){
        a.textContent = '正解です．おめでとう!';
    }
    else if(kotae < yoso){
        a.textContent='まちがい．答えはもっと小さいですよ';
    }
    else if(kotae > yoso){
        a.textContent='まちがい．答えはもっと大きいですよ';
    }


    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

}