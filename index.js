'use strict';

import talkThemesData from "./talk-themes-data.json" assert {type: "json"}

const startButton = document.getElementById('start-button');

// スタートボタンをクリックすると、トークテーマが表示される
startButton.onclick = () => {
  console.log('ボタンが押されました。');
  
  // 決定したトークテーマを表示するエリアの作成
  const resultArea = document.getElementById('result-area');
  const header = document.createElement('h2');
  header.innerHTML = 'トークテーマの発表';
  const paragraph = document.createElement('p');
  paragraph.innerHTML =  randomTalkTheme(talkThemesData);
  resultArea.appendChild(header);
  resultArea.appendChild(paragraph);
}

// トークテーマの合計数
const sumTalkThemes = talkThemesData.length;

/**
 * 乱数を生成
 * @param {number} sumTalkThemes 
 * @returns {number} ランダムな数字を返す
 */
function makeRandomNumber(sumTalkThemes) {
  return Math.floor(Math.random() * sumTalkThemes);
}


/**
 * ランダムに選ばれたトークテーマを返す
 * @param {Array} talkThemesData トークテーマの配列
 * @returns {string} ランダムに選ばれた1つのトークテーマ
 */
function randomTalkTheme(talkThemesData) {
  console.log({talkThemesData});
  const randomIndex =  makeRandomNumber(sumTalkThemes);
  console.log({randomIndex});
  return talkThemesData[randomIndex];
}