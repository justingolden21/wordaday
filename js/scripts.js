const STORY = 
`In the darkness,
my reflection
dreams of a symphony
in the garden.

A lonely river sits
before a loud, lonely
blue waterfall.

Under moonlight
a lonely piano
sits silently.

From a lonely red rose
falls a lonely petal
falls silent on
the piano

A petal is a blood drop
in the moonlight
darkness speckled in red.

A silent symphony
surrounds darkness.
in the darkness
sits a lonely wrong note.

That same red rose
drops another petal
drops over the river.
Carried away
by the lonely
loud blue moon waterfall.

Separated
from the red rose river
surrounded by screaming
lonely silence.

Speckled ink like
lone black piano keys
silent or wrong.

Looking over bloodstained
red river reflections
I cannot see
my reflection

separated from my

Red reflection
drops deep into darkness
speckled tears on my note.

If you are not
my reflection
then you have the wrong note.
`;


function dayOfYear() {
	// https://stackoverflow.com/a/8619946/4907950
	let now = new Date();
	let start = new Date(now.getFullYear(), 0, 0);
	let diff = (now - start) + ( (start.getTimezoneOffset() - now.getTimezoneOffset() ) * 60 * 1000);
	let oneDay = 1000 * 60 * 60 * 24;
	let day = Math.floor(diff / oneDay);
	return day;
}

window.onload = () => {
	if( (new Date() ).getFullYear()=='2020') {
		document.getElementById('story').innerHTML = 
		`Starting Jan 1st, 2021
		<br>
		<a
			class="text-white hover:text-yellow-500 underline hover:no-underline"
			href="https://www.google.com/search?q=remind+me+jan+1+2021+to+check+a+story+a+day" target="_blank">
			Remind me
		</a>`;
		return;
	}

	// -------- --------

	let day = dayOfYear();
	let words = STORY.replaceAll('\n\n','<br><br> ').replaceAll('\n','<br> ').split(' ');

	let currentStory = '';
	let size = Math.min(words.length, day-1);
	for(let i=0; i<size; i++) {
		currentStory += words[i] + ' ';
	}
	if(words.length >= day-1) {
		currentStory += `<span class="text-yellow-500">${words[day-1]}</span>`;
	}
	document.getElementById('story').innerHTML = currentStory;
	document.getElementById('day').innerHTML = day;
};
