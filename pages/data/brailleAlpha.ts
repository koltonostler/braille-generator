type Data = {
	char: string;
	preConfig: Array<boolean>;
	dotConfig: Array<boolean>;
};

export const brailleAlpha: Array<Data> = [
	/*  ALPHA a-z(lower)  */
	{
		char: 'a',
		preConfig: [],
		dotConfig: [true, false, false, false, false, false],
	},
	{
		char: 'b',
		preConfig: [],
		dotConfig: [true, true, false, false, false, false],
	},
	{
		char: 'c',
		preConfig: [],
		dotConfig: [true, false, false, true, false, false],
	},
	{
		char: 'd',
		preConfig: [],
		dotConfig: [true, false, false, true, true, false],
	},
	{
		char: 'e',
		preConfig: [],
		dotConfig: [true, false, false, false, true, false],
	},
	{
		char: 'f',
		preConfig: [],
		dotConfig: [true, true, false, true, false, false],
	},
	{
		char: 'g',
		preConfig: [],
		dotConfig: [true, true, false, true, true, false],
	},
	{
		char: 'h',
		preConfig: [],
		dotConfig: [true, true, false, false, true, false],
	},
	{
		char: 'i',
		preConfig: [],
		dotConfig: [false, true, false, true, false, false],
	},
	{
		char: 'j',
		preConfig: [],
		dotConfig: [false, true, false, true, true, false],
	},
	{
		char: 'k',
		preConfig: [],
		dotConfig: [true, false, true, false, false, false],
	},
	{
		char: 'l',
		preConfig: [],
		dotConfig: [true, true, true, false, false, false],
	},
	{
		char: 'm',
		preConfig: [],
		dotConfig: [true, false, true, true, false, false],
	},
	{
		char: 'n',
		preConfig: [],
		dotConfig: [true, false, true, true, true, false],
	},
	{
		char: 'o',
		preConfig: [],
		dotConfig: [true, false, true, false, true, false],
	},
	{
		char: 'p',
		preConfig: [],
		dotConfig: [true, true, true, true, false, false],
	},
	{
		char: 'q',
		preConfig: [],
		dotConfig: [true, true, true, true, true, false],
	},
	{
		char: 'r',
		preConfig: [],
		dotConfig: [true, true, true, false, true, false],
	},
	{
		char: 's',
		preConfig: [],
		dotConfig: [false, true, true, true, false, false],
	},
	{
		char: 't',
		preConfig: [],
		dotConfig: [false, true, true, true, true, false],
	},
	{
		char: 'u',
		preConfig: [],
		dotConfig: [true, false, true, false, false, true],
	},
	{
		char: 'v',
		preConfig: [],
		dotConfig: [true, true, true, false, false, true],
	},
	{
		char: 'w',
		preConfig: [],
		dotConfig: [false, true, false, true, true, true],
	},
	{
		char: 'x',
		preConfig: [],
		dotConfig: [true, false, true, true, false, true],
	},
	{
		char: 'y',
		preConfig: [],
		dotConfig: [true, false, true, true, true, true],
	},
	{
		char: 'z',
		preConfig: [],
		dotConfig: [true, false, true, false, true, true],
	},
	/*  ALPHA A-Z(upper)  */
	{
		char: 'A',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, false, false, false, false],
	},
	{
		char: 'B',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, false, false, false, false],
	},
	{
		char: 'C',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, false, true, false, false],
	},
	{
		char: 'D',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, false, true, true, false],
	},
	{
		char: 'E',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, false, false, true, false],
	},
	{
		char: 'F',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, false, true, false, false],
	},
	{
		char: 'G',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, false, true, true, false],
	},
	{
		char: 'H',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, false, false, true, false],
	},
	{
		char: 'I',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [false, true, false, true, false, false],
	},
	{
		char: 'J',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [false, true, false, true, true, false],
	},
	{
		char: 'K',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, true, false, false, false],
	},
	{
		char: 'L',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, true, false, false, false],
	},
	{
		char: 'M',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, true, true, false, false],
	},
	{
		char: 'N',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, true, true, true, false],
	},
	{
		char: 'O',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, true, false, true, false],
	},
	{
		char: 'P',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, true, true, false, false],
	},
	{
		char: 'Q',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, true, true, true, false],
	},
	{
		char: 'R',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, true, false, true, false],
	},
	{
		char: 'S',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [false, true, true, true, false, false],
	},
	{
		char: 'T',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [false, true, true, true, true, false],
	},
	{
		char: 'U',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, true, false, false, true],
	},
	{
		char: 'V',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, true, true, false, false, true],
	},
	{
		char: 'W',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [false, true, false, true, true, true],
	},
	{
		char: 'X',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, true, true, false, true],
	},
	{
		char: 'Y',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, true, true, true, true],
	},
	{
		char: 'Z',
		preConfig: [false, false, false, false, false, true],
		dotConfig: [true, false, true, false, true, true],
	},
	/*  NUMBERS 0-9  */
	// numbers have a number indicator that precedes the number
	{
		char: '1',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [true, false, false, false, false, false],
	},
	{
		char: '2',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [true, true, false, false, false, false],
	},
	{
		char: '3',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [true, false, false, true, false, false],
	},
	{
		char: '4',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [true, false, false, true, true, false],
	},
	{
		char: '5',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [true, false, false, false, true, false],
	},
	{
		char: '6',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [true, true, false, true, false, false],
	},
	{
		char: '7',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [true, true, false, true, true, false],
	},
	{
		char: '8',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [true, true, false, false, true, false],
	},
	{
		char: '9',
		preConfig: [false, true, false, true, false, false],
		dotConfig: [false, true, false, true, false, false],
	},
	{
		char: '0',
		preConfig: [false, false, true, true, true, true],
		dotConfig: [false, true, false, true, true, false],
	},

	/* PUNCTUATION */

	{
		char: ',',
		preConfig: [],
		dotConfig: [false, true, false, false, false, false],
	},
	{
		char: ';',
		preConfig: [],
		dotConfig: [false, true, true, false, false, false],
	},
	{
		char: ':',
		preConfig: [],
		dotConfig: [false, true, false, false, true, false],
	},
	{
		char: 'period',
		preConfig: [],
		dotConfig: [false, true, false, false, true, true],
	},
	{
		char: 'question',
		preConfig: [],
		dotConfig: [false, true, true, false, false, true],
	},
	{
		char: '!',
		preConfig: [],
		dotConfig: [false, true, true, false, true, false],
	},
	{
		char: '$',
		preConfig: [false, false, false, true, false, false],
		dotConfig: [false, true, false, false, true, true],
	},
	{
		char: "'",
		preConfig: [],
		dotConfig: [false, false, true, false, false, false],
	},
	{
		char: '"',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [false, true, false, false, false, false],
	},
	{
		char: '*',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [false, false, true, false, true, false],
	},

	{
		char: '“',
		preConfig: [false, false, false, true, true, false],
		dotConfig: [false, true, true, false, false, true],
	},

	{
		char: '”',
		preConfig: [false, false, false, true, true, false],
		dotConfig: [false, false, true, false, true, true],
	},
	{
		char: '‘',
		preConfig: [false, false, true, false, false, false],
		dotConfig: [false, true, true, false, false, true],
	},

	{
		char: '’',
		preConfig: [false, false, true, false, false, false],
		dotConfig: [false, false, true, false, true, true],
	},
	{
		char: '(',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [true, true, false, false, false, true],
	},
	{
		char: ')',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [false, false, true, true, true, false],
	},

	{
		char: 'forwardslash',
		preConfig: [false, false, false, true, true, true],
		dotConfig: [false, false, true, true, false, false],
	},
	{
		char: 'backslash',
		preConfig: [false, false, false, true, true, true],
		dotConfig: [true, false, false, false, false, true],
	},
	{
		char: 'space',
		preConfig: [],
		dotConfig: [false, false, false, false, false, false],
	},
	{
		char: '[',
		preConfig: [false, false, false, true, false, true],
		dotConfig: [true, true, false, false, false, true],
	},
	{
		char: ']',
		preConfig: [false, false, false, true, false, true],
		dotConfig: [false, false, true, true, true, false],
	},
	{
		char: '_',
		preConfig: [false, false, false, true, false, true],
		dotConfig: [false, false, true, false, false, true],
	},
	{
		char: '-',
		preConfig: [],
		dotConfig: [false, false, true, false, false, true],
	},
	{
		char: 'numbersign',
		preConfig: [false, false, false, true, true, true],
		dotConfig: [true, false, false, true, true, true],
	},
	{
		char: '&',
		preConfig: [false, false, false, true, false, false],
		dotConfig: [true, true, true, true, false, true],
	},
	{
		char: '<',
		preConfig: [false, false, false, true, false, false],
		dotConfig: [true, true, false, false, false, true],
	},
	{
		char: '>',
		preConfig: [false, false, false, true, false, false],
		dotConfig: [false, false, true, true, true, false],
	},
	{
		char: '@',
		preConfig: [false, false, false, true, false, false],
		dotConfig: [true, false, false, false, false, false],
	},
	{
		char: '{',
		preConfig: [false, false, false, true, true, true],
		dotConfig: [true, true, false, false, false, true],
	},
	{
		char: '}',
		preConfig: [false, false, false, true, true, true],
		dotConfig: [false, false, true, true, true, false],
	},
	{
		char: '~',
		preConfig: [false, false, false, true, false, false],
		dotConfig: [false, false, true, false, true, false],
	},
	{
		char: '=',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [false, true, true, false, true, true],
	},
	{
		char: '×',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [false, true, true, false, false, true],
	},
	{
		char: '÷',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [false, false, true, true, false, false],
	},
	{
		char: '+',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [false, true, true, false, true, false],
	},
	{
		char: '^',
		preConfig: [false, false, false, false, true, false],
		dotConfig: [false, true, true, false, true, false],
	},
	{
		char: '|',
		preConfig: [false, false, false, true, true, true],
		dotConfig: [true, true, false, false, true, true],
	},
	{
		char: 'percent',
		preConfig: [false, false, false, true, true, true],
		dotConfig: [true, true, false, false, true, true],
	},
];
