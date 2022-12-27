const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area");
console.log(area);

const div = document.querySelector(".stat>div");
console.log(div);

const hello = document.querySelector(".hello");
console.log(hello);

const buttons = document.querySelectorAll("button");
console.log(buttons);

const divRating = document.querySelectorAll("div.rating-display");
console.log(divRating);

for (let element of divRating.values()) {
    console.log(element);
}

for (let i = 0; i < divRating.length; i++) {
    console.log(divRating[i]);
}

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
  }

  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
  
    desc.innerHTML = content;
  }

  const ratings = document.querySelectorAll(".rating-display .value");

  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    console.log(ratingValue);
  }

  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
      }
  }

  

  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;
  newElement.classList.add("header-statement");

  const header = document.querySelector("header");
header.appendChild(newElement);