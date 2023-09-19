const dogImageContainer = document.getElementById("dogImageContainer");
const dogImage = document.getElementById("dogImage");
const getRandomDogButton = document.getElementById("getRandomDog");

const apiUrl = "https://dog.ceo/api/breeds/image/random";

getRandomDogButton.addEventListener("click", fetchRandomDogImage);

async function fetchRandomDogImage() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const imageUrl = data.message;

        // Update the image source
        dogImage.src = imageUrl;
       

        // Display the image container
        dogImageContainer.style.display = "block";
    } catch (error) {
        console.error("Error fetching random dog image:", error);
    }
}

// Initial load: Get a random dog image
fetchRandomDogImage();











