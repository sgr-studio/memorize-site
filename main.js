// Enterを検知しlistに追加する機構 [ここから]
let textbox_check = document.getElementById('textbox');
let output = document.getElementById('output');

textbox_check.addEventListener('keypress', test_ivent);
// textbox_check.addEventListener('click', remove_ivent);

function test_ivent(e) {
  if (textbox_check.length === 0) {
  }else{
    if (e.keyCode === 13) {
      var textbox_contents = document.getElementById("textbox");
      var textboxvalue = textbox_contents.value;
      var list = document.getElementById('list');
      // 追加する要素を作成
      // var li = document.createElement('li');
      // li.innerHTML = textboxvalue;
      // 末尾に追加
      // list.appendChild(li);
      list.prepend(li);
  }  
    return false;
  }
}

// function remove_ivent() {
//   li.remove();
// }
// Enterを検知しlistに追加する機構 [ここまで]

function firstload() {
  var settings_area = document.getElementById("settings_area");
  var quiz_area = document.getElementById("quiz_area");
  var menu_area = document.getElementById("menu_area");
  var info_area = document.getElementById("info");
  settings_area.style.display="none";
  menu_area.style.display="block";
  quiz_area.style.display="none";
  info_area.style.display="none";
  document.getElementById("div_quiz_screen").style.display="none";
}

function start() {
  var settings_area = document.getElementById("settings_area");
  var quiz_area = document.getElementById("quiz_area");
  var menu_area = document.getElementById("menu_area");
  var info_area = document.getElementById("info");
  settings_area.style.display="none";
  menu_area.style.display="none";
  quiz_area.style.display="block";
  info_area.style.display="none";
  localStorage.removeItem("Summoned")
  document.getElementById("next").style.display="block";
  document.getElementById("restart").style.display="none";
  var ccc = document.getElementById("question");
  ccc.innerHTML = "次へを押して覚えましょう"; 
}

function settings() {
  var settings_area = document.getElementById("settings_area");
  var quiz_area = document.getElementById("quiz_area");
  var menu_area = document.getElementById("menu_area");
  var info_area = document.getElementById("info");
  settings_area.style.display="block";
  menu_area.style.display="none";
  quiz_area.style.display="none";
  info_area.style.display="none";
}

function info() {
  var settings_area = document.getElementById("settings_area");
  var info_area = document.getElementById("info");
  var quiz_area = document.getElementById("quiz_area");
  var menu_area = document.getElementById("menu_area");
  info_area.style.display="block";
  menu_area.style.display="none";
  settings_area.style.display="none";
  quiz_area.style.display="none";
}

firstload()


// オプションの表示
// 元
// const listItems = document.querySelectorAll('#list li');
// const contentContainer = document.getElementById('contentContainer');

// listItems.forEach((item, index) => {
//   item.addEventListener('mouseenter', () => {
//     const content = document.getElementById(`content${index + 1}`);
//     content.classList.remove('hidden');
//     alignContentWithItem(content, item);
//   });

//   item.addEventListener('mouseleave', () => {
//     const content = document.getElementById(`content${index + 1}`);
//     content.classList.add('hidden');
//   });
// });

// function alignContentWithItem(content, item) {
//   const itemRect = item.getBoundingClientRect();
//   const containerRect = contentContainer.getBoundingClientRect();

//   content.style.left = `${itemRect.left - containerRect.left}px`;
//   content.style.top = `${itemRect.top - containerRect.top + itemRect.height}px`;
// }

//新しいやつ
// const listItems = document.querySelectorAll('#list li');
// const contentContainer = document.getElementById('contentContainer');
// const addButton = document.getElementById('textBtn'); 
// let currentContent = null;
// let currentItem = null;

// listItems.forEach((item, index) => {
//   item.addEventListener('keypress', () => {
//     const content = document.getElementById(`content${index + 1}`);
//     toggleContentVisibility(content, item);
//   });
// });

// addButton.addEventListener('keypress', () => {
//   addNewItem();
//   textbox_check.textContent = "";
// });

