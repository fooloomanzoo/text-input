[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/fooloomanzoo/text-input)
[![API](https://img.shields.io/badge/API-available-green.svg)](https://www.webcomponents.org/element/fooloomanzoo/text-input/elements/text-input)
[![Demo](https://img.shields.io/badge/demo-available-red.svg)](https://www.webcomponents.org/element/fooloomanzoo/text-input/demo/demo/index.html)

_[API](https://fooloomanzoo.github.io/text-input/components/text-input/#/elements/text-input)_ and
_[Demo](https://fooloomanzoo.github.io/text-input/components/text-input/#/elements/text-input/demos/demo/index.html)_

## \<text-input\>

An input for numeric values.

### Motivation

The normal `input` with `type="number"` is fairly good to use, but it has some flaws, because it should if wanted e.g.:

* prevent non numeric input
* guarantee **live**-data to be valid
* pad a value with `0` (to a specific length)
* size the input (according to it's length)
* overflow to minimum or underflow to maximum
* saturate to minimum or to maximum
* display a specified unit and size the input

This element wants to achieve that. It does use **decimal notation**, like `123.4`, but does not display _scientific (exponential) notation_, like `1.234e+2`.

![alt text](https://github.com/fooloomanzoo/text-input/raw/master/docs/text-input.gif "Demo")

### Example

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>

    <custom-style>
      <style is="custom-style">
        html {
          font-family: 'Source Sans Pro', sans-serif;
          line-height: 1.5;
          --text-input: {
            background: rgba(60, 61, 172, 0.5);
            transition: background 150ms ease-in-out;
            color: white;
            padding: 0.5em;
            border-radius: 4px;
            border: none;
          };
          --text-input-focus: {
            background: rgba(60, 61, 172, 0.9);
            outline: none;
          };
        }
        text-input {
          font-size: 1.5em;
          padding: 0.5em;
        }
      </style>
    </custom-style>
    <link rel="import" href="text-input.html">

    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<text-input min="-150" step="0.15" max="300" pad-length="5" default="0"></text-input>
```

### Installation
```
bower install --save fooloomanzoo/text-input
```

### License
[MIT](https://github.com/fooloomanzoo/text-input/blob/master/LICENSE.txt)
