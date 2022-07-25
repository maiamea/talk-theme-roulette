'use strict';

import talkThemesData from "./talk-themes-data.json" assert {type: "json"}
console.log({talkThemesData});

const startButton = document.getElementById('start-button');

// スタートボタンをクリックすると、トークテーマが表示される
startButton.onclick = () => {
  console.log('ボタンが押されました。');
  
  // 決定したトークテーマを表示するエリアの作成
  const resultArea = document.getElementById('result-area');
  const header = document.createElement('h2');
  header.innerHTML = 'トークテーマの発表';
  const selectedTalkTheme = document.createElement('p');
  selectedTalkTheme.innerHTML = 'トークテーマは「昨日の晩ごはん」です。';
  resultArea.appendChild(header);
  resultArea.appendChild(selectedTalkTheme);
}