// function toggleContentVisibility(content, item) {
//   if (currentContent && currentItem) {
//     currentContent.classList.add('hidden');
//     currentItem.classList.remove('selected');
//   }
//   if (currentContent !== content) {
//     content.classList.remove('hidden');
//     item.classList.add('selected');
//     currentContent = content;
//     currentItem = item;
//   } else {
//     currentContent = null;
//     currentItem = null;
//   }
// }

// function addNewItem() {
//   const newItemIndex = listItems.length + 1;
//   const newItem = document.createElement('li');
//   newItem.textContent = `${newItemIndex}`;
//   newItem.addEventListener('click', () => {
//     const content = document.getElementById(`content${newItemIndex}`);
//     toggleContentVisibility(content, newItem);
//   });
//   document.getElementById('list').appendChild(newItem);

//   const newContent = document.createElement('div');
//   newContent.id = `content${newItemIndex}`;
//   newContent.className = 'hidden';
//   newContent.textContent = `${newItemIndex}`;
//   document.getElementById('contentContainer').appendChild(newContent);
// }


// オプション選択
// // "myList"というIDを持つ既存の<ul>要素が存在すると仮定します
// const myList = document.getElementById("list");

// // 新しい<li>要素を作成します
// const newLi = document.createElement("li");

// // 新しい<span>要素を作成します
// const newSpan = document.createElement("span");
// newSpan.innerHTML = '<h2>Hello</h2>';

// // <span>要素を<li>要素に追加します
// newLi.appendChild(newSpan);

// // <li>要素を<ul>要素に追加します
// myList.appendChild(newLi);


// 削除オプション機構
function handleClick(event) {
  var listItems = document.querySelectorAll("#list li");
  var optionDiv = document.getElementById("option");

  // クリックされた要素がリストアイテムかどうかをチェック
  var isListItem = false;
  for (var i = 0; i < listItems.length; i++) {
    if (event.target === listItems[i]) {
      isListItem = true;
      break;
    }
  }

  // クリックされた要素がリストアイテムの場合のみ処理を行う
  if (isListItem) {
    // クリックされたリストアイテムの状態を切り替える
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      if (event.target === listItem) {
        listItem.classList.toggle("on");
        listItem.classList.toggle("off");
      } else {
        listItem.classList.remove("on");
        listItem.classList.add("off");
      }
    }
  }

  // オプションの表示状態を切り替える
  optionDiv.style.display = isListItem ? "block" : "none";
}

// リストアイテムを削除する関数
function removeItems() {
  var list = document.getElementById("list");
  var onItems = list.querySelectorAll("li.on");

  // ONになっているリストアイテムを削除
  onItems.forEach(function (item) {
    item.remove();
  });

  // オプションを非表示にする
  var optionDiv = document.getElementById("option");
  optionDiv.style.display = "none";
}

// リストアイテムを追加する関数
function addItem() {
  var list = document.getElementById("list");
  var textboxvalue = document.getElementById("textbox").value;

  // 新しいリストアイテムを作成
  var newItem = document.createElement("li");
  newItem.textContent = textboxvalue;
  newItem.classList.add("off");

  // クリックイベントを追加
  newItem.addEventListener("click", handleClick);

  // リストにアイテムを追加
  list.appendChild(newItem);
}

// アイテム追加ボタンのクリックイベントを設定
var addButton = document.getElementById("textbox");
window.document.onkeydown = function(event){
  if (event.key === 'Enter') {
    addButton.addEventListener("keypress", addItem);
    document.getElementById("textbox").value.innerText = " ";
  }
}

// オプションのdiv要素のクリックイベントを設定
var optionDiv = document.getElementById("option");
optionDiv.addEventListener("click", function (event) {
  event.stopPropagation(); // クリックイベントが親要素に伝播しないようにする
});

// 選択削除ボタンのクリックイベントを設定
var removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", removeItems);


// liのすべてを削除する

