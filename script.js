

const story = "In a lush prehistoric valley, a curious young dinosaur named Dara ventured away from her herd. She discovered a hidden glen filled with colorful flowers and sparkling streams. Dara's heart danced with joy as she explored the magical place. Suddenly, a gentle giant, an old Brachiosaurus named Bert, appeared. He shared tales of ancient times and the importance of family. Grateful, Dara returned to her herd, cherishing the wisdom she had gained, and forever valuing the bond with her family.";

// Split the story into words
const storyWords = story.split(' ');

// Define the German translations in the same order
const translation = "In einem üppigen prähistorischen Tal, eine neugierige junge Dinosaurier namens Dara wagte weg von ihrer Herde. Sie entdeckte eine versteckte Schlucht, gefüllt mit bunten Blumen und funkelnden Bächen. Daras Herz tanzte vor Freude, als sie den magischen Ort erforschte. Plötzlich, ein sanfter Riese, ein alter Brachiosaurus namens Bert, teilte Geschichten von alten Zeiten und die Bedeutung von Familie. Dankbar kehrte Dara zu ihrer Herde zurück, schätzend die Weisheit, die sie gewonnen hatte, und für immer die Bindung zu ihrer Familie schätzend.";

translationWords = translation.split(' ');
console.log(translationWords);
// Check that the translation array has the same length as the wordList array
if (storyWords.length !== translationWords.length) {
  console.error('Error: The wordList and translation arrays must have the same length.');
}

// Create a new string with words wrapped in <span> tags
const htmlString = storyWords.map((word, index) => `<span class="tooltip">${word} <span class="tooltiptext">${translationWords[index]}</span></span>`).join(' ');


// const wordList = ['Hello', 'world'];
// const translation = ['Hola', 'mundo'];

// // Check that the translation array has the same length as the wordList array
// if (wordList.length !== translation.length) {
//   console.error('Error: The wordList and translation arrays must have the same length.');
// }

// // Create a new string with words wrapped in <span> tags
// const htmlString = wordList.map((word, index) => `<span class="tooltip">${word} <span class="tooltiptext">${translation[index]}</span></span>`).join(' ');

// Replace the content of the "text-container" div with the generated HTML string
document.getElementById('text-container').innerHTML = htmlString;


//############################################################################################################


//chatGPT 

const APIKEY = process.env.YOUR_API_KEY;
console.log(APIKEY);

const apiKey = 'apiey'; // Replace with your actual API key
const endpoint = 'https://api.openai.com/v1/engines/davinci/completions'; // The endpoint for ChatGPT

// Function to send a prompt and get a response
async function getChatResponse(prompt) {
    try {
        const response = await axios.post(endpoint, {
            prompt: prompt,
            max_tokens: 50, // You can adjust the token limit as needed
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        // Extract and display the response
        const chatResponse = response.data.choices[0].text;
        console.log(chatResponse);

        // You can use chatResponse in your webpage as needed
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage
const prompt = 'Translate the following English text to French: "Hello, world!"';
getChatResponse(prompt);

