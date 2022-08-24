Feature: End to end Ecommerce validation
   
    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate total prices
    Then Select the country, submit and verify outcome message

    @Smoke // tagging has changed with cypress 10x
    Scenario: Filling the shop form
    Given I open Ecommerce page
    When I fill the form details
    |name | gender |
    |Kasia| Female |
    Then Validate the forms behaviour
    And Select the Shop page