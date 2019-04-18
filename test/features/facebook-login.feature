Feature: Performing a login

  As a user on the facebook
  I want to login
  Because I want to check my facebook account feed


  Scenario Outline: Performing login operation
    Given I am on the facebook login page
    When I enter username and password <user> <password> into the text box
    Then I should login to my facebook account
    And  I should search for friends into search box <friend>

    Examples:
      |user| |password|friend|
      |"heenu_rocking@yahoo.com"| |"obey@GOD11me"|"Tripta Pathak"|

