
$(document).ready(function() {
    // variables.....
    var baslangicnoktasi = 0;
    var randomNumber = randomNumcreate();
    var wins = 0;
    var losses = 0;
    var taslar;
    // generating random numbers
    function randomNumCrystals() {
      return {
        tas1: {points: Math.floor(Math.random() * 12) + 1, imageUrl: "assets/images/tas1.png"},
        tas2: {points: Math.floor(Math.random() * 12) + 1, imageUrl: "assets/images/tas2.png"},
        tas3: {points: Math.floor(Math.random() * 12) + 1, imageUrl: "assets/images/tas3.png"},
        tas4: {points: Math.floor(Math.random() * 12) + 1, imageUrl: "assets/images/tas4.png"} };}
  
    // create a random number between 19 and 120
    function randomNumcreate() {return Math.floor(Math.random() * 102) + 19;}
  
    // reset the game
    function setGame() {baslangicnoktasi = 0; taslar = randomNumCrystals(); randomNumber = randomNumcreate(); $("#randomsec").text(randomNumber);}
  
    // update the page
    function yenidenbasla(userwon) {$("#winsec").empty();
  
      // If won
      if (userwon === true) { $("#winsec").append($("<p>").text("You won!!")); setGame(); MatchingNumbergoster();
      }
      // If lost
      else if (userwon === false) { $("#winsec").append($("<p>").text("You lost!!")); setGame(); MatchingNumbergoster(); }

      // win vs loss display
      var wSpan = $("<span>").text(wins);
      var lSpan = $("<span>").text(losses);
  
      var pWins = $("<p>").text("Wins: ");
      var pLosses = $("<p>").text("Losses: ");
  
      pWins.append(wSpan);
      pLosses.append(lSpan);
  
      $("#winsec").append(pWins);
      $("#winsec").append(pLosses);
    }
  
    // taslar gelsin
    function taslarigoster() {
      for (var key in taslar) {
        var crystalDiv = $("<div class='tastusu' data-name='" + key + "'>");
        var crystalImg = $("<img alt='image' class='tasresmi'>").attr("src", taslar[key].imageUrl);
        crystalDiv.append(crystalImg);
        $("#crystalsec").append(crystalDiv);
      }
    }
  
    // update 
    function updateMatchingNumber(crystal) {
      baslangicnoktasi += taslar[crystal.attr("data-name")].points;
    }
  
    function MatchingNumbergoster() {
      var scoreNumDiv = $("<div id='scorenumarasi'>").text(baslangicnoktasi);
      $("#scores").html();
      $("#scores").html(scoreNumDiv);
    }
  
    // rerun the game
    setGame();
    yenidenbasla();
    taslarigoster();
    MatchingNumbergoster();
  
    // on.click event for crystals
    $(".tastusu").on("click", function(event) {
      updateMatchingNumber($(this));
      MatchingNumbergoster();
  
      if (baslangicnoktasi === randomNumber) {
        wins++;
        setGame();
        yenidenbasla(true);
      }
      else if (baslangicnoktasi > randomNumber) {
        losses++;
        setGame();
        yenidenbasla(false);
      }
    });
  
  });
  