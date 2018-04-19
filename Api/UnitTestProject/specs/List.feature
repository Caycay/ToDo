Feature: List

@mytag
Scenario Outline: Get all list
	Given sending a query to the database
	Then I got all lists
	Then the system should return 200

Scenario Outline: Get one list
	Given sending a query to the database with ID
	Then I got one list


Scenario Outline: Add new list
	Given I create a new list (<Name>, <Description>)
	And ModelState is correct
	Then the system should return <StatusCode>

Examples: 
	| Name | Description | StatusCode |
	| cat  | miau        | 200		  |
	| doge | wof         | 200        |

Scenario Outline: Edit list
	Given I can edit my list (<Name>, <Description>)
	And ModelState is correct
	Then the system should return <StatusCode>

Examples: 
	| Name  | Description | StatusCode |
	| hello | kitty       | 200		   |
