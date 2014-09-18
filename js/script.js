angular
  .module('addressBook', ['LocalStorageModule' ])
  .controller("address",['$scope','localStorageService', function($scope, localStorageService){
          if(localStorageService.get("itemList") ===  null){
              $scope.items = [];
          }else{
              $scope.items  = localStorageService.get("itemList");
          }
          console.log("on load", localStorageService.get("itemList"));
          $scope.addNew = function(){
              var newItem ={
                fname : "",
                lname   :"",
                email   :"",
                state   : false
              };
              $scope.items.push(newItem);
          };
          $scope.deleteItem = function(idx){
              $scope.items.splice(idx,1);  
              localStorageService.set("itemList",  $scope.items);
          };
          $scope.editItem = function(idx){
              $scope.items[idx].state = false;
          };
          $scope.saveItem = function(idx){
              $scope.items[idx].state = true;
             console.log($scope.items);
              localStorageService.set("itemList",  $scope.items);
          };
          $scope.clearAll = function(){
              $scope.items = [];
              localStorageService.clearAll();
          };
  }]);