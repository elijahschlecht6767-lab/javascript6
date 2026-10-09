const vowels=["A", "E", "I", "O", "U",  "Y",  "a",  "e",  "i",  "o",  "u",  "y"];

const words=[
    "Apple", "Banana", "orange", "Grape", "Elephant",
    "umbrella", "Tiger", "Ice", "computer", "Octopus"
];

const vowelWords=words.filter(vowelSearch);

console.log(vowelWords);

function vowelSearch(element){
    return vowels.includes(element[0]); //is technically case sensitive, but doesn't seem that way when ran since both uppercase and lowercase vowels are included in the comparison
}
