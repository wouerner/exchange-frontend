'use strict';

var App = angular.module('App', ['ngRoute']);

App.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
          templateUrl: 'login.html',
          controller: ''
        })
        .when('/mercado', {
          templateUrl: 'views/mercado.html',
          controller: 'MercadosController'
        })
        .when('/cambio', {
          templateUrl: 'views/cambio.html',
          controller: 'CambioController'
        })
        .when('/cadastro', {
          templateUrl: 'views/cadastro.html',
          controller: 'CadastroController'
        })
        .when('/error', {
          templateUrl: 'views/404.html',
          controller: ''
        })
        .when('/historico-deposito', {
          templateUrl: 'views/historico-deposito.html',
          controller: ''
        })
        .when('/perfil', {
          templateUrl: 'views/perfil.html',
          controller: ''
        })
        .otherwise({
          redirectTo: '/error'
        });
});
