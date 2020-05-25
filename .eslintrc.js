module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'jsx-a11y/control-has-associated-label': [2, {
      'labelAttributes': ['label'],
      'controlComponents': ['CustomComponent'],
      'ignoreElements': [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'th',
        'video',
      ],
      'ignoreRoles': [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      'depth': 3,
    }],
  },
};
