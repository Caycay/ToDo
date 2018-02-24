using Api.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Api.Repo
{
    public class ItemRepository
    {
        private IMongoClient _client;
        private IMongoDatabase _datebase;
        ListRepository listRepository = new ListRepository();
        public ItemRepository()
        {
            _client = new MongoClient("mongodb://localhost");
            _datebase = _client.GetDatabase("db1");
        }
        public bool CheckConnection()
        {
            try
            {
                _datebase.ListCollections();
            }
            catch (Exception e)
            {
                return false;
            }

            return true;
        }

        public async Task InsertItem(Item item)
        {
            item.id = ObjectId.GenerateNewId();
            ListOfItem listOfItem = await listRepository._listCollection.FindSync(_ => _.id == new ObjectId(item.listId)).SingleAsync();
            var filter = Builders<ListOfItem>.Filter.Eq(x => x.id, new ObjectId(item.listId));
            listOfItem.items.Add(item);
            await listRepository._listCollection.ReplaceOneAsync(filter, listOfItem);
        }
        public async Task<Item> GetItemById(string idItem, string idList)
        {
            ListOfItem listOfItem = await listRepository._listCollection.FindSync(_ => _.id == new ObjectId(idList)).SingleAsync();
            Item item = listOfItem.items.Find(_ => _.id == new ObjectId(idItem));
            return item;
        }
        public async Task UpdateItem(string id, Item item)
        {
            item.id = new ObjectId(id);
            var filterList = Builders<ListOfItem>.Filter.Eq(x => x.id, new ObjectId(item.listId));
            ListOfItem listOfItem = await listRepository._listCollection.FindSync(_ => _.id == new ObjectId(item.listId)).SingleAsync();
            Item oldItem = listOfItem.items.Find(x => x.id == item.id);
            oldItem.propertyNumber = item.propertyNumber;
            oldItem.propertyString = item.propertyString;
            oldItem.propertyString2 = item.propertyString2;

            await listRepository._listCollection.ReplaceOneAsync(filterList, listOfItem);

        }
        public async Task DeleteList(string idList, string idItem)
        {
            try
            {
                ListOfItem listOfItem = await listRepository._listCollection.FindSync(_ => _.id == new ObjectId(idList)).SingleAsync();
                var filterList = Builders<ListOfItem>.Filter.Eq(x => x.id, new ObjectId(idList));

                var item = listOfItem.items.FirstOrDefault(_ => _.id == new ObjectId(idItem));
                var newList = listOfItem.items.Remove(item);
                await listRepository._listCollection.ReplaceOneAsync(filterList, listOfItem);

            }
            catch (Exception e)
            {
                
                throw;
            }
        }
    }
}