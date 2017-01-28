(function () {
  'use strict';

  function AppController ($scope, AlbumsService){

    $scope.a = "hola";
    $scope.valorInput = "Putos todos";
    $scope.albums = [];

    $scope.change = change;
    $scope.edit = edit;
    $scope.delete = deleteAlbum;

    AlbumsService.getAlbums()
    .then(function (data) {
      $scope.albums = data.albums;
    });

    function change () {
      $scope.a = $scope.valorInput;
    }

    function edit (album) {

    }

    function deleteAlbum (album) {
      var index = $scope.albums.findIndex(function (findAlbum) {
        return album.id === findAlbum.id;
      });

      $scope.albums.splice(index, 1);
    }
  }

  AppController.$inject = ['$scope', 'AlbumsService'];

  angular.module('angularej')
  .controller('appController', AppController);

}())
