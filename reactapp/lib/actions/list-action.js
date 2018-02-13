import * as types from "./action-types";
import ListService from "../api/list-service";

export function xsetList(){
    return{
        type: "CHANGE_LIST",
        payload:
            [{
                id: 1,
                name: "list1",
                description: "mylist",
                items: [
                    {
                        id: 5,
                        name: "item1",
                        number: 2
                    },
                    {
                        id: 6,
                        name: "item2",
                        number: 6
                    }
                ]
            },
                {
                    id: 2,
                    name: "list2",
                    description: "mylist",
                    items: [
                        {
                            id: 7,
                            name: "item3",
                            number: 2
                        },
                        {
                            id: 8,
                            name: "item4",
                            number: 6
                        }
                    ]
                },
            ]
    }
}
export function setList(){
    debugger;
        return {
            type: types.LOAD_LISTS,
            payload: ListService.getAllLists()
        };
}
