function rpsGame(yourChoice) {
  let humanChoice, botChoice;
  humanChoice = yourChoice.alt;
  botChoice = numberToChoice(randomToRpsInt());
  let result = decideWinner(humanChoice, botChoice);
  let message = finalMessage(result);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
  document.querySelector('button').style.display = 'block';
}

function randomToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  let rpsDataBase = {
    rock: {
      scissors: 1,
      rock: 0.5,
      paper: 0,
    },
    paper: {
      rock: 1,
      paper: 0.5,
      scissors: 0,
    },

    scissors: {
      rock: 0,
      paper: 1,
      scissors: 0.5,
    },
  };
  let yourScore = rpsDataBase[yourChoice][computerChoice];
  let computerScore = rpsDataBase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return {
      message: 'You Lost',
      color: 'red',
    };
  } else if (yourScore === 0.5) {
    return {
      message: 'You tied',
      color: 'grey',
    };
  } else {
    return {
      message: 'You won',
      color: 'green',
    };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDataBase = {
    rock: document.getElementById('rock').src,
    paper: document.getElementById('paper').src,
    scissors: document.getElementById('scissors').src,
  };

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  let humanDiv = document.createElement('div');
  let botDiv = document.createElement('div');
  let messageDiv = document.createElement('div');
  messageDiv.innerHTML = `<h1 style=" font-size: 60px; padding: 30px; color: ${finalMessage.color}">${finalMessage.message}</h1>`;
  humanDiv.innerHTML = `<img src='${imagesDataBase[humanImageChoice]}' height="150" width="150" style="box-shadow: 0px 10px 50px blue"; padding:30px>`;
  botDiv.innerHTML = `<img src='${imagesDataBase[botImageChoice]}' height="150" width="150" style="box-shadow: 0px 10px 50px red; padding:30px">`;
  document.getElementById('flexbox-rps-div').append(humanDiv);
  document.getElementById('flexbox-rps-div').append(messageDiv);
  document.getElementById('flexbox-rps-div').append(botDiv);
}

function restart() {
  window.location.reload();
}
