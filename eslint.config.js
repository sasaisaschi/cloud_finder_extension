// eslint.config.js
import jestPlugin from "eslint-plugin-jest";

export default [
    {
        // gilt für alle .js in src und tests
        files: ["src/**/*.js", "tests/**/*.js"],

        // Parser-Optionen
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "script"
            },
            globals: {
                // Browser-Globals
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                // Jest-Globals
                describe: "readonly",
                test:     "readonly",
                expect:   "readonly",
                beforeEach: "readonly",
                afterEach:  "readonly"
            }
        },

        // Reactivation der ESLint-Empfehlungen
        linterOptions: {
            reportUnusedDisableDirectives: true
        },

        // Rules (hier z.B. alle aus eslint: recommended kopieren oder einzeln nachziehen)
        rules: {
            // Falls du die empfohlenen Regelsätze nicht manuell importieren willst,
            // musst du sie per FlatCompat einbinden (s. unten).
        }
    },
    {
        // Jest-Plugin laden
        plugins: {
            jest: jestPlugin
        },
        // Plugin-Regeln aktivieren
        rules: {
            "jest/no-disabled-tests": "warn",
            "jest/no-focused-tests":  "error"
            // … weitere Jest-Regeln
        }
    }
];
