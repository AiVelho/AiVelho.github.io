import globals from "globals"
import pluginJs from "@eslint/js"

export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            // Add custom rules here
            "no-console": "warn", // Warn when using console.log
            eqeqeq: "error", // Require strict equality (=== and !==)
            semi: ["error", "never"], // Enforce semicolons at the end of statements
            quotes: ["error", "double"], // Enforce double quotes for strings
            "no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }], // Warn when declaring unused variables
        },
    },
    pluginJs.configs.recommended,
]
