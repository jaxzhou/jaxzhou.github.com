/**
 * Created with JetBrains WebStorm.
 * User: jzhou
 * Date: 13-3-8
 * Time: 下午6:19
 * To change this template use File | Settings | File Templates.
 */


angular.module('MYProjects', ['ngResource']);

MyProjectCtr = function($scope,$resource){
    $scope.projects = $resource("projects.json").query(function(){

    });
}
