import type { NextApiRequest, NextApiResponse } from 'next';
import { brailleAlpha } from '../../data/brailleAlpha';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { brailleChar } = req.query;
	const char = brailleAlpha.find((char) => char.char === brailleChar);
	if (char === undefined) {
		res.status(500).json({ error: 'failed to load data' });
	} else {
		res.status(200).json(char);
	}
}
