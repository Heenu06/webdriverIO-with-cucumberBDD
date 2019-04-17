Feature: Performing a google Search

  As a user on the google search page
  I want to use search option
  Because I want to learn

  Background:

    Given I am on the google search page

  Scenario Outline: Performing a search operation with passing test data as data table
    When I enter <searchItem> into the google search box
    And  I click the google search button
    Then I should see a list of search results on google page

    Examples:
      |searchItem|
      |"Cucumber BDD"|