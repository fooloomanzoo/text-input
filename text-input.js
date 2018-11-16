import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin.js';
import { InputPattern } from '@fooloomanzoo/input-picker-pattern/input-pattern.js';

/**
 * mixin to create a text-input
 *
 * @appliesMixin InputPattern
 *
 * @mixinFunction
 * @polymer
 */
export const TextInputMixin = dedupingMixin( superClass => {

  return class extends InputPattern(superClass) {

    static get inputTemplate() {
      return html`
        <input id="input"
          type="[[type]]"
          value="{{input::input}}"
          placeholder="[[placeholder]]"
          disabled$="[[disabled]]"
          required$="[[required]]"
          maxlength$="[[maxlength]]"
          title$="[[title]]"
          pattern="[[_computInputValidationPattern(pattern)]]"
          autocomplete$="[[_computeAutocompleteAttribute(autocomplete)]]"
          spellcheck$="[[_computeSpellcheckAttribute(spellcheck)]]">
      `;
    }

    static get properties() {
      return {
        /**
         * regular expression pattern of the input
         * @type {string}
         */
        pattern: {
          type: String,
          notify: true,
          observer: '_patternChanged'
        },

        /**
         * if `true`, autocomplete is enabled
         */
        autocomplete: {
          type: Boolean,
          value: false
        },

        /**
         * if `true`, spellcheck is enabled
         */
        spellcheck: {
          type: Boolean,
          value: false
        },

        /**
         * maximum length of the input
         */
        maxlength: {
          type: Number
        }
      }
    }

    _computInputValidationPattern(pattern) {
      if (typeof pattern === 'string' || pattern instanceof RegExp) {
        try {
          const testRegExp = new RegExp(pattern);
        } catch(err) {
          console.warn(err);
          return '';
        }
        if (pattern instanceof RegExp) {
          // slice leading and following slashes
          return pattern.toString().slice(1,-1);
        }
        return pattern;
      }
      return '';
    }

    _patternChanged(pattern) {
      let isSet, validate, validationRegExp;
      if (typeof pattern === 'string' || pattern instanceof RegExp) {
        try {
          validationRegExp = new RegExp(pattern);
        } catch(err) {
          console.warn(err);
          validationRegExp = null;
        }
      }
      if (validationRegExp) {
        // set validation function to validate with _validationRegExp and the _defaultValidate function
        isSet = function(value) {
          return this._defaultIsSet(value) && !(this._validationRegExp.exec(value) === null);
        }
        validate = function(_isSet, value, required) {
          return _isSet(value);
        }
      } else {
        isSet = this._defaultIsSet;
        validate = this._defaultValidate;
      }
      this._validationRegExp = validationRegExp;
      this._isSet = isSet.bind(this);
      this._validate = validate.bind(this);
    }

    _computeSpellcheckAttribute(spellcheck) {
      return spellcheck ? 'true' : 'false';
    }

    _computeAutocompleteAttribute(autocomplete) {
      return autocomplete ? 'on' : 'off';
    }
  }
});

/**
 *  `text-input` is an element that can:
 * * guarantee **live**-data to be valid
 * * be styled easily and in unified way
 *
 * Example:
 * ```html
 * <text-input step="2" min="-20" max="140" pad-length="2"></text-input>
 * ```
 *
 * It sizes automatically. Use `key-up` and `key-down` to increment the value. If `step` is given, the value is a **multiple** of `step`.
 *
 *  Have a look at [input-picker-pattern#input-shared-style](https://github.com/fooloomanzoo/input-picker-pattern#input-shared-style) to see how to style the element.
 *
 * ```css
 * :host {
 *   --input-disabled-color: grey;
 *   --input-focus-background: rgba(0,0,0,0.25);
 *   --input-focus: {
 *     font-weight: bold;
 *   };
 *   --input-placeholder-color: pink;
 * }
 * ```
 * @polymer
 * @customElement
 *
 * @appliesMixin TextInputMixin
 *
 * @demo demo/index.html
 * @demo demo/form.html in a form
 **/
export class TextInput extends TextInputMixin(PolymerElement) {
  static get is() {
    return 'text-input';
  }
}

if (!customElements.get(TextInput.is)) {
  customElements.define(TextInput.is, TextInput);
}
