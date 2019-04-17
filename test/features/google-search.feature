Feature: Performing a google Search

  As a user on the google search page
  I want to search
  Because I want to learn more about it

  Background:

    Given I am on the google search page

  Scenario Outline: Performing a search operation with passing test data as data table
    When I enter <searchItem> into the google search box
    #And  I click the search button
    #Then I should see a list of search results

    Examples:
      |searchItem|
      |"Cucumber BDD"|