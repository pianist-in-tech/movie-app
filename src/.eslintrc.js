module.exports={
    //set environment the code will run in, will use es6 functions
    "env":{
        "browser":true,
        "es6":true
    },
    //add extra configuration for using jsx and modern JavaScript
    "parserOptions":{
        "ecmaFeatures":{
            "jsx":true
        },
        "ecmaVersion":2018,
        "sourceType":"module"
    },
    //specify that our code uses react as a framework
    "plugins":[
        "react"
    ],
    //recommended settings for eslint, framework-specific settings for React
    "extends": ["eslint:recommended", "plugin:react/recommended"]
};