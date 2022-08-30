'use strict';

import talkThemesData from "./talk-themes-data.json" assert {type: "json"}

const startButton = document.getElementById('start-button');
const resultArea = document.getElementById('result-area');

// トークテーマの合計数
const sumTalkThemes = talkThemesData.length;

// スタートボタンをクリックすると、トークテーマが表示される
startButton.onclick = () => {
  // 決定したトークテーマを表示するエリアの作成
  makeTalkThemeArea();
}


/**
 * 決定したトークテーマを表示するエリアの作成
 */
function makeTalkThemeArea() {
  resultArea.innerText = ''; // すでに表示されてる結果を削除する

  // headerDivided の作成
  const headerDivided = document.createElement('div');
  headerDivided.setAttribute('class', 'card-header');
  headerDivided.innerText = 'トークテーマの発表';
  
  // bodyDivided の作成
  const bodyDivided = document.createElement('div');
  bodyDivided.setAttribute('class', 'card-body');
  
  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'card-text');
  paragraph.innerText =  randomTalkTheme(talkThemesData);
  bodyDivided.appendChild(paragraph);
  
  // resultArea に Bootstrap のスタイルを適用する
  resultArea.setAttribute('class', 'card');
  resultArea.setAttribute('style', 'max-width: 700px');

  // reaultArea に headerDivided と bodyDivided を差し込む
  resultArea.appendChild(headerDivided);
  resultArea.appendChild(bodyDivided);
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


/**
 * 乱数を生成
 * @param {number} sumTalkThemes 
 * @returns {number} ランダムな数字を返す
 */
function makeRandomNumber(sumTalkThemes) {
  return Math.floor(Math.random() * sumTalkThemes);
}