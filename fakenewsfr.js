var score = 0;

axios
  .get("fakenewsdb.json")
  .then(res => {
    var newsFr = [];
    var turn = 0;

    nextGame();
    function nextGame() {
      document.getElementById("turnDiv").innerHTML = `${turn}/12`;
      res.data.filter(oneData => {
        if (oneData.language == "fr") {
          newsFr.push(oneData);
        }
      });
      var randomIndex = Math.floor(Math.random() * newsFr.length);
      var randomTitle = newsFr[randomIndex].headline;
      document.getElementById("test").innerHTML = ` " ${randomTitle} " `;
      var randomLink = newsFr[randomIndex].link;
      function checkTrue() {
        turn++;
        if (newsFr[randomIndex].fakeornot === false) {
          score++;
          document.getElementById("scoreDiv").innerHTML = `SCORE : ${score}`;
          document.getElementById("test").classList.add("green");
          document.getElementById("test").classList.remove("red");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Eh oui c'est vrai".italics() +
            "</a>";
        } else {
          document.getElementById("test").classList.add("red");
          document.getElementById("test").classList.remove("green");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Non, intox t'es ouf".italics() +
            "</a>";
        }
        document.getElementById("turnDiv").innerHTML = `${turn}/12`;
      }

      function checkFake() {
        turn++;
        if (newsFr[randomIndex].fakeornot === true) {
          score++;
          document.getElementById("scoreDiv").innerHTML = `SCORE : ${score}`;
          document.getElementById("test").classList.add("green");
          document.getElementById("test").classList.remove("red");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "Oui bon gros fake".italics() +
            "</a>";
        } else {
          document.getElementById("test").classList.add("red");
          document.getElementById("test").classList.remove("green");
          document.getElementById("test").innerHTML =
            "<a href='" +
            randomLink +
            "' target= '_blank'>" +
            "C'est vrai déso :(".italics() +
            "</a>";
        }
        document.getElementById("turnDiv").innerHTML = `${turn}/12`;
      }

      document.getElementById("turnDiv").innerHTML = `${turn}/12`;
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
