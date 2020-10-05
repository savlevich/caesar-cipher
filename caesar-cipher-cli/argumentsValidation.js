const { program } = require('commander');

const myParseInt = (value, dummyPrevious) => {
	// parseInt takes a string and an optional radix
  return parseInt(value);
};

const getOptions = () => {
	program
		.storeOptionsAsProperties(false)
		.requiredOption('-a, --action <encode|decode>', 'an action encode/decode')
		.requiredOption('-s, --shift <number>', 'a shift value', myParseInt)
		.option('-i, --input <input>', 'an input file')
		.option('-o, --output <output>', 'an output file')
	
	program.parse(process.argv);
	
	return program.opts();
};

module.exports = {
  myParseInt,
  getOptions
};
