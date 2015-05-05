var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  when('/contact/', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactController'
  }).
   when('/about/', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
  }).
  when('/advert/', {
      templateUrl: 'partials/advert.html',
      controller: 'AdvertController'
  }).
  when('/sitemap/', {
      templateUrl: 'partials/sitemap.html',
      controller: 'SitemapController'
  }).
  when('/login/', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
  }).
  when('/search/:', {
      templateUrl: 'partials/search.html',
      controller: 'SearchController'
  }).
  otherwise({
  redirectTo: '/list'
  });
}]);