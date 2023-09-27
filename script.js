const dictionary = {
    in: 'In',
    a: 'einem',
    lush: 'üppigen',
    prehistoric: 'prähistorischen',
    valley: 'Tal',
};

const textContainer = document.getElementById('text-container');

for (const key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
        const divKey = document.createElement('div');
        divKey.textContent = key;
        
        const divValue = document.createElement('div');
        divValue.textContent = dictionary[key];
        
        textContainer.appendChild(divKey);
        textContainer.appendChild(divValue);
    }
}
