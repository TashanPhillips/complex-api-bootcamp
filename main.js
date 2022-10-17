document.querySelector("#btn").addEventListener("click", getPlayer);
function getPlayer() {
  const playerId = document.querySelector("input").value;
  fetch(` https://www.balldontlie.io/api/v1/players/${playerId}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let playerName = `${data.first_name} ${data.last_name}`;
      document.querySelector('.name').innerText = playerName;
      document.querySelector('.teamName').innerText = data.team.full_name;
      document.querySelector('.weight').innerText = `weight: ${data.weight_pounds}`;
      document.querySelector('.height').innerText =`hieght: ${data.height_feet}'${data.height_inches}`;
      document.querySelector('.position').innerText = `position: ${data.position}`;

      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=1W7u6cWXd3FdQNf4drDkNP4qNUAn5Pzh&q=${playerName}&limit=25&offset=0&rating=g&lang=en`
      )
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          //data.data[0].images.downsized_medium.url
          console.log( data.data[0].images.downsized_medium.url)
          for(let i = 0; i <= 4; i++){
            
            let img = document.createElement('img')
            img.src =  data.data[i].images.downsized_medium.url
            document.querySelector('.images').appendChild(img)
            
          }
        })
        .catch((gifErr) => {
          console.log(`error ${gifErr}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
