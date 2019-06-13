let thisScore = localStorage.getItem("score");
document.querySelector("#scoreDiv").innerHTML = `SCORE : ${thisScore}`;

window.onload = function() {
  document.getElementById("my_audio").play();
};

var gifs = [
  {
    id: "0",
    name: "lowiq",
    link: "https://media.giphy.com/media/yjJS8xEdRLoAM/giphy.gif"
  },
  {
    id: "1",
    name: "crimescene",
    link: "https://media.giphy.com/media/D0GYKaNtxZNeg/giphy.gif"
  },
  {
    id: "2",
    name: "swiper",
    link: "https://media.giphy.com/media/quj5jGCrP6new/giphy.gif"
  },
  {
    id: "3",
    name: "buffy",
    link: "https://media.giphy.com/media/gRVbPSHWdhDUc/giphy.gif"
  },
  {
    id: "4",
    name: "truedec",
    link: "https://media.giphy.com/media/poC8TZpAocrKg/giphy.gif"
  },
  {
    id: "5",
    name: "doresearch",
    link: "https://media.giphy.com/media/RaLIOPl8MLyWA/giphy.gif"
  },
  {
    id: "6",
    name: "poirotmedite",
    link: "https://media.giphy.com/media/1ihTdSr2y1jJS/giphy.gif"
  },
  {
    id: "7",
    name: "elba",
    link: "https://media.giphy.com/media/up35U4bgbXMYw/giphy.gif"
  },
  {
    id: "8",
    name: "veronica",
    link: "https://media.giphy.com/media/dk3TmFZpn6pUI/giphy.gif"
  },
  {
    id: "9",
    name: "pikaloupe",
    link: "https://media.giphy.com/media/42wQXwITfQbDGKqUP7/giphy.gif"
  },
  {
    id: "10",
    name: "sherlocksmile",
    link: "https://media.giphy.com/media/Pi8S9O3TWCN7W/giphy.gif"
  },
  {
    id: "11",
    name: "watson",
    link: "https://media.giphy.com/media/m7wGFA2vRVUsM/giphy.gif"
  },
  {
    id: "12",
    name: "pikadance",
    link: "https://media.giphy.com/media/Y3e3gnofVUd4RnXKDz/giphy.gif"
  }
];

document.querySelector(".gif").innerHTML = `<img src="${
  gifs[thisScore].link
}"/>`;
