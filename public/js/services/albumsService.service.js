(function () {
  'use strict';

  function AlbumsService ($http) {

    var service = this;

    service.getAlbums = getAlbums;
    service.postNewAlbum = postNewAlbum;
    service.setNewAlbum = setNewAlbum;

    function getAlbums () {
      var uri = '/albums';
      return $http.get(uri)
      .then(function (res) {
        console.log(JSON.stringify(res));
        return res.data;
      })
      .catch(function (e) {
        console.log(e);
      });
    }

    function postNewAlbum (album) {
      var uri = '/newAlbum';
      return $http.post(uri,{
        data: {
          album: album
        }
      })
      .then(function (resp) {
        console.log(resp);
        return resp.data;
      });
    }

    function setNewAlbum (album) {
      var uri = '/newAlbum';
      console.log(album);
      return $http.get(uri,{
        params: album
      })
      .then(function (resp) {
        console.log(resp);
        return resp.data;
      });
    }

    return service;

  }

  AlbumsService.$inject = ['$http'];

  angular.module('angularej')
  .service('AlbumsService', AlbumsService);
}())
