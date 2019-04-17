Feature: Performing a login

  As a user on the facebook
  I want to login
  Because I want to check my facebook account feed




  Scenario Outline: Performing login operation
    Given I am on the facebook login page
    #When I login with username and password <user> <password> into the text box
    #ßThen I should see the message "Hi, Johny Smith" on my account page

    Examples:
      |user| |password|
      |"user@phptravels.com"| |"demouser"|

