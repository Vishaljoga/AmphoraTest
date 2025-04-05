Feature: Verify all Products pages
  Scenario: Click all product pages
    Given I open the homepage
    When I click all product links from the Products dropdown
    Then I should see product pages load correctly