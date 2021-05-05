Feature: Tests for coinmarketcap.com search button

Scenario: Test
    Given I open coinmarketcap
    When I click on search button
    And I input keyword into searching field
    Then I wait for few seconds