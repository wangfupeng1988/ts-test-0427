module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    globals: {
        $: true,
    },
    rules: {
        '@typescript-eslint/no-var-requires': 0,
    },
}
