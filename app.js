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
        action: "#"
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



		// 	ABOUT PAGE AND MULTIPLE NAMED VIEWS =======================================
		.state('uplata', {
			url: '/uplata',
			templateUrl: 'partial-form.html'
		});

});
