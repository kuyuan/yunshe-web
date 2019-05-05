import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    font-weight: inherit;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  ::-moz-selection { /* Code for Firefox */
    background: #006644;
    color: #ffffff;
  }

  ::selection {
    background: #006644;
    color: #ffffff;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #B2B9C6;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #B2B9C6;
    opacity:  1;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #B2B9C6;
    opacity:  1;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:    #B2B9C6;
  }
`
