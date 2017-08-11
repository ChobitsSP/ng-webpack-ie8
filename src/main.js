//require('babel-polyfill')

import angular from 'angular'
import hello from './components/hello.js'
//import './assets/css/app.css'

const app = angular.module('app', [])

app.directive('app', hello)