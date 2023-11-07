# PseudoFont

PseudoFont is a JavaScript library for creating and converting Unicode pseudo fonts. It allows you to define custom fonts where the letters A-Z and digits 0-9 are represented using different Unicode symbols, resulting in a unique and stylized appearance for your text.

## Installation

You can install PseudoFont via npm:

```bash
npm install pseudofont
```

## Usage

To use PseudoFont in your JavaScript project, follow these steps:

1. Import the PseudoFont class:

```javascript
const PseudoFont = require('pseudofont');
```

2. Create a new instance of the PseudoFont class by specifying your custom font definitions:

```javascript
const customFont = new PseudoFont(
  'MyCustomFont',
  '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
  '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵',
  '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫'
);
```

3. Use the `convert` method to transform your text into the custom pseudo font:

```javascript
const convertedText = customFont.convert('Hello World');
console.log(convertedText); // Output: '𝓗𝓮𝓵𝓵𝓸 𝓦𝓸𝓻𝓵𝓭'
```

### Additional Features

#### Experimental Fonts

You can mark your custom font as experimental if it is incomplete or unsupported on some platforms. Use the `setExperimental` method to set the experimental status of your font:

```javascript
customFont.setExperimental(true);
```

## Example

Here's an example of using PseudoFont to convert text into a custom pseudo font:

```javascript
const PseudoFont = require('pseudofont');

const customFont = new PseudoFont(
  'MyCustomFont',
  '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
  '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵',
  '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫'
);

const convertedText = customFont.convert('Hello World');
console.log(convertedText); // Output: '𝓗𝓮𝓵𝓵𝓸 𝓦𝓸𝓻𝓵𝓭'
```