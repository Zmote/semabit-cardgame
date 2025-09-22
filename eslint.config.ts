import eslintJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import {defineConfig, globalIgnores} from "eslint/config";
import eslintReact from "@eslint-react/eslint-plugin";
import esLintPluginImport from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig(
    globalIgnores(["dist"]),
    stylistic.configs.recommended,
    eslintJs.configs.recommended,
    tseslint.configs.recommended,
    esLintPluginImport.flatConfigs.recommended,
    esLintPluginImport.flatConfigs.typescript,
    eslintReact.configs["recommended-typescript"],
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.browser
            },
        },
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        rules: {
            // Disabled as it isn't fine-grained enough, for example useEffect with no dependencies
            // that runs only once is s till reported erroneous
            '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': "off",
            'no-console': [
                'warn',
                {
                    allow: ['error', 'warn'],
                },
            ],
            'import/order': [
                'error',
                {
                    'groups': [
                        'builtin',              // Node.js built-in modules
                        'external',             // Imports from node_modules
                        'internal',             // Aliased imports
                        ['parent', 'sibling'],  // Relative imports
                        'index',                // ./index files
                        'object',               // Imports like `import type { ... } from ...`
                    ],
                    'pathGroups': [
                        {
                            // Treat 'react' as a special external group
                            'pattern': '{react,react-*}',
                            'group': 'external',
                            'position': 'before',
                        },
                        {
                            // Define the pattern for your internal alias
                            'pattern': '@/**',
                            'group': 'internal',
                        },
                    ],
                    'pathGroupsExcludedImportTypes': ["{react,react-*}"], // Don't let `react` be matched by the default external group
                    'newlines-between': 'always', // Add a new line between groups
                    'alphabetize': {
                        'order': 'asc',
                        'caseInsensitive': true,
                    },
                },
            ]
        }
    }
);