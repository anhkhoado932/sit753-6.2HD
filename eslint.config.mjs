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
            'semi': ['warn', 'always'],
            'quotes': ['warn', 'single'],
            'indent': ['warn', 4],

            // SonarJS rules
            'sonarjs/cognitive-complexity': 'warn',
            'sonarjs/no-duplicate-string': 'warn',
            'sonarjs/no-identical-functions': 'warn',
            'sonarjs/no-inverted-boolean-check': 'warn', 
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