function agent_filter(value) {
   let input = value.innerHTML;
   let card = document.getElementById('agents');
   let cardcontainer = card.getElementsByClassName('contact');
   for (let i = 0; i < cardcontainer.length; i++) {
      let agent = cardcontainer[i].querySelector("#name");
      if (agent.innerHTML.toUpperCase().indexOf(input) > -1 || input=='ALL') {
         cardcontainer[i].style.display = "";
      }
      else {
         cardcontainer[i].style.display = "none";
      }
   }
}

function search() {
   let input = document.getElementById('myInput').value.toUpperCase();
   let card = document.getElementById('agents');
   let cardcontainer = card.getElementsByClassName('contact');
   for (let i = 0; i < cardcontainer.length; i++) {
      let agent = cardcontainer[i].querySelector("#name");
      if (agent.innerHTML.toUpperCase().indexOf(input) > -1) {
         cardcontainer[i].style.display = "";
      }
      else {
         cardcontainer[i].style.display = "none";
      }
   }
}
