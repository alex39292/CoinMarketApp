Feature: Tests for coinmarketcap.com search button

@test
Scenario: Test with one ip
    Given I open coinmarketcap
    When I click on search button
    And I input keyword into searching field
    Then I wait for few seconds

@production
Scenario: Test with different ips
    Given I open coinmarketcap
    When  I click on search button
    And I input keyword into searching field
    Then I wait for few seconds