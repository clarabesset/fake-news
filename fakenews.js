var score = 0;
var turn = 0;

axios
  .get("fakenewsdb.json")
  .then(res => {
    var newsEng = [];
    function nextGame() {
      res.data.filter(oneData => {
        if (oneData.language == "eng") {
          newsEng.push(oneData);
        }
      });
      var randomIndex = Math.floor(Math.random() * newsEng.length);
      var randomTitle = newsEng[randomIndex].headline;
      document.getElementById("test").innerHTML = ` " ${randomTitle} " `;
      var randomLink = newsEng[randomIndex].link;
      function checkTrue() {
        turn++;
        if (turn > 11) goEnd();
        if (newsEng[randomIndex].fakeornot === false) {
          score++;
          document.getElementById("scoreDiv").innerHTML = `SCORE : ${score}`;
          document.getElementById("test").classList.add("green");
          document.getElementById("test").classList.remove("red");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Yes that's a real thing".italics() +
            "</a>";
        } else {
          document.getElementById("test").classList.add("red");
          document.getElementById("test").classList.remove("green");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Nope, that was fake, are you kidding".italics() +
            "</a>";
        }
        document.getElementById("turnDiv").innerHTML = `${turn}/12`;
      }

      function checkFake() {
        turn++;
        if (turn > 11) goEnd();
        if (newsEng[randomIndex].fakeornot === true) {
          score++;
          document.getElementById("test").classList.add("green");
          document.getElementById("test").classList.remove("red");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Yes that's super fake".italics() +
            "</a>";
          document.getElementById("scoreDiv").innerHTML = `SCORE : ${score}`;
        } else {
          document.getElementById("test").classList.add("red");
          document.getElementById("test").classList.remove("green");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Nah that's real unfortunately".italics() +
            "</a>";
        }
        document.getElementById("turnDiv").innerHTML = `${turn}/12`;
      }

      var realButton = document.getElementById("realbutton");
      realButton.onclick = checkTrue;
      var fakeButton = document.getElementById("fakebutton");
      fakeButton.onclick = checkFake;
      var nextButton = document.getElementById("next");
      nextButton.onclick = nextGame;
    }

    function goEnd() {
      setTimeout(() => {
        localStorage.setItem("score", score);
        window.location.href = "endgame.html";
      }, 3000);
    }

    if (turn > 11) {
      goEnd;
    } else {
      nextGame();
    }
  })

  .catch(err => {
    console.log(err);
  });

document.getElementById("scoreDiv").innerHTML = `SCORE : ${score}`;
document.getElementById("turnDiv").innerHTML = `${turn}/12`;
