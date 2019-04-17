Feature: Performing a login

  As a user on the facebook
  I want to login
  Because I want to check my facebook account feed




  Scenario Outline: Performing login operation
    Given I am on the facebook login page
    When I enter username and password <user> <password> into the text box
    Then I should should login to my facebook account

    Examples:
      |user| |password|
      |"heenu_rocking@yahoo.com"| |"obey@GOD11me"|

