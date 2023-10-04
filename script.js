var dictionary = {};

fetch('https://raw.githubusercontent.com/moritzvitt/moritzvitt.github.io/main/stories.json')
  .then(response => response.json())
  .then(data => {
    // Now 'data' contains the JSON data from the external file
    dictionary = data.translations;

    // You can safely use 'dictionary' here or call a function to process it
    initializeDictionary(dictionary);
  })
  .catch(error => console.error('Error fetching JSON:', error));

function initializeDictionary(dictionary) {
  const textContainer = document.getElementById('text-container');

  // Create an array to store clicked words
  const clickedWords = [];

  for (const key in dictionary) {
    const tooltipContainer = document.createElement('span');
    tooltipContainer.classList.add('tooltip-container');

    // Create a span for the word
    const wordSpan = document.createElement('span');
    wordSpan.textContent = dictionary[key][0] + ' ';
    wordSpan.classList.add('word');

    // Create a span for the tooltip text
    const tooltipTextSpan = document.createElement('span');
    tooltipTextSpan.innerHTML = dictionary[key].slice(1).join('<br>');
    tooltipTextSpan.classList.add('tooltiptext');

    // Append the word and tooltip text spans to the tooltip container
    tooltipContainer.appendChild(wordSpan);
    tooltipContainer.appendChild(tooltipTextSpan);

    textContainer.appendChild(tooltipContainer);

    // Add a click event listener to toggle the 'active' class
    tooltipContainer.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click event from propagating to the parent
      tooltipContainer.classList.toggle('active');

      // Check if the word is already in the array
      const index = clickedWords.indexOf(key);

      // If it's not in the array, add it
      if (index === -1) {
        clickedWords.push(key);
      } else { // If it's already in the array, remove it
        clickedWords.splice(index, 1);
      }

      // Display the clicked words in the console
      console.log(clickedWords);
    });

    // Add a mouseout event listener to hide the tooltip when hovering away
    tooltipContainer.addEventListener('mouseout', function () {
      tooltipContainer.classList.remove('active');
    });
  }

  // Create a download clicked words button
  const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download clicked words';
  document.body.appendChild(downloadButton);

  // Add an event listener to the download button
  downloadButton.addEventListener('click', function () {
    // Create a blob object containing the clicked words
    const blob = new Blob([clickedWords.map(key => dictionary[key].join('\n')).join('\n')], { type: 'text/plain' });

    // Create a download link element
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'clicked_words.txt';

    // Append the download link element to the document body
    document.body.appendChild(downloadLink);

    // Click the download link element
    downloadLink.click();
  });
}

