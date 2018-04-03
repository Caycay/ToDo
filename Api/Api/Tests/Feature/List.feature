Feature: List

Scenario Outline: Add list
	Given I create a new list (<Name>, <Description>)
	And ModelState is correct
	Then the system should return <StatusCode>

Examples: 
	| Name | Description | StatusCode |
	| cat  | miau        | 200        |
	| doge | wof         | 200        |