using MongoDB.Driver;
using MongoDB.Bson;
using Api.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;

namespace Api.Repo
{
    public class ListRepository
    {
        private IMongoClient _client;
        private IMongoDatabase _datebase;
        public IMongoCollection<ListOfItem> _listCollection;

        public ListRepository()
        {
            _client = new MongoClient("mongodb://localhost");
            _datebase = _client.GetDatabase("db1");
            _listCollection = _datebase.GetCollection<ListOfItem>("lists");
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

        public async Task InsertList(ListOfItem list)
        {
            await _listCollection.InsertOneAsync(list);
        }

        public async Task<List<ListOfItem>> GetAllList()
        {
            return await _listCollection.Find(new BsonDocument()).ToListAsync();
        }
        public async Task<ListOfItem> GetListById(string id)
        {
            //  var list = _listCollection.Find(x=>x.Id == id);
            var result = await _listCollection.FindSync(_ => _.id == new ObjectId(id)).SingleAsync();
            return result;
        }
        public async Task UpdateList(string id, ListOfItem loi)
        {
            try
            {
                var list = _listCollection.Find(_ => _.id == new ObjectId(id)).SingleOrDefault();
                list.name = loi.name;
                list.description = loi.description;
                var filter = Builders<ListOfItem>.Filter.Eq(x => x.id, new ObjectId(id));
                await _listCollection.ReplaceOneAsync(filter, list);

            }
            catch(Exception e)
            {
                throw e;
            }
        }
        public async Task DeleteList(string id)
        {
            var result = await _listCollection.FindOneAndDeleteAsync(_ => _.id == new ObjectId(id));
        }
    }
}