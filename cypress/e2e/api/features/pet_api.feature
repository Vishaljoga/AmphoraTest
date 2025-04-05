Feature: Pet CRUD API
  Scenario: Create, Update, Read and Delete Pet
    Given I create a new pet
    When I update the pet
    And I fetch the pet details
    And I delete the pet
    Then all API responses should be validated