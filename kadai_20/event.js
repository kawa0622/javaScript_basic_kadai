//btnというidのHTML要素取得して、定数に代入する
const btn = document.getElementById('btn');

 //textというidを持つHTML要素を代入して定数に代入する
 const text = document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', ()=> {
 text.textContent = 'ボタンをクリックしました';
})