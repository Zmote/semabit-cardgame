import eslintJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import {defineConfig, globalIgnores} from "eslint/config";
import eslintReact from "@eslint-react/eslint-plugin";

export default defineConfig(
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
            globals: globals.browser,
        },
        extends: [
            eslintJs.configs.recommended,
            tseslint.configs.recommended,
            eslintReact.configs["recommended-typescript"]
        ],
        rules: {
            // Disabled as it isn't fine-grained enough, for example useEffect with no dependencies
            // that runs only once is s till reported erroneous
            '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': "off"
        }
    });