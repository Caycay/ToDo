export const apiServer = {
    url: 'http://localhost:62848',
    method: {
        lists: '/api/list',
        listWithId: '/api/list/:id/',
        items: '/api/item',
        itemWithId: '/api/item/:id',
        itemWithListId: '/api/list/:idL/item/:idI',
        listItemWithId: '/api/list/:id/items'
    }
};