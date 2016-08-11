(function () {
    'use strict';

    angular
        .module('livevox.layout.services')
        .factory('Navbar', Navbar);

    Navbar.$inject = ['$http'];

    /**
     * 
     * @param $http
     * @returns {{getMenuList: getMenuList}}
     * @constructor
     */
    function Navbar($http){

        var Navbar = {

            getMenuList: getMenuList,
        };

        return Navbar;

        ///////////////////////////////////////////////////////

        /**
         * 
         * @param successFn
         * @param errorFn
         * @returns {*}
         */
        function getMenuList(successFn, errorFn){

            return $http.get('https://demo1045116.mockable.io/menu')
                .then(successFn, errorFn);
        }
    }

})();
