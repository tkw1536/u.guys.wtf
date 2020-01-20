/** @license
 * The code in this file has been adapated from https://github.com/lovasoa/html2unicode/blob/master/src/index.js
 * which is licensed as follows:
 * 
 * Copyright 2020 Ophir LOJKINE
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

class CharTransform {
	constructor(startLetter, endLetter, startReplacement) {
		this.startCode = startLetter.charCodeAt(0);
		this.endCode = endLetter.charCodeAt(0);
		this.replacementCodes = startReplacement.split('').map(c => c.charCodeAt(0));
	}

	matches(charCode) {
		return charCode >= this.startCode && charCode <= this.endCode;
	}

	transform(charCode, buffer) {
		buffer.push(...this.replacementCodes);
		buffer[buffer.length-1] += charCode - this.startCode;
	}
}

class SmallLetterTransform extends CharTransform {
	constructor(startReplacement) {
		super('a', 'z', startReplacement);
	}
}

class CapitalLetterTransform extends CharTransform {
	constructor(startReplacement) {
		super('A', 'Z', startReplacement);
	}
}

class DigitTransform extends CharTransform {
	constructor(startReplacement) {
		super('0', '9', startReplacement);
	}
}

class SingleCharTransform extends CharTransform {
	constructor(origin, transformed) {
		super(origin, origin, transformed);
	}
}

CharTransform.boldenTransforms = [
	new CapitalLetterTransform('𝗔'),
	new SmallLetterTransform('𝗮'),
	new DigitTransform('𝟬'),
];

CharTransform.italicizeTransform = [
	new CapitalLetterTransform('𝘈'),
	new SmallLetterTransform('𝘢'),
];

CharTransform.boldenAndItalicizeTransform = [
	new CapitalLetterTransform('𝘼'),
	new SmallLetterTransform('𝙖'),
	new DigitTransform('𝟬'), // There are no bold italics digits, use simple bold
];

CharTransform.monospaceTransform = [
	new CapitalLetterTransform('𝙰'),
	new SmallLetterTransform('𝚊'),
	new DigitTransform('𝟶'),
];

CharTransform.scriptizeTransform = [
	new CapitalLetterTransform('𝓐'),
	new SmallLetterTransform('𝓪'),
];

CharTransform.subscriptTransform = [
	new DigitTransform('₀'),
	new SingleCharTransform('a', 'ₐ'),
	new SingleCharTransform('e', 'ₑ'),
	new SingleCharTransform('h', 'ₕ'),
	new SingleCharTransform('i', 'ᵢ'),
	new SingleCharTransform('j', 'ⱼ'),
	new CharTransform('k', 'n', 'ₖ'),
	new SingleCharTransform('o', 'ₒ'),
	new SingleCharTransform('p', 'ₚ'),
	new SingleCharTransform('r', 'ᵣ'),
	new CharTransform('s', 't', 'ₛ'),
	new SingleCharTransform('u', 'ᵤ'),
	new SingleCharTransform('v', 'ᵥ'),
	new SingleCharTransform('x', 'ₓ'),
];

CharTransform.superscriptTransform = [
	new SingleCharTransform('1', '¹'),
	new CharTransform('2', '3', '²'),
	new DigitTransform('⁰'),
	new CharTransform('(', ')', '⁽'),
	new SingleCharTransform('+', '⁺'),
	new SingleCharTransform('-', '⁻'),
	new SingleCharTransform('=', '⁼'),
	new SingleCharTransform('n', 'ⁿ'),
	new SingleCharTransform('i', 'ⁱ'),
];

function transformator(transforms) {
	return function transform(text) {
		let codesBuffer = [];
		for(let i=0; i<text.length; i++) {
			let code = text.charCodeAt(i);
			const transform = transforms.find(t => t.matches(code));
			if (transform) transform.transform(code, codesBuffer);
			else codesBuffer.push(code);
		}
		return String.fromCharCode(...codesBuffer);
	};
}

export const bolden = transformator(CharTransform.boldenTransforms);
export const italicize = transformator(CharTransform.italicizeTransform);
export const boldenAndItalicize = transformator(CharTransform.boldenAndItalicizeTransform);
export const monospace = transformator(CharTransform.monospaceTransform);
export const scriptize = transformator(CharTransform.scriptizeTransform);
export const subscript = transformator(CharTransform.subscriptTransform);
export const superscript = transformator(CharTransform.superscriptTransform);