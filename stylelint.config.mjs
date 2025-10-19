/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-plugin-defensive-css'],
  rules: {
    'color-named': 'never',
    'color-no-hex': true,
    'function-disallowed-list': ['rgb', 'hwb', 'lab', 'lch', 'oklab', 'oklch'],

    'declaration-property-unit-allowed-list': {
      '/^border|^outline/': ['px'],
      '/^gap|^margin|^padding/': ['em', 'rem'],
    },
    'unit-allowed-list': [
      'px',
      'vw',
      'vh',
      '%',
      'em',
      'rem',
      'ch',
      'deg',
      'ms',
    ],

    /* ========== PLUGINS ========== */

    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [
      [
        // Layout / Box Model
        'display',
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'float',
        'clear',
        'z-index',
        'overflow',
        'overflow-x',
        'overflow-y',

        // Flex / Grid
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'flex-direction',
        'flex-wrap',
        'justify-content',
        'align-items',
        'align-content',
        'align-self',
        'order',

        'grid',
        'grid-template-columns',
        'grid-template-rows',
        'grid-template-areas',
        'grid-auto-columns',
        'grid-auto-rows',
        'grid-auto-flow',
        'grid-gap',

        'gap',
        'row-gap',
        'column-gap',

        // Box Dimensions
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'box-sizing',

        // Multi-Column Layout
        'columns',
        'column-width',
        'column-count',
        'column-gap',
        'column-rule',
        'column-rule-width',
        'column-rule-style',
        'column-rule-color',

        // Margin & Padding
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',

        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',

        // Border & Outline
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-radius',
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',

        // Background
        'background',
        'background-color',
        'background-image',
        'background-position',
        'background-size',
        'background-repeat',
        'background-clip',
        'background-origin',
        'background-attachment',

        // Typography / Text
        'color',
        'font',
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'line-height',
        'letter-spacing',
        'text-align',
        'text-decoration',
        'text-transform',
        'text-shadow',
        'white-space',
        'word-spacing',
        'word-break',
        'overflow-wrap',

        // Visual / Effects
        'box-shadow',
        'opacity',
        'visibility',
        'cursor',
        'filter',
        'transition',
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transform',
        'transform-origin',

        // Misc / User Interaction
        'pointer-events',
        'content',
        'clip-path',
        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
      ],
      {
        unspecified: 'bottom',
      },
    ],

    'plugin/use-defensive-css': [true, { severity: 'warning' }],
  },
};
