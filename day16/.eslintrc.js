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
    }
}