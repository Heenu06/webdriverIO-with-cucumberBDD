Feature: Performing a login

    As a user on the phptravels login page
    I want to login
    Because I want to book the ticket




    Scenario Outline: Performing login operation with passing test data as data table
        Given I am on the phptravels page
        When I login with username and password <user> <password> into the text box
        Then I should see the message "Hi, Johny Smith" on my account page

        Examples:
        |user| |password|
        |"user@phptravels.com"| |"demouser"|
        
