module.exports = {
    "parser": "babel-eslint",
    "extends": ['airbnb', 'prettier'],
    "env": {
        browser: true,
        es6: true
    },
    "rules": {
        "react/jsx-filename-extension":[1, {extensions: ['.js', '.jsx']}],
        "react/prop-types": 0,
        "react/no-array-index-key":0,
        "no-console": 0,
        "react/destructuring-assignment": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0,
        "react/jsx-no-bind":0,
        "func-names": 0
    }
}