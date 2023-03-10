
// Utility Logic

function isEmpty() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

//buisness logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(text)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function dontCountBadWords(text) {
  const badWordArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const textArray = text.split(" ");
  let goodArray = [];
  textArray.forEach(function (word) {
    if (!badWordArray.includes(word.toLowerCase())) {
      goodArray.push(word);

    }
  });
  return goodArray.join(' ');

}


function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function commonWords(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let textArray = text.split(" ");
  let wordCounts = [];
  textArray.forEach(function (text) {
    if (wordCounts[text]) {
      wordCounts[text]++;
    } else {
      wordCounts[text] = 1;
    }

  })

  return wordCounts;
}

function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  let position = -1;
  textArray.forEach(function (element, index) {
    console.log(index);
    if ((word === element) && (position === -1)) {
      position = index;
    }
  });
  return position;
}


// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const dontCount = dontCountBadWords(passage);
  const wordCount = wordCounter(dontCount);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});


