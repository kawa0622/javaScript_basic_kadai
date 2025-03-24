///btnというidのHTML要素取得して、定数に代入する
const btn = document.getElementById('btn');

//textというidを持つHTML要素を代入して定数に代入する
const text = document.getElementById('text');

//HTML要素がクリックされた時に、非同期処理でイベント処理を実行する
btn.addEventListener('click', () => {
setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
}, 2000);
});