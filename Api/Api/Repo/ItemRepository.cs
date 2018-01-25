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
        public IMongoCollection<Item> _listOfItem;
        ListRepository listRepository = new ListRepository();
        public ItemRepository()
        {
            _client = new MongoClient("mongodb://localhost");
            _datebase = _client.GetDatabase("listDatabase2");
            _listOfItem = _datebase.GetCollection<Item>("items");
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
            ListOfItem listOfItem = await listRepository._listCollection.FindSync(_ => _.id == new ObjectId(item.listId)).SingleAsync();
            var filter = Builders<ListOfItem>.Filter.Eq(x => x.id, new ObjectId(item.listId));

            listOfItem.items.Add(item);
             _listOfItem.InsertOne(item);
           await listRepository._listCollection.ReplaceOneAsync(filter, listOfItem);
        }

        public async Task<List<Item>> GetAllList()
        {
            return await _listOfItem.Find(new BsonDocument()).ToListAsync();
        }
        public async Task<Item> GetItemById(string id)
        {
            //  var list = _listCollection.Find(x=>x.Id == id);
            var result = await _listOfItem.FindSync(_ => _.id == new ObjectId(id)).SingleAsync();
            return result;
        }
        public async Task UpdateItem(string id, Item item)
        {
            item.id = new ObjectId(id);
            var filter = Builders<Item>.Filter.Eq(x => x.id, new ObjectId(id));
            var filterList = Builders<ListOfItem>.Filter.Eq(x => x.id, new ObjectId(item.listId));
            ListOfItem listOfItem = await listRepository._listCollection.FindSync(_ => _.id == new ObjectId(item.listId)).SingleAsync();
            Item oldItem = listOfItem.items.Find(x => x.id == item.id);
            oldItem.propertyNumber = item.propertyNumber;
            oldItem.propertyString = item.propertyString;
            oldItem.propertyString2 = item.propertyString2;

            var result =  _listOfItem.ReplaceOne(filter, item);
            await listRepository._listCollection.ReplaceOneAsync(filterList, listOfItem);

        }
        public async Task DeleteList(string id)
        {
            var result = await _listOfItem.FindOneAndDeleteAsync(_ => _.id == new ObjectId(id));
        }
    }
}