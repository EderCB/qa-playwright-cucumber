Feature: Compra

  Scenario: Compra exitosa
    Given el usuario inicia sesión correctamente
    When agrega un producto al carrito
    And completa la compra
    Then debería ver confirmación