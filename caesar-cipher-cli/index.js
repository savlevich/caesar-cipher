const { pipeline } = require('stream');
const { TranformStream, createReadStream, createOutputStream } = require('./stream');

const createStreams = async () => {
	try {
		const read = await createReadStream();
		const transform = new TranformStream();
		const write = await createOutputStream();
		
		pipeline(
			read,
			transform,
			write,
			(err) => {
				if (err) {
					console.error('Oops! encryption error', err);
				} else {
					console.log('Done!');
				}
			}
		);

	} catch (error) {
		console.error(error);
	}
};

createStreams();
