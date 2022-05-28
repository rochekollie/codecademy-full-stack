/* jshint esversion: 6 */

const fontTypes = document.querySelectorAll('.font-types');

fontTypes.forEach(fontType => {
	fontType.addEventListener('click', function () {
		const text = this.innerHTMl;
		this.textContent = " ";
		document.addEventListener('click', function () {
			if (this.textContent === text || this.textContent === " ")
			{
				this.innerHTML = text;
			}
		});
	});
	});
