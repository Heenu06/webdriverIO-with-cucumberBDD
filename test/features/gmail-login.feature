Feature:  send an email

  As a user on the gmail
  I want to login
  Because I want to send a mail




  Scenario Outline: Sending an email
    Given I am on the gmail page
    When I enter username <user> into the text box and click next
    When I enter password <password> into the text box and click next
    When I click on compose button
    And I enter TO email id <email> and subject <subject> and <message>
    #Then email should sent successfully


    Examples:
      |user|password|email|subject|message|
      |"heenupathak06@gmail.com"|"************"|"heenu_rocking@yahoo.com"|"Testing"|"This mail is for testing purpose"|

