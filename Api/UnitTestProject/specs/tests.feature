Feature: Tests

@list
Scenario: Get all list
	Given sending a query to the database
	Then the system should return 200

Scenario Outline: Get one list
	Given sending a list query to the database with <Id>
	Then the system should return <StatusCode>

Examples: 
| Id                       | StatusCode |
| 5adc9d7f64af59197cc15767 | 200        |
| kitty                    | 500        |

Scenario Outline: Add new list
	Given I create a new list (<Name>, <Description>)
	Then the system should return <StatusCode>

Examples: 
	| Name | Description | StatusCode |
	| cat  | miau        | 201		  |
	| doge | wof         | 201        |

Scenario Outline: Edit list
	Given I can edit list (<Name>, <Description>, <Id>)
	Then the system should return <StatusCode>

Examples: 
	| Name  | Description | StatusCode | Id                       |
	| hello | kitty       | 200        | 5adc9d7f64af59197cc15767 |
	| hello | kitty       | 404        | kitty					  |

Scenario Outline: Delete List
	Given I can delete list with <id>
	Then the system should return <StatusCode>

Examples: 
| id                       | StatusCode |
| kitty                    | 404        |
#| 5adb801c64af5917e8a8eb41 | 204        |


@items
Scenario Outline: Add item to list
	Given I create a new item (<Prop1>, <Prop2>, <PropNum>, <ListId>)
	Then the system should return <StatusCode>

	Examples: 
	| ListId                   | StatusCode | Prop1 | Prop2 | PropNum |
	| 5adc9d7f64af59197cc15767 | 201        | prop1 | prop2 | 33      |

Scenario Outline: Get one item
	Given sending a item query to the database with (<IdList>, <IdItem>)
	Then the system should return <StatusCode>
	
	Examples: 
	| IdList                   | IdItem                   | StatusCode |
	| 5adc9d7f64af59197cc15767 | 5adca73064af59197cc15774 | 200        |

Scenario Outline: Update item
	Given I update an item (<Prop1>, <Prop2>, <PropNum>, <IdItem>, <IdList>)
	Then the system should return <StatusCode>

	Examples: 
	| IdItem                   | StatusCode | Prop1 | Prop2 | PropNum | IdList                   |
	| 5adca73064af59197cc15774 | 200        | hello | kitty | 3020    | 5adc9d7f64af59197cc15767 |

Scenario Outline: Delete Item
	Given I can delete item with (<IdList>, <IdItem>)
	Then the system should return <StatusCode>

Examples: 
| IdList | StatusCode | IdItem |
| kitty  | 404        | hello  |
#| 5adca73064af59197cc15774 | 204        |