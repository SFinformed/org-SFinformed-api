// GLOBALS
const BASE_URL = 'https://data.sfgov.org/resource/r7bn-7v9c.json?zip_code=';

// CACHED DOM ELEMENTS
const form = document.querySelector('.form');
const artsList = document.getElementsByClassName('arts-list');
// Verify DOM elements are correctly selected
console.log(artsList);

// FUNCTIONS
const updateResults = data => {
	// empty the list of any preexisting data first
	artsList.innerHTML = '';
    console.log(data);

	for (let i = 0; i < data.length; i++) {
		const artHTML = `<li>${i + 1}. ${data[i].artist} - ${data[i]
			.display_title}</li>`;
		artsList.innerHTML += artHTML;
	}
};

const handleSubmit = async event => {
	event.preventDefault();
	const zipcode = document.getElementById('#zipcode').value;
	// get the number of results
	const userInput = document.getElementById('#zipcode-search').value;
	const REQUEST_URL = BASE_URL + zipcode + `&$limit=${userInput || 10}`;
	// make the api call with the request url
	try {
		const response = await fetch(REQUEST_URL);
		const data = await response.json();
		updateResults(data);
	} catch (err) {
		console.error(err);
	}
};

// const handleToggle = event => {
// 	event.preventDefault();
// 	if (event.target.tagName === 'BUTTON') {
// 		// use nextElementSibling to grab the sibling HTML element
// 		// use class list toggle to hide/show the element
// 		event.target.nextElementSibling.classList.toggle('hide-response');
// 	}
// };

// EVENT LISTENERS
// form.addEventListener('click', handleSubmit);
// arts-List.addEventListener('click', handleToggle);
