Feature: List

@mytag
Scenario Outline: Add new list
	Given I create a new list (<Name>, <Description>)
	And ModelState is correct
	Then the system should return <StatusCode>

Examples: 
	| Name | Description | StatusCode |
	| cat  | miau        | 200		  |
	| doge | wof         | 200        |

@mytag
Scenario Outline: Edit list
	Given I can edit my list (<Name>, <Description>)
	And ModelState is correct
	Then the system should return <StatusCode>

Examples: 
	| Name  | Description | StatusCode |
	| hello | kitty       | 200		   |
