document.querySelector(".get-quotes").addEventListener("click", getJokes);

function getJokes(e) {
  // below gives you the number value from the input - also trying to bit a bit more specific
  const name = document.querySelector('input[type="text"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`,
    true
  );

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      // let output = "";
      let message = "";
      message += `<li>${response.message}</li>`;
      console.log(message);
      document.querySelector(".quote-container").innerHTML = message;
    }
  };

  xhr.send();
  e.preventDefault(e);
}
