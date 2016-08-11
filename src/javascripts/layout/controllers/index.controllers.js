(function () {
    'use strict';

    angular
        .module('livevox.layout.controllers')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', '$scope', 'Navbar'];


    function HomeController( $location, $scope, Navbar){
        var vm = this;

        // --Layout Attributes
        vm.layout = {

            menuList: {}

        };


        // --API
        vm.api = {

            loadNavbarMenu: loadMenuData

        };

        ///////////////////////////////////////////////////////////

        function loadMenuData(){

            // 1. Call the menu loader
            Navbar.getMenuList(successGetMenu, errorGetMenu);

            /**
             * 
             * @param response
             */
            function successGetMenu(response) {

                vm.layout.menuList = response.data;

                // --debug
                console.log('The recieved message is: ');
                console.log(vm.layout.menuList);

            }

            /**
             * 
             * @param response
             */
            function errorGetMenu(response) {

                // --debug
                console.log('Error in the menu web service');

                vm.layout.menuList = {

                    items: [
                        {
                            label: 'Home',
                            url: '#/home',
                            items: []
                        }
                    ]
                };

                // --debug
                console.log('The recieved message is: '+vm.layout.menuList);
            }
        }
    }

})();
