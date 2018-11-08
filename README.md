[![Published on NPM](https://img.shields.io/npm/v/@fooloomanzoo/text-input.svg)](https://www.npmjs.com/package/@fooloomanzoo/text-input)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@fooloomanzoo/text-input)
[![API](https://img.shields.io/badge/API-available-green.svg)](https://www.webcomponents.org/element/fooloomanzoo/@text-input/elements/text-input)
[![Demo](https://img.shields.io/badge/demo-available-red.svg)](https://www.webcomponents.org/element/fooloomanzoo/@text-input/demo/demo/index.html)

_[API](https://fooloomanzoo.github.io/text-input/components/text-input/#/elements/text-input)_ and
_[Demo](https://fooloomanzoo.github.io/text-input/components/text-input/#/elements/text-input/demos/demo/index.html)_

## \<text-input\>

An input for text values.

### Motivation

The normal `input` with `type="text"` is fairly good to use, but it has some flaws, because it should if wanted e.g.:

* guarantee **live**-value to be valid
* to be styled easily
* auto resize on input

### Example
```html
  <p>
    hex-color: <text-input id="hex" value="{{value}}" input="{{input}}" default="#111" required pattern="^#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$" size="7" maxlength="7" minlength="4"></text-input>
  </p>
  <p>pattern: <b>^#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$</b></p>
  <p>input: <b>[[input]]</b></p>
  <p>value: <b>[[value]]</b></p>
```

### Styling
Have a look at [input-picker-pattern#input-shared-style](https://github.com/fooloomanzoo/input-picker-pattern#input-shared-style) to see how to style the element.

### Installation
```
npm i @fooloomanzoo/text-input
```

### License
[MIT](https://github.com/fooloomanzoo/text-input/blob/master/LICENSE.txt)
