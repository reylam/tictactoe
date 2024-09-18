const blocks = document.querySelectorAll(".block");
let restart = document.querySelector(".reload");
let turnText = document.getElementById("turn");
let turn = "X";
let xScore = 0;
let oScore = 0;

restart.addEventListener("click", () => {
  window.location.reload();
});

blocks.forEach((block) => {
  block.addEventListener("mouseover", () => {
    if (block.innerHTML === "") {
      return;
    } else {
      block.style.scale = 1;
    }
  });

  block.addEventListener("click", () => {
    if (block.innerHTML === "") {
      block.innerHTML = turn;
    } else {
      return;
    }
    checkWin();
    if (turn === "X") {
      turn = "O";
      turnText.innerText = turn;
    } else {
      turn = "X";
      turnText.innerText = turn;
    }
  });
});

function checkWin() {
  // Check Horizonatal
  if (
    blocks[0].innerHTML != "" &&
    blocks[0].innerHTML === blocks[1].innerHTML &&
    blocks[1].innerHTML == blocks[2].innerHTML
  ) {
    setTimeout(() => {
      winner(blocks[0].innerHTML);
    }, 100);
  }
  if (
    blocks[3].innerHTML != "" &&
    blocks[3].innerHTML === blocks[4].innerHTML &&
    blocks[4].innerHTML == blocks[5].innerHTML
  ) {
    setTimeout(() => {
      winner(blocks[3].innerHTML);
    }, 100);
  }
  if (
    blocks[6].innerHTML != "" &&
    blocks[6].innerHTML === blocks[7].innerHTML &&
    blocks[7].innerHTML == blocks[8].innerHTML
  ) {
    setTimeout(() => {
      winner(blocks[6].innerHTML);
    }, 100);
  }

  //   Check Vertical
  if (
    blocks[0].innerHTML != "" &&
    blocks[0].innerHTML === blocks[3].innerHTML &&
    blocks[3].innerHTML === blocks[6].innerHTML
  ) {
    setTimeout(() => {
      winner(blocks[0].innerHTML);
    }, 100);
  }

  if (
    blocks[1].innerHTML != "" &&
    blocks[1].innerHTML === blocks[4].innerHTML &&
    blocks[4].innerHTML === blocks[7].innerHTML
  ) {
    setTimeout(() => {
      winner(blocks[1].innerHTML);
    }, 100);
  }

  if (
    blocks[2].innerHTML != "" &&
    blocks[2].innerHTML === blocks[5].innerHTML &&
    blocks[5].innerHTML === blocks[8].innerHTML
  ) {
    setTimeout(() => {
      winner(blocks[2].innerHTML);
    }, 100);
  }

  //   Check Diagonal

  if (
    blocks[0].innerHTML != "" &&
    blocks[0].innerHTML === blocks[4].innerHTML &&
    blocks[4].innerHTML === blocks[8].innerHTML
  ) {
    setTimeout(() => {
      winner(blocks[0].innerHTML);
    }, 100);
  }
  if (
    blocks[2].innerHTML != "" &&
    blocks[2].innerHTML === blocks[4].innerHTML &&
    blocks[4].innerHTML === blocks[6].innerHTML
  ) {
    setTimeout(() => {
      winner(blocks[2].innerHTML);
    }, 100);
  }

  // gpt
  if (Array.from(blocks).every((block) => block.innerHTML !== "")) {
    setTimeout(() => {
      alert("It's a draw!");
      reset();
    }, 100);
  }
}

function winner(win) {
  if (win === "X") {
    xScore++;
    document.getElementById("scoreX").innerHTML = xScore;
    reset();
  } else if (win === "O") {
    oScore++;
    document.getElementById("scoreO").innerHTML = oScore;
    reset();
  } else {
    reset();
  }
}

function reset() {
  blocks.forEach((block) => {
    block.innerHTML = "";
  });
}
