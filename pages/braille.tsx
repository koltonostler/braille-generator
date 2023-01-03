import React, { useState } from 'react';

export default function Braille() {
	const [brailleOutput, setBrailleOutput] = useState<Array<any>>([]);
	async function getCharInfo(request: RequestInfo): Promise<any> {
		const response = await fetch(request);
		const charInfo = await response.json();
		return charInfo;
	}

	function DotConfig(props: any) {
		let dotConfig: Array<boolean> = props.dotConfig;
		let index: number = props.index;

		return (
			<div
				key={index}
				className='braille-char'>
				{dotConfig.map((value: boolean, index: number) => {
					if (value) {
						return (
							<div
								key={`dot${index}`}
								className='braille-on'></div>
						);
					} else {
						return (
							<div
								key={`dot${index}`}
								className='braille-off'></div>
						);
					}
				})}
			</div>
		);
	}
	function PreConfig(props: any) {
		let preConfig: Array<boolean> = props.preConfig;
		let index: number = props.index;

		return (
			<div
				key={index}
				className='braille-char'>
				{preConfig.map((value: boolean, index: number) => {
					if (value) {
						return (
							<div
								key={`dot${index}`}
								className='braille-on'></div>
						);
					} else {
						return (
							<div
								key={`dot${index}`}
								className='braille-off'></div>
						);
					}
				})}
			</div>
		);
	}

	const generateBraille = async (e: any) => {
		e.preventDefault();
		setBrailleOutput([]);
		const enInput: string = e.target.querySelector('#en-input').value;

		for (let char of enInput) {
			if (char === ' ') {
				char = 'space';
			}
			console.log(char);
			// handle cases where char can't be searched in api due to url convention
			if (char.indexOf('\\') >= 0) {
				char = 'backslash';
			}
			switch (char) {
				case '.':
					char = 'period';
					break;
				case '?':
					char = 'question';
					break;
				case '/':
					char = 'forwardslash';
					break;
				case '#':
					char = 'numbersign';
					break;
				case '%':
					char = 'percent';
					break;
				case ' ':
					char = 'space';
					break;
				default:
					break;
			}

			let brailleChar = await getCharInfo(`https://braille-generator.vercel.app/api/brailleDict/${char}`);
			if (!brailleChar.error) {
				setBrailleOutput((current) => [...current, brailleChar]);
			}
		}
	};
	return (
		<>
			<form
				onSubmit={(e) => {
					generateBraille(e);
				}}>
				<input
					type='text'
					name='en-input'
					id='en-input'
				/>
				<button type='submit'>Generate Braille</button>
			</form>

			<div className='braille-container'>
				{brailleOutput.map((res: any, index: any) => {
					if (res.preConfig.length > 0) {
						return (
							<>
								<PreConfig
									key={`preconfig-${index}`}
									preConfig={res.preConfig}
									index={index}
								/>
								<DotConfig
									key={`config-${index}`}
									dotConfig={res.dotConfig}
									index={index}
								/>
							</>
						);
					} else {
						return (
							<>
								<DotConfig
									key={`config-${index}`}
									dotConfig={res.dotConfig}
									index={index}
								/>
							</>
						);
					}
				})}
			</div>
		</>
	);
}
