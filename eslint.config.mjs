import globals from 'globals';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
    // js.configs.recommended,
    // sonarjs.configs.recommended,
    {
        'plugins': {
            sonarjs
        }
    },
    {
        rules: {
            // ES standards
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'no-console': 'error',
            
            // Code format standards
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'indent': ['error', 4],

            // SonarJS rules
            'sonarjs/cognitive-complexity': 'error',
            'sonarjs/no-duplicate-string': 'error',
            'sonarjs/no-identical-functions': 'error',
            'sonarjs/no-inverted-boolean-check': 'error', 
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.mocha,
            }
        }
    }
];