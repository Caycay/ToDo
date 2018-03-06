
export const apiServer = {
  url: 'http://localhost:62848',
  method: {
    lists: '/api/list',
    item: '/api/item',
    listWithId: '/api/list/:id',
    items: '/api/list/:id/items',
    itemWithId: '/api/item/:id',
    itemsWithIdList: '/api/list/:id/items/:idItem'
  }
};
