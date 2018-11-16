'use strict';

/* Import WebpackApp */
import '@polymer/iron-demo-helpers/demo-pages-shared-styles.js';
import '@polymer/iron-demo-helpers/demo-snippet.js';
import '@polymer/iron-form/iron-form.js';
import '../../text-input.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';
const template = html`
  <custom-style>
    <style is="custom-style" include="demo-pages-shared-styles">
      text-input {
        margin-bottom: 8px;
        margin-left: 8px;
        --input-color: #111;
        --input-padding: 0.25em;
        --input-border-radius: 5px;
        --input-border-color: #ddd;
        --input-border-width: thin;
        --input-border-style: dotted;
        --input-transition: background-color 150ms ease-in-out;
        --input-focus-border-color: #555;
        --input-focus-border-style: solid;
        --input-focus-background: rgba(0, 0, 0, 0.15);
        --input-invalid-background: rgba(255, 0, 0, 0.15);
        --input-invalid-border-color: #999;
        --input-invalid-border-style: dashed;
        --input-placeholder: {
          font-style: italic;
          font-size: 0.9em;
        };
      }
      iron-form {
        @apply --shadow-elevation-2dp;
        padding: 20px;
      }
      .output {
        margin-top: 20px;
        word-wrap: break-word;
        font-family: monospace;
      }
    </style>
  </custom-style>`;
document.body.appendChild(template.content);
