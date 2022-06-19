/* jshint esversion: 6 */

const fontTypes = document.querySelectorAll('.font-types');

fontTypes.forEach(fontType => {
	fontType.addEventListener('click', function (event) {
		const inputField = event.target;
		let defaultText = inputField.innerHTML;
		inputField.textContent = " ";
		document.addEventListener('click', function () {
			const userInput = inputField.textContent;
			if (userInput === defaultText || userInput === " ")
			{
				inputField.innerHTML = defaultText;
			}
		});
	});
	});
