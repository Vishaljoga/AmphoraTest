Feature: Newsletter Signup
  Scenario: Sign up for newsletter
    Given I open the homepage
    When I navigate to Newsletter section under Resources and submit the form
    Then I should see a confirmation message