function removeallbtn() {
  // 親要素
  const ul = document.querySelector('ul');
   
  document.querySelector('button').addEventListener('click', function () {
    // 子要素を全て削除
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });

}

function removeallItems() {
  var list = document.getElementById("list");
  var onItems = list.querySelectorAll("li");

  // ONになっているリストアイテムを削除
  onItems.forEach(function (item) {
    item.remove();
  });

  // オプションを非表示にする
  var optionDiv = document.getElementById("option");
  optionDiv.style.display = "none";
}

function saveData() {
  const liElements = Array.from(document.querySelectorAll('ul li'));
  const listArray = liElements.map(li => li.textContent);
  localStorage.setItem('word', JSON.stringify(listArray));  
};

// 常に保存

// <ul>要素の参照を取得
const ulElement = document.querySelector('ul');

// <li>要素の内容を配列に保存する関数
function saveListToLocalStorage() {
  // <li>要素の参照を取得
  const liElements = ulElement.querySelectorAll('li');

  // <li>要素の内容を格納する配列
  const listArray = [];

  // 各<li>要素の内容を配列に追加
  liElements.forEach((li) => {
    listArray.push(li.textContent);
  });

  // 配列をJSON形式の文字列に変換してlocalStorageに保存
  localStorage.setItem('word', JSON.stringify(listArray));
}

// <ul>要素内の変更を監視し、変更があった場合に保存処理を実行
ulElement.addEventListener('DOMSubtreeModified', saveListToLocalStorage);

// ページ読み取り時に保存したデータから引き出す
// <ul>要素の参照を取得
const ulElement2 = document.getElementById('list');

// localStorageからデータを取得して<li>として追加する関数
function loadListFromLocalStorage() {
  // localStorageからデータを取得
  const listData = localStorage.getItem('word');

  // 取得したデータがある場合
  if (listData) {
    // <li>要素を一旦削除
    ulElement2.innerHTML = '';

    // JSON形式の文字列から配列に変換
    const listArray = JSON.parse(listData);

    // 配列の要素ごとに<li>要素を作成して追加
    listArray.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      li.classList.add('off'); // offクラスを追加

      // クリックイベントを追加
      li.addEventListener('click', handleClick);

      ulElement2.appendChild(li);
    });
  }
}

// ページ読み込み時にデータを取得して<li>を追加
window.addEventListener('load', loadListFromLocalStorage);

// オプションの表示状態を管理する変数
let isOptionVisible = false;

// リストアイテムをクリックしたときの処理
function handleClick(event) {
  const listItem = event.target;

  // クリックされたリストアイテムの状態を切り替える
  listItem.classList.toggle('on');
  listItem.classList.remove('off');

  // オプションの表示状態を切り替える
  const optionDiv = document.getElementById('option');
  isOptionVisible = !isOptionVisible;
  optionDiv.style.display = 'block';
}






// localStorageからwordの配列を重複なしでランダムに選ぶ機構
// localStorageからデータを取得
// function viewrandom() {
//   const listData = localStorage.getItem('word');
  
//   // 取得したデータがある場合
//   if (listData) {
//     // JSON形式の文字列から配列に変換
//     const listArray = JSON.parse(listData);
  
//     // 配列から重複なしのランダムな要素を選択
//     const uniqueRandomElement = getRandomUniqueElement(listArray);
  
//     // 選択された要素を表示
//     console.log(uniqueRandomElement);
//   }
// }

// // 配列から重複なしのランダムな要素を選択する関数
// function getRandomUniqueElement(array) {
//   // 配列の要素数が0の場合はnullを返す
//   if (array.length === 0) {
//     return null;
//   }

//   // ランダムなインデックスを生成
//   const randomIndex = Math.floor(Math.random() * array.length);

//   // 選択された要素を取得
//   const selectedElement = array[randomIndex];

//   // 選択された要素を返す
//   return selectedElement;
// }


// viewrandom()
// viewrandom()
// viewrandom()
// viewrandom()



// 二回目
// localStorageからデータを取得
// const listData = localStorage.getItem('word');

