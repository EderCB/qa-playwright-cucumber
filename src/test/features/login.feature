Feature: User Authentication

  Background:
  Given the user is on the login page

  Scenario: Successful login
    When the user logs in with valid credentials
    Then the user should be redirected to the products page

   Scenario: Locked out user cannot log in
    When the user attempts to log in with a locked out user
    Then an error message should be displayed

#Como un cliente de Sauce Demo,
#Quiero poder iniciar sesión, agregar productos al carrito y completar una
#compra
#Para poder adquirir los productos que necesito

#Criterios de Aceptación
#1. El usuario puede iniciar sesión con credenciales válidas.
#2. El usuario no puede iniciar sesión con credenciales inválidas.
#3. El usuario puede agregar un producto al carrito desde la página de productos.
#4. El usuario puede ver los productos agregados en el carrito de compras.
#5. El usuario puede completar el proceso de compra hasta la confirmación.

#Nota: Utilizar las siguientes credenciales para las pruebas:
#• Usuario estándar: standard_user / secret_sauce
#• Usuario bloqueado: locked_out_user / secret_sauce
