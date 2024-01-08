const nextBtn = document.getElementById("nextBtn");
const anotherWord = document.getElementById("another");
const spyBox = document.querySelector(".smallBox.spy");
const containerBox = document.getElementById("container");

// default number of players
let citizenNum = 3;
let liarNum = 1;
let spyNum = 1;
let tempSpy = spyNum;
let playerCount = 0;

// to check roles
let roles = [];

// to check checkbox
let isChecked = false;

// to define what words they will have
let liarValue, playerValue, spyValue;

//----------initialize----------//
function addOptionsToSelect(start, end, targetElementId) {
  const targetSelect = document.getElementById(targetElementId);

  for (let i = start; i <= end; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    targetSelect.appendChild(option);
  }
}

addOptionsToSelect(3, 15, "citizenNum");
addOptionsToSelect(1, 4, "liarNum");
addOptionsToSelect(1, 4, "spyNum");
//----------initialize----------//

//get random number function
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// game mode selection
anotherWord.addEventListener("change", () => {

  if (anotherWord.checked) {
    spyBox.style.display = "none";
    spyNum = 0;
    isChecked = true;
  } else {
    spyBox.style.display = "block";
    spyNum = tempSpy;
    isChecked = false;
  }
});



// get players num
function getSelectedValue(obj) {
  let selected = obj.value;
  switch (obj.id) {
    case 'citizenNum':
      citizenNum = parseInt(selected);
      break;
    case 'liarNum':
      liarNum = parseInt(selected);
      break;
    case 'spyNum':
      spyNum = parseInt(selected);
      tempSpy = parseInt(selected);
      break;
    default:
      break;
  }
}

// to check roles
function pushPlayerNum(obj, num) {
  for (let i = 0; i < num; i++) {
    roles.push(obj);
  }
}

// next button event listener
nextBtn.addEventListener("click", function () {
  playerCount = citizenNum + liarNum + spyNum;
  selectTopic();
  pushPlayerNum('c', citizenNum);
  pushPlayerNum('l', liarNum);
  pushPlayerNum('s', spyNum);
  for (let i = roles.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [roles[i], roles[randomIndex]] = [roles[randomIndex], roles[i]];
  }
  console.log(roles);
});



function selectTopic() {
  // make table
  let tableEle = "";
  tableEle += '<table>';
  for (let i = 0; i < 3; i++) { // ++
    tableEle += '<tr>';
    for (let j = 0; j < 3; j++) {
      let className = topicArr[i * 3 + j].replace(/\s/g, '-');
      tableEle += '<td class=' + className + '>' + topicArr[i * 3 + j] + '</td>';
    }
    tableEle += '</tr>';
  }
  tableEle += '</table>';
  containerBox.innerHTML = tableEle;

  // choose topic
  let tds = document.querySelectorAll('td');
  tds.forEach(td => {
    td.addEventListener('click', function () {

      // ---------need to fix------------//
      playerWord = getRandom(0, 9);
      liarWord = getRandom(0, 9);

      if (playerWord === liarWord) {
        if (liarWord === 9) {
          liarWord--;
        }
        else {
          liarWord++;
        }
      }
      // ---------need to fix------------//


      // check what topic is chosen and give words
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].category == this.className) {

          // check game mode
          if (isChecked) {
            liarValue = "[" + topics[i].items[liarWord].key + " / " + topics[i].items[liarWord].value + "]<br><br><br>press again</div>";
          }
          else {
            liarValue = "You are Liar<br><br><br>press again</div>";
          }

          spyValue = "You are Spy<br><br><br>[" + topics[i].items[playerWord].key + " / " + topics[i].items[playerWord].value + "]<br><br><br>press again</div>";
          playerValue = "[" + topics[i].items[playerWord].key + " / " + topics[i].items[playerWord].value + "]<br><br><br>press again</div>";
        }
      }
      checkWord();

    });
  });

}


function checkWord() {
  containerBox.innerHTML = '<div id="newBox">press and hold</div>';
  containerBox.innerHTML += '<div id="wordBox"></div>';


  const newBox = document.getElementById('newBox');
  const wordBox = document.getElementById('wordBox');
  var pressTimer;
  newBox.addEventListener('mousedown', (event) => {
    event.preventDefault();
    pressTimer = window.setTimeout(() => {
      for (let i = 0; i <= roles.length; i++) {
        if (roles[playerCount - 1] == "l") {
          wordBox.innerHTML = liarValue;
        }
        else if (roles[playerCount - 1] == "s") {
          wordBox.innerHTML = spyValue;
        }
        else {
          wordBox.innerHTML = playerValue;
        }
      }
      newBox.style.zIndex = 1;
      wordBox.style.zIndex = 2;
      wordBox.style.animation = 'scaleIn 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
      wordBox.style.display = 'flex';
    }, 1000)
  });
  newBox.addEventListener('mouseup', function () {
    clearTimeout(pressTimer); // 마우스를 뗄 때 타이머를 클리어하여 클릭 이벤트를 방지합니다.
  });
  wordBox.addEventListener('click', () => {
    wordBox.style.animation = 'scaleOut 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    setTimeout(function () {
      wordBox.style.display = 'none';

      newBox.style.zIndex = 2;
      wordBox.style.zIndex = 1;
    }, 200);
    playerCount--;
    if (playerCount === 0) {
      window.location.href = "timer.html";

    }
  });
}