// // 取得したデータがある場合
// if (listData) {
//   // JSON形式の文字列から配列に変換
//   let listArray = JSON.parse(listData);

//   // 配列から重複なしのランダムな要素を選択
//   const uniqueRandomElement = getRandomUniqueElement(listArray);

//   // 選択された要素を表示
//   console.log(uniqueRandomElement);

//   // 選択された要素を配列から削除
//   listArray = listArray.filter(item => item !== uniqueRandomElement);

//   // 更新された配列をlocalStorageに保存
//   localStorage.setItem('word', JSON.stringify(listArray));
// }

// // 配列から重複なしのランダムな要素を選択する関数
// function getRandomUniqueElement(array) {
//   // 配列の要素数が0の場合はnullを返す
//   if (array.length === 0) {
//     return null;
//   }

//   // ランダムなインデックスを生成
//   const randomIndex = Math.floor(Math.random() * array.length);

//   // 選択された要素を取得
//   const selectedElement = array[randomIndex];

//   // 選択された要素を返す
//   return selectedElement;
// }




// 三回目

// function viewrandom() {
//   // localStorageからデータを取得
//   const listData = localStorage.getItem('word');
//   const summonedData = localStorage.getItem('Summoned');
  
//   // 取得したデータがある場合
//   if (listData && summonedData) {
//     // JSON形式の文字列から配列に変換
//     const listArray = JSON.parse(listData);
//     const summonedArray = JSON.parse(summonedData);
  
//     // Summonedの配列に出ていない要素を抽出
//     const remainingElements = listArray.filter(item => !summonedArray.includes(item));
  
//     // 配列から重複なしのランダムな要素を選択
//     const uniqueRandomElement = getRandomUniqueElement(remainingElements);
  
//     // 選択された要素を表示
//     console.log(uniqueRandomElement);
//     var ccc = document.getElementById("question");
//     ccc.innerHTML = uniqueRandomElement;
//     var ccc = document.getElementById("question");
//     ccc.innerHTML = uniqueRandomElement;
//     // Summonedの配列に選択された要素を追加
//     summonedArray.push(uniqueRandomElement);
  
//     // 更新されたSummonedの配列をlocalStorageに保存
//     localStorage.setItem('Summoned', JSON.stringify(summonedArray));
//   } else if (listData) {
//     // JSON形式の文字列から配列に変換
//     const listArray = JSON.parse(listData);
  
//     // Summonedの配列として新規作成
//     const summonedArray = [];
  
//     // 配列から重複なしのランダムな要素を選択
//     const uniqueRandomElement = getRandomUniqueElement(listArray);
  
//     // 選択された要素を表示
//     console.log(uniqueRandomElement);
//     var ccc = document.getElementById("question");
//     ccc.innerHTML = uniqueRandomElement;
    
//     // Summonedの配列に選択された要素を追加
//     summonedArray.push(uniqueRandomElement);
    
//     // 更新されたSummonedの配列をlocalStorageに保存
//     localStorage.setItem('Summoned', JSON.stringify(summonedArray));
    
//   }

// }

// // 配列から重複なしのランダムな要素を選択する関数
// function getRandomUniqueElement(array) {
//   // 配列の要素数が0の場合はnullを返す
//   if (array.length === 0) {
//     return null;
//   }

//   // ランダムなインデックスを生成
//   const randomIndex = Math.floor(Math.random() * array.length);

//   // 選択された要素を取得
//   const selectedElement = array[randomIndex];

//   // 選択された要素を配列から削除
//   array.splice(randomIndex, 1);

//   // 選択された要素を返す
//   return selectedElement;
// }


