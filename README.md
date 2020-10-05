##  Caesar cipher

**CLI tool that encode and decode a text by Caesar cipher [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

# Installation

1. ``` git clone https://github.com/savlevich/caesar-cipher-cli.git ```
2. go to the cloned repository
3. run ```npm install```


CLI tool accept 4 options (short alias and full name):

1. **-a, --action**: an action encode/decode **(required)**
2.  **-s, --shift**: a shift number **(required)**
3.  **-i, --input**: an input file
If the input file is missed - stdin will use as an input source.
4.  **-o, --output**: an output file
If the output file is missed - stdout will use as an input source.


# Usage example

```bash
node caesar-cipher-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
node caesar-cipher-cli --action encode --shift 7 --input input.txt --output output.txt
```

```bash
node caesar-cipher-cli --action decode --shift 7 --input output.txt --output input.txt
```

also can be used with absolute paths (example for macOS)

```bash
node caesar-cipher-cli --action encode --shift 7 --input "/Users/admin/Documents/courses/rs/node.js/caesar-cipher-cli/input.txt" --output "/Users/admin/Documents/courses/rs/node.js/caesar-cipher-cli/output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
