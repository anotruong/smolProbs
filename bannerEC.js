// Bannerizer Bonus Problem

// Explicit:
//     Wrap word wrapping messages that are to long to fit;
//     Have them start part of the sentence on a new line.

// Implicit:
//     Max length of a sentence is set to 51
//     Box width is 56, box must have two characters on each side
    // the word has to stay in tact, so if it's too long for the box
//	Function does not need to recongize whole foods, but personally
		//I'd like it if the function would recongize whitespace in the
		//beginning of a new line.

// Algorithm:
//     start: String
//     methods: .slice(),
//     let counter = 0;
//     let dash = '-';
//     let whtSpc = ' ';
//     let textArea = '';
//     console.log(`+-${"dash".repeat(Math.min(str.length, 52))}-+`);
//     console.log(`| ${whtSpc.repeat(Math.min(str.length, 52))} |`);

//     console.log(`+-${whtSpc.repeat(Math.min(str.length, 52))}-+`)
//     console.log(`+-${dash.repeat(Math.min(str.length, 52))}-+`);
//     return: multiple strings

//     the dashes should str.length max 51
//         use dash.repeat((Math.min(str.length, 51));

//     how do I measure of string that how to break?
//     once length of a string gets to 51
//         slice that string
//     each length is divisible by 51
    // The neatest way might be to make multiple functions

function wrapInBox(str) {
    let charLimit = 51;
    let counter = 0;
    let startIdx = 0;
    let textArea = '';

    do {
        if (str[startIdx] === ' ') {
         startIdx += 1;
         charLimit += 1;
        };

        textArea += `| ${str.slice(startIdx, charLimit)} |\n`;

        startIdx = charLimit;
        charLimit *= 2;
        counter += 51;

    } while (counter < str.length);

    if (textArea.length > 56) {
        let rmnder = 56 - textArea.length % 56;
        textArea = textArea.slice(0, textArea.length - 2) + ' '.repeat(rmnder) + '|';
    } else {
        textArea = textArea.slice(0, textArea.length - 1);
    };

    console.log(`+${'-'.repeat(Math.min(51, str.length) + 2)}+`);
    console.log(`|${' '.repeat(Math.min(51, str.length) + 2)}|`);
    console.log(textArea);
    console.log(`|${' '.repeat(Math.min(51, str.length) + 2)}|`);
    console.log(`+${'-'.repeat(Math.min(51, str.length) + 2)}+`);
};

// Test:
wrapInBox('Should we have let people die, all in the name of the law? Isn’t it a hero’s job to save people?” – Shoto Todoroki')
wrapInBox('My motivation might seem trivial compared to yours, but I can’t lose, either.  I have to live up to the hopes of those who supported me.')
wrapInBox('To boldly go where no one has gone before.');
wrapInBox('');
wrapInBox('Today\'s the day')

// +-----------------------------------------------------+
// |                                                     |
// | My motivation might seem trivial compared to yours, |
// | but I can’t lose, either.  I have to live up to the |
// | hopes of those who supported me. – Izuku Midoriya   |
// |                                                     |
// +-----------------------------------------------------+
// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
