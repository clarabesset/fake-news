var score = 0;

axios
  .get("fakenewsdb.json")
  .then(res => {
    var newsEng = [];
    var turn = 0;

    nextGame();
    function nextGame() {
      document.getElementById("turnDiv").innerHTML = `TURN ${turn}/12`;
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
        if (newsEng[randomIndex].fakeornot === false) {
          score++;
          document.getElementById("scoreDiv").innerHTML = `SCORE : ${score}`;
          document.getElementById("test").classList.add("green");
          document.getElementById("test").classList.remove("red");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "That is true...".italics() +
            "</a>";
        } else {
          document.getElementById("test").classList.add("red");
          document.getElementById("test").classList.remove("green");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Nah that's fake mate".italics() +
            "</a>";
        }
        document.getElementById("turnDiv").innerHTML = `TURN ${turn}/12`;
      }

      function checkFake() {
        turn++;
        if (newsEng[randomIndex].fakeornot === true) {
          score++;
          document.getElementById("test").classList.add("green");
          document.getElementById("test").classList.remove("red");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Indeed that's super fake".italics() +
            "</a>";
        } else {
          document.getElementById("test").classList.add("red");
          document.getElementById("test").classList.remove("green");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "I'm so sorry that's true".italics() +
            "</a>";
        }
        document.getElementById("turnDiv").innerHTML = `TURN ${turn}/12`;
      }

      document.getElementById("turnDiv").innerHTML = `TURN ${turn}/12`;
      if (turn > 11) {
        goEnd();
      }

      var realButton = document.getElementById("realbutton");
      realButton.onclick = checkTrue;
      var fakeButton = document.getElementById("fakebutton");
      fakeButton.onclick = checkFake;
    }

    var nextButton = document.getElementById("next");
    nextButton.onclick = nextGame;

    function goEnd() {
      localStorage.setItem("score", score);
      window.location.href = "endgame.html";
    }
  })

  .catch(err => {
    console.log(err);
  });

document.getElementById("scoreDiv").innerHTML = `SCORE : ${score}`;
