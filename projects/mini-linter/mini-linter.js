let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

// split string into words and save as storyWords
const storyWords = story.split(' ');

// log how many words there are in this story
console.log(storyWords.length);

// filter unnecessary words and save as betterWords
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

// let the user know how many times they have used these overused words
let count = 0;
betterWords.forEach(word => overusedWords.includes(word) ? count++ : count);

console.log(`You have overused these words ${count} times.`);

// count how many sentences are in the paragraph.
// const sentences = story.split(/[!?.]/); //split into sentences
// console.log(`There are ${sentences.length} sentences in the paragraph.`);
// console.log(sentences);

// count how many sentences are in the paragraph.
const getSentenceCount = (paragraph) => {
	let sentenceCount = 0;
	let sentenceMarks = '.?!';
	for (let char of paragraph)
	{
		if (sentenceMarks.includes(char))
		{
			sentenceCount++;
		}
	}

	return sentenceCount;
}

//Log  word count, sentence count, and each overused word count
function logParaInfo(paragraph) {
	console.log(`Words: ${storyWords.length}`);
	console.log(`Sentences: ${getSentenceCount(paragraph)}`);
	console.log(`Overused Words:`);

	let usedArr = [[], []];
	betterWords.forEach(word => {
		overusedWords.forEach(overused => {
			if (overused === word)
			{
				if (!usedArr[0].includes(overused))
				{
					usedArr[0].push(overused);
					usedArr[1].push(1);
				} else
				{
					let countIndex = usedArr[0].findIndex(element => element === overused);
					usedArr[1][countIndex] += 1;
				}
			}
		});
	});

	//log each overused word
	for (let arr of usedArr)
	{
		console.log(`${arr}`);
	}
}

logParaInfo(story);

// log the betterWords array to the console as a single string.
console.log(betterWords.join(' '));
