class Header extends Directive

  constructor: (imagoUtils, $rootScope) ->

    return {
      templateUrl: '/app/directives/views/header.html'
      controllerAs: 'header'
      controller: ->
        @utils  = imagoCart
        # scope.active = false

        @activate = ->
          $rootScope.navActive = !$rootScope.navActive
          # console.log '$rootScope.navActive', $rootScope.navActive

    }

