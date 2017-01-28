(function () {
  'use strict';

  function AddAlbum (AlbumsService) {
    return {
      restrict: 'AE',
      template: '<div>'+
        '<p>Agregar Disco nuevo</p>'+
        '<div class="form-group">'+
          '<input type="text" placeholder="ID" ng-model="newAlbumId"/>'+
        '</div>'+
        '<div class="form-group">'+
          '<input type="text" placeholder="Name" ng-model="newAlbumName"/>'+
        '</div>'+
        '<div class="form-group">'+
          '<input type="text" placeholder="Artist" ng-model="newAlbumArtist"/>'+
        '</div>'+
        '<div class="form-group">'+
          '<input type="date" placeholder="Released" ng-model="newAlbumReleased"/>'+
        '</div>'+
        '<div class="btn-group">'+
          '<button class="btn btn-primary" ng-click="addAlbumByPost()">Post Album</button>'+
          '<button class="btn btn-success" ng-click="addAlbumByGet()">Get Album</button>'+
        '</div>'+
      '</div>'+
    '</div>',
      scope: {
        albums: '='
      },
      link : function (scope, el, attr) {

        scope.addAlbumByPost = addAlbumByPost;
        scope.addAlbumByGet = addAlbumByGet;

        function addAlbumByPost () {
          var newAlbum = {};
          newAlbum.id = scope.newAlbumId;
          newAlbum.name = scope.newAlbumName;
          newAlbum.artist = scope.newAlbumArtist;
          newAlbum.released = scope.newAlbumReleased;
          AlbumsService.postNewAlbum(newAlbum)
          .then(function (data) {
            scope.albums = data.albums;
          });
        }


        function addAlbumByGet () {
          var newAlbum = {};
          newAlbum.id = scope.newAlbumId;
          newAlbum.name = scope.newAlbumName;
          newAlbum.artist = scope.newAlbumArtist;
          newAlbum.released = scope.newAlbumReleased;
          AlbumsService.setNewAlbum(newAlbum)
          .then(function (data) {
            scope.albums = data.albums;
          });
        }
      }
    }
  }

  AddAlbum.$inject = ['AlbumsService'];

  angular.module('angularej')
  .directive('addAlbum', AddAlbum);
}())
