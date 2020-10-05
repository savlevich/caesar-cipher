const fs = require('fs');
const stream = require('stream');
const { encryptHandler, decryptHandler } = require('./utils');
const { getOptions } = require('./argumentsValidation');

const options = getOptions();

class TranformStream extends stream.Transform {
    _transform(data, encoding, callback) {
			// check if shift is greater than 0
			if (options.shift && !isNaN(options.shift) && options.shift > 0) {
					if (options.action == 'encode' || options.action == 'decode') {
						const transformFunction = options.action == 'decode' ? decryptHandler: encryptHandler;
		
						const tranformedChunk = transformFunction({ text: data.toString(), shift: options.shift });
						this.push(tranformedChunk);
						callback();
					} else {
						console.error(`action ${options.action} is not specified. Can only be used with encode or decode option`);
						process.exit(1);
					}

			} else {
				console.error('The shift must be a number greater than 0');
				process.exit(1);
			}

    }
};

const createReadStream = () => new Promise(resolve => {
    if (options.input) {
			fs.access(options.input, fs.constants.F_OK | fs.constants.R_OK,
				error => {
					if (error) {
						console.error(`File ${options.input} does not exist or do not have access to read`)
						process.exit(1);
					}
					resolve(fs.createReadStream(options.input));
				}
      );
    } else {
      console.log('Press CTRL + C to finish procces');
      resolve(process.stdin);
    }
});

const createOutputStream = () => new Promise(resolve => {
    if (options.output) {
      fs.access(options.output, fs.constants.F_OK | fs.constants.W_OK, error => {
        if (error) {
					console.error(`File ${options.output} does not exist or do not have access to read`)
					process.exit(1);
        }
        resolve(fs.createWriteStream(options.output, { flags: 'a' }));
      });
    } else {
      resolve(process.stdout);
    }
});

module.exports = {
	createOutputStream,
	createReadStream,
	TranformStream
};
