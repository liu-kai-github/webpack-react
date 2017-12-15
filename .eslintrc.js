module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    'plugins': [
        'react',
    ],
    'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
        }
    },
    'rules': {
        // Possible Errors
        'valid-jsdoc': 'error',
        'no-console': 'warn',
        'for-direction': 'error',

        // Best Practices
        'eqeqeq': ['error', 'always'],
        'curly': 'error',
        'no-alert': 'error',
        'no-else-return': 'error',
        'no-multi-spaces': 'error',

        // Variables
        'no-undefined': 'error',

        // Node.js and CommonJS

        // Stylistic Issues
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'no-multiple-empty-lines': 'error',
        'block-spacing': ['error', 'never'],
        'jsx-quotes': ['error', 'prefer-double'],

        // ECMAScript 6
        'no-var': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'no-duplicate-imports': 'error',

        // 'no-empty-interface': true,
        // 'no-shadowed-variable': true,
        // 'comment-format': [true, 'check-space'],

        // React
        'react/no-multi-comp': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-curly-spacing': ['error', 'never'],
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-wrap-multilines': 'error',
        'react/self-closing-comp': 'error',
        'react/jsx-no-bind': 'error',
        'react/require-render-return': 'error',
    },
};
