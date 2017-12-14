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
        // Best Practices
        // Variables
        // Node.js and CommonJS
        // Stylistic Issues
        // ECMAScript 6
        'no-var': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'no-undefined': 'error',
        'prefer-rest-params': 'error',
        'eqeqeq': ['error', 'always'],
        'curly': 'error',
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'valid-jsdoc': 'error',
        'no-empty-interface': true,
        'no-shadowed-variable': true,
        'no-console': 'warn',
        'no-alert': 'error',
        'no-else-return': 'error',
        'comment-format': [true, 'check-space'],
        'for-direction': 'error',
        'no-multiple-empty-lines': 'error',
        'no-duplicate-imports': 'error',
        'block-spacing': ['error', 'never'],
        'jsx-quotes': ['error', 'prefer-double'],
        'no-multi-spaces': 'error',
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
