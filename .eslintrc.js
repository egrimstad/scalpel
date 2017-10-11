module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": "warn",
        "no-unused-vars": "warn",
        "space-before-blocks": "warn",
        "react/react-in-jsx-scope": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2
    }
};