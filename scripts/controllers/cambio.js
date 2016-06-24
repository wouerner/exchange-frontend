App.controller('ComprasController', function ComprasController($scope) {

    $scope.compras = [
        {
          preco: 1.1,
          quantidade: 0.00,
        }, {
          preco: 1.00,
          quantidade: 0.80
        },
    ];
});

App.controller('VendasController', function VendasController($scope) {

    $scope.vendas = [
        {
          preco: 1.1,
          quantidade: 0.00,
        }, {
          preco: 1.01,
          quantidade: 0.80
        },
    ];
});
