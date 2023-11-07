const unicodeAwareSplit = function(text) {
	// javascript doesn't handle surrogate pairs properly so we have to get around it this way
	let _arr = [];
	for (const _c of text) {
		_arr.push(_c);
	}
	return _arr;
}

/* PseudoFont: Unicode Font Parser & Converter */
class PseudoFont {
	constructor(fontName, fontLower, fontUpper, fontDigits) {
		this.fontName = fontName;
		
		// splitting if not already an array, otherwise JavaScript won't handle the characters properly.
		this.fontLower = Array.isArray(fontLower) ? fontLower : unicodeAwareSplit(fontLower);
		this.fontUpper = Array.isArray(fontUpper) ? fontUpper : unicodeAwareSplit(fontUpper);
		this.fontDigits = Array.isArray(fontDigits) ? fontDigits : unicodeAwareSplit(fontDigits);
		
		this.referenceLower = "abcdefghijklmnopqrstuvwxyz";
		this.referenceUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		this.referenceDigits = "0123456789";

		// experimental means either:
		// 		- the font is incomplete.
		//		- the font is unsupported on several platforms.
		this.experimental = false;
	}

	setExperimental(state) {
		this.experimental = state;
	}
	
	convert(rawText) {
		let _converted = "";
		for (const _char of rawText) {
			if (this.referenceLower.includes(_char)) {
				// if character is lowercase
				_converted += this.fontLower[this.referenceLower.indexOf(_char)];
			} else if (this.referenceUpper.includes(_char)) {
				// if character is uppercase
				_converted += this.fontUpper[this.referenceUpper.indexOf(_char)];
			} else if (this.referenceDigits.includes(_char)) {
				// if character is digit
				_converted += this.fontDigits[this.referenceDigits.indexOf(_char)];
			} else {
				_converted += _char;
			}
		}
		return _converted;
	}
}

module.exports = PseudoFont;