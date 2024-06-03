
@REGRESSION

Feature: Recent Activity

    
       
         Scenario Outline: Recent Activity search by reference

        Given the user is on the adviser platform login page
        When the user enters valid details and logs in
        Then the user can navigate to recent activity
        When the user search by a "<reference>"  "<number>"
        Then the user click search button should show results matching "<searchCriteria>"
       

        Examples:
        |reference|number|searchCriteria|
        |fullreference|UBTL0461719|UBTL0461719|
        |partialreference|1719|UBTL0461719|
       
        
       Scenario Outline: Recent Activity search by name

        Given the user is on the adviser platform login page
        When the user enters valid details and logs in
        Then the user can navigate to recent activity
        When the user search by client first or last name "<firstnlastname>" or a combination of both
        Then the user click search button should show results matching "<searchCriteria>"


        Examples:
        |firstnlastname|searchCriteria|
        |Rosalie|Rosalie Parsons|
        |Parsons|Rosalie Parsons|
        |Rosalie Parsons|Rosalie Parsons|
       
        Scenario Outline: Recent Activity search by postcode

        Given the user is on the adviser platform login page
        When the user enters valid details and logs in
        Then the user can navigate to recent activity
        When the user search by "<postcode>"
        Then the user click search button should show results matching "<searchCriteria>"
        
        

        Examples:
       |postcode|searchCriteria|
       |SE14 6TA|SE14 6TA |
       
        Scenario Outline: Recent Activity search by all and verify reset

        Given the user is on the adviser platform login page
        When the user enters valid details and logs in
        Then the user can navigate to recent activity
        When the user user search by a full or partial "<reference>"
        And  the user search by client first or last name "<firstnlastname>" or a combination of both
        And  the user search by "<postcode>"
        Then the user click search button should show results matching "<searchCriteria>"
        And the user reset the search fields, showing all recent activity


        Examples:
        |reference|firstnlastname|postcode|searchCriteria|
        |UBTL0461719|Parsons|SE14 6TA|UBTL0461719|

    Scenario Outline: Recent Activity search by invalid reference and name and postcode

        Given the user is on the adviser platform login page
        When the user enters valid details and logs in
        Then the user can navigate to recent activity
        When the user search by a invalid reference "<reference>"
        When the user search by client first or last name "<firstnlastname>" or a combination of both
        Then the user click search button should not show any results


        Examples:
        |reference|firstnlastname|
        |sdfsdfsda|jjk|   

 Scenario Outline: Recent Activity search by invalid postcode and shuld see error text for postcode

        Given the user is on the adviser platform login page
        When the user enters valid details and logs in
        Then the user can navigate to recent activity
        When the user search by invalid "<postcode>"
        Then the user should see errormessage
        
        

        Examples:
       |postcode|
       |test|

       Scenario Outline: Recent Activity search by invalid name and shuld see error text for name

        Given the user is on the adviser platform login page
        When the user enters valid details and logs in
        Then the user can navigate to recent activity
        When the user search by client invalid first or last name "<firstnlastname>"
        Then click search button should see errot text for name


        Examples:
        |firstnlastname|
        |7yu|