// ４回目（GTP）
function viewrandom() {
  // localStorageからデータを取得
  const listData = localStorage.getItem('word');
  const summonedData = localStorage.getItem('Summoned');
  
  // 取得したデータがある場合
  if (listData && summonedData) {
    // JSON形式の文字列から配列に変換
    const listArray = JSON.parse(listData);
    const summonedArray = JSON.parse(summonedData);
  
    // Summonedの配列に出ていない要素を抽出
    const remainingElements = listArray.filter(item => !summonedArray.includes(item));
  
    // 配列から重複なしのランダムな要素を選択
    const uniqueRandomElement = getRandomUniqueElement(remainingElements);
  
    if (uniqueRandomElement !== null) {
      // 選択された要素を表示
      console.log(uniqueRandomElement);
      var ccc = document.getElementById("question");
      ccc.innerHTML = uniqueRandomElement;
    } else {
      // uniqueRandomElementがnullの場合、代わりに「End」と表示
      console.log("End");
      var ccc = document.getElementById("question");
      ccc.innerHTML = "暗記終了です。お疲れ様でした。";
      endquestion();
    }
  
    // Summonedの配列に選択された要素を追加
    summonedArray.push(uniqueRandomElement);
  
    // 更新されたSummonedの配列をlocalStorageに保存
    localStorage.setItem('Summoned', JSON.stringify(summonedArray));
  } else if (listData) {
    // JSON形式の文字列から配列に変換
    const listArray = JSON.parse(listData);
  
    // Summonedの配列として新規作成
    const summonedArray = [];
  
    // 配列から重複なしのランダムな要素を選択
    const uniqueRandomElement = getRandomUniqueElement(listArray);
  
    if (uniqueRandomElement !== null) {
      // 選択された要素を表示
      console.log(uniqueRandomElement);
      var ccc = document.getElementById("question");
      ccc.innerHTML = uniqueRandomElement;
    } else {
      // uniqueRandomElementがnullの場合、代わりに「End」と表示
      console.log("End");
      var ccc = document.getElementById("question");
      ccc.innerHTML = "暗記終了です。お疲れ様でした。";
      endquestion();
    }
    
    // Summonedの配列に選択された要素を追加
    summonedArray.push(uniqueRandomElement);
    
    // 更新されたSummonedの配列をlocalStorageに保存
    localStorage.setItem('Summoned', JSON.stringify(summonedArray));
  }
}

// 配列から重複なしのランダムな要素を選択する関数
function getRandomUniqueElement(array) {
  // 配列の要素数が0の場合はnullを返す
  if (array.length === 0) {
    return null;
  }

  // ランダムなインデックスを生成
  const randomIndex = Math.floor(Math.random() * array.length);

  // 選択された要素を取得
  const selectedElement = array[randomIndex];

  // 選択された要素を配列から削除
  array.splice(randomIndex, 1);

  // 選択された要素を返す
  return selectedElement;
}


function word_start() {
  document.getElementById("div_start").style.display="none";
  document.getElementById("div_quiz_screen").style.display="block";
  loadview();
  document.getElementById("load1").style.display="block";
  setTimeout(() => {
    loadview();
    document.getElementById("load2").style.display="block";
    setTimeout(() => {
      loadview();
      document.getElementById("load3").style.display="block";
      setTimeout(() => {
        loadview();
        document.getElementById("load4").style.display="block";
        setTimeout(() => {
          loadview();
          document.getElementById("load5").style.display="block";
          setTimeout(() => {
            loadview();
            document.getElementById("load6").style.display="block";
            setTimeout(() => {
              loadview();
              document.getElementById("qs").style.display="block";
            }, 600);
          }, 200);
        }, 1000);
      }, 250);
    }, 400);
  }, 100);
}

function loadview() {
  document.getElementById("load1").style.display="none";
  document.getElementById("load2").style.display="none";
  document.getElementById("load3").style.display="none";
  document.getElementById("load4").style.display="none";
  document.getElementById("load5").style.display="none";
  document.getElementById("load6").style.display="none";
  document.getElementById("qs").style.display="none";
}

function endquestion() {
  var ccc = document.getElementById("question");
  ccc.innerHTML = "暗記リストの暗記を終了しました"; 
  document.getElementById("next").style.display="none";
  document.getElementById("restart").style.display="block";
}