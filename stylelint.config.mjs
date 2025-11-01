/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-two-dash-bem"],
  plugins: ["stylelint-order"],
  rules: {
    // Color
    "color-no-hex": true,
    "function-disallowed-list": ["rgb", "hwb", "lab", "lch", "oklab", "oklch"],

    // Units
    "declaration-property-unit-allowed-list": {
      "/^border|^outline/": ["%", "deg", "px"],
      "/^gap|^margin|^padding/": ["em", "rem"],
    },
    "unit-allowed-list": [
      "%",
      "ch",
      "deg",
      "dvh",
      "em",
      "fr",
      "ms",
      "px",
      "rem",
      "vh",
      "vw",
    ],

    /* ========== PLUGINS ========== */

    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": [
      [
        /* Positioning */
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",

        /* Display & Flow */
        "display",
        "visibility",
        "float",
        "clear",
        "overflow",
        "overflow-x",
        "overflow-y",

        /* Flex */
        "flex",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex-direction",
        "flex-wrap",
        "flex-flow",

        /* Grid */
        "grid",
        "grid-template",
        "grid-template-rows",
        "grid-template-columns",
        "grid-template-areas",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-row",
        "grid-row-start",
        "grid-row-end",
        "grid-column",
        "grid-column-start",
        "grid-column-end",
        "grid-area",

        /* Flex/Grid Alignment & Spacing */
        "order",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "justify-items",
        "justify-self",
        "place-content",
        "place-items",
        "place-self",
        "gap",
        "row-gap",
        "column-gap",

        /* Box Model / Dimensions */
        "box-sizing",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",

        /* Multi-Column Layout */
        "columns",
        "column-width",
        "column-count",
        "column-gap",
        "column-rule",
        "column-rule-width",
        "column-rule-style",
        "column-rule-color",

        /* Spacing */
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",

        /* Borders & Outline */
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "border-radius",
        "outline",
        "outline-offset",

        /* Background */
        "background",
        "background-color",
        "background-image",
        "background-repeat",
        "background-position",
        "background-size",
        "background-clip",
        "background-origin",
        "background-attachment",

        /* Typography */
        "color",
        "font",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "line-height",
        "letter-spacing",
        "text-align",
        "text-transform",
        "text-decoration",
        "text-indent",
        "white-space",
        "word-break",
        "word-spacing",

        /* Visual Effects */
        "opacity",
        "box-shadow",
        "mix-blend-mode",
        "filter",

        /* Motion */
        "animation",
        "animation-name",
        "animation-duration",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction",
        "animation-fill-mode",
        "animation-play-state",

        "transform",
        "transform-origin",

        "transition",
        "transition-property",
        "transition-duration",
        "transition-timing-function",
        "transition-delay",

        /* Miscellaneous */
        "cursor",
        "pointer-events",
        "content",
        "quotes",
        "user-select",
        "resize",
      ],
      {
        unspecified: "bottom",
      },
    ],
  },
};
