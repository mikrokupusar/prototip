var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.controller("MainController", function($scope, $http) {
  $scope.menus = [
  {
    title: "Šalter",
    action: "#",
    menus: [
      {
        title: "Platni promet",
        action: "uplata"
      },
      {
        title: "Uputnice MS",
        action: "#"
      },
      {
        title: "Računi CKB",
        action: "#"
      },
      {
        title: "Banke",
        action: "#"
      },
      {
        title: "Računi",
        action: "#"
      },
      {
        title: "Pisma MPS",
        action: "#"
      },
      {
        title: "Paketi",
        action: "paketi"
      },
      {
        title: "TG Usluge",
        action: "#"
      },
      {
        title: "TF Usluge",
        action: "#"
      },
      {
        title: "Popis",
        action: "#"
      },
      {
        title: "Blagajna",
        action: "#"
      },
      {
        title: "Vrijednosnice",
        action: "#"
      },
      {
        title: "Mijenjački poslovi",
        action: "#"
      },
      {
        title: "Masovne pošiljke",
        action: "#"
      },
      {
        title: "Izveštaji",
        action: "#"
      }
    ]
  },
  {
    title: "Opšti šifarnici",
    action: "#",
    menus: [
      {
        title: "Osnovni podaci",
        action: "#"
      },
      {
        title: "Radne jedinice",
        action: "#"
      },
      {
        title: "Poštanske jedinice",
        action: "#"
      },
      {
        title: "Tipovi pošte",
        action: "#"
      },
      {
        title: "Odeljci",
        action: "#"
      }
    ]
  },
  {
    title: "Profil radnika",
    action: "#",
    menus: [
      {
        title: "Radnik",
        action:"#"
      },
      {
        title: "Identifikacione kartice",
        action:"#"
      }
    ]
  },
  {
    title: "Ovlašćenja",
    action: "#",
    menus:[
      {
        title: "Definisanje uloga",
        action:"#"
      },
      {
        title: "Vrste poslova/zadatka",
        action:"#"
      },
      {
        title: "Dodela uloga radniku nad odeljkom",
        action:"uloga"
      }
    ]
  },
  {
    title: "Geo šifarnici" ,
    action: "#",
    menus: [
      {
        title: "Kontinenti",
        action:"#"
      },
      {
        title: "Države",
        action:"#"
      },
      {
        title:"Opštine",
        action:"#"
      },
      {
        title: "Mesta",
        action:"#"
      },
      {
        title: "Poštanski brojevi",
        action:"#"
      }
    ]
  }
]


});

routerApp.controller('modalCtrl', function ($scope) {
  $scope.showModal = false;
  $scope.toggleModal = function() {
    $scope.showModal = !$scope.showModal;
  };
});


routerApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// HOME STATES AND NESTED VIEWS ===============================================
		.state('home', {
			url: '/home',
			templateUrl: 'partial-prijava.html'
		})

		// nested list
		.state('home.list', {
			url: '/list',
			templateUrl: 'partial-home-list.html',
			controller: function($scope) {
				$scope.dogs = ['Bernes', 'Husk', 'Goldendoodle'];
			}
		})

    // odjava
    .state('odjava', {
      url: '/odjava',
      templateUrl: 'partial-odjava.html'
    })
    // pin prijava
    .state('pin', {
      url:'/pin',
      templateUrl: 'partial-home.html'
    })
    .state('uloga', {
      url: '/uloga',
      templateUrl: 'partial-uloge.html'
    })
    .state('uloga.radnik', {
      templateUrl: 'partial-uloge-radnik.html'
    })
    .state('uloga.radnik.novauloga', {
      templateUrl: 'partial-uloge-radnik-novauloga.html'
    })

    // Poruke

    // .state('poruka', {
    //   templateUrl: 'modal-poruka.html'
    // })



		// 	ABOUT PAGE AND MULTIPLE NAMED VIEWS =======================================
		.state('uplata', {
			url: '/uplata',
			templateUrl: 'partial-form.html'
		})
    .state('paketi', {
      url:'/paketi',
      templateUrl: 'partial-paketi.html'
    });

});


routerApp.directive('input1', function() {
  return {
    restrict: 'E',
    templateUrl: 'input1.html',
    link: function(scope, e, a){
      scope.naslov = a.naslov;
      scope.hint = a.hint;
    },
    replace:true,
    scope:{}
  }
});


routerApp.directive('inputwaddon', function() {
  return {
    restrict: 'E',
    templateUrl: 'inputwaddon.html',
    link: function(scope, e, a){
      scope.naslov = a.naslov;
      scope.hint = a.hint;
      scope.addon1 = a.addon1;
      scope.addon2 = a.addon2;
    },
    replace:true,
    scope:{}
  }
});


routerApp.directive('modal', function () {
  return {
    templateUrl: 'modal-poruka.html',
    restrict: 'E',
    transclude: true,
    replace:true,
    scope:true,
    link: function postlink(scope, element, attrs) {
      scope.title = attrs.title;
      scope.$watch(attrs.visible, function(val){
        if (val==true) {
          $(element).modal('show');
        } else {
          $(element).modal('hide');
        }
      });

      $(element).on('shown.bs.modal', function() {
        scope.$apply(function() {
          scope.$parent[attrs.visible] = true;
        });
      });
      $(element).on('hidden.bs.modal', function() {
        scope.$apply(function() {
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  };
});
