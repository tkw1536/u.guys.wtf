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
	private startCode: number;
	private endCode: number;
	private replacementCodes: number[];

	constructor(startLetter: string, endLetter: string, startReplacement: string) {
		this.startCode = startLetter.charCodeAt(0);
		this.endCode = endLetter.charCodeAt(0);
		this.replacementCodes = startReplacement.split('').map(c => c.charCodeAt(0));
	}

	/** checks if this transform matches a particular charcode */
	public matches(charCode: number): boolean {
		return charCode >= this.startCode && charCode <= this.endCode;
	}

	public transform(charCode: number, buffer: number[]) {
		buffer.push(...this.replacementCodes);
		buffer[buffer.length-1] += charCode - this.startCode;
	}

	static boldenTransforms: CharTransform[];
	static italicizeTransform: CharTransform[];
	static boldenAndItalicizeTransform: CharTransform[];
	static monospaceTransform: CharTransform[];
	static scriptizeTransform: CharTransform[]; 
	static subscriptTransform: CharTransform[];
	static superscriptTransform: CharTransform[];
	static upsidedownTransform: CharTransform[];
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

CharTransform.upsidedownTransform = [
	new SingleCharTransform("a","ɐ"),
new SingleCharTransform("b","q"),
new SingleCharTransform("c","ɔ"),
new SingleCharTransform("d","p"),
new SingleCharTransform("e","ǝ"),
new SingleCharTransform("f","ɟ"),
new SingleCharTransform("g","ƃ"),
new SingleCharTransform("h","ɥ"),
new SingleCharTransform("i","ᴉ"),
new SingleCharTransform("j","ɾ"),
new SingleCharTransform("k","ʞ"),
new SingleCharTransform("l","l"),
new SingleCharTransform("m","ɯ"),
new SingleCharTransform("n","u"),
new SingleCharTransform("o","o"),
new SingleCharTransform("p","d"),
new SingleCharTransform("q","b"),
new SingleCharTransform("r","ɹ"),
new SingleCharTransform("s","s"),
new SingleCharTransform("t","ʇ"),
new SingleCharTransform("u","n"),
new SingleCharTransform("v","ʌ"),
new SingleCharTransform("w","ʍ"),
new SingleCharTransform("x","x"),
new SingleCharTransform("y","ʎ"),
new SingleCharTransform("z","z"),
new SingleCharTransform("A","∀"),
new SingleCharTransform("B","B"),
new SingleCharTransform("C","Ɔ"),
new SingleCharTransform("D","D"),
new SingleCharTransform("E","Ǝ"),
new SingleCharTransform("F","Ⅎ"),
new SingleCharTransform("G","פ"),
new SingleCharTransform("H","H"),
new SingleCharTransform("I","I"),
new SingleCharTransform("J","ſ"),
new SingleCharTransform("K","K"),
new SingleCharTransform("L","˥"),
new SingleCharTransform("M","W"),
new SingleCharTransform("N","N"),
new SingleCharTransform("O","O"),
new SingleCharTransform("P","Ԁ"),
new SingleCharTransform("Q","Q"),
new SingleCharTransform("R","R"),
new SingleCharTransform("S","S"),
new SingleCharTransform("T","┴"),
new SingleCharTransform("U","∩"),
new SingleCharTransform("V","Λ"),
new SingleCharTransform("W","M"),
new SingleCharTransform("X","X"),
new SingleCharTransform("Y","⅄"),
new SingleCharTransform("Z","Z"),
new SingleCharTransform("0","0"),
new SingleCharTransform("1","Ɩ"),
new SingleCharTransform("2","ᄅ"),
new SingleCharTransform("3","Ɛ"),
new SingleCharTransform("4","ㄣ"),
new SingleCharTransform("5","ϛ"),
new SingleCharTransform("6","9"),
new SingleCharTransform("7","ㄥ"),
new SingleCharTransform("8","8"),
new SingleCharTransform("9","6"),
new SingleCharTransform(",","'"),
new SingleCharTransform(".","˙"),
new SingleCharTransform("?","¿"),
new SingleCharTransform("!","¡"),
new SingleCharTransform("\"",",,"),
new SingleCharTransform("'",","),
new SingleCharTransform("`",","),
new SingleCharTransform("(",")"),
new SingleCharTransform(")","("),
new SingleCharTransform("[","]"),
new SingleCharTransform("]","["),
new SingleCharTransform("{","}"),
new SingleCharTransform("}","{"),
new SingleCharTransform("<",">"),
new SingleCharTransform(">","<"),
new SingleCharTransform("&","⅋"),
new SingleCharTransform("_","‾"),
]

/** makes a transform function from a list of transformers */
function transformator(transforms: CharTransform[]): (text: string) => string {
	return function transform(text: string): string {
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
export const upsidedown = (() => {
	const t = transformator(CharTransform.upsidedownTransform)
	return (x: string) => {
		return t(x.split("").reverse().join(""))
	}
})()