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
            if (list.id == ObjectId.Empty)
            {
                list.id = ObjectId.GenerateNewId();
            }
            await _listCollection.InsertOneAsync(list);
        }

        public async Task<List<ListOfItem>> GetAllList()
        {
            return await _listCollection.Find(new BsonDocument()).ToListAsync();
        }
        public async Task<ListOfItem> GetListById(string id)
        {
            return await _listCollection.Find(x => x.id == new ObjectId(id)).SingleOrDefaultAsync();

        }
        public async Task<bool> UpdateList(string id, ListOfItem loi)
        {

            loi.id = new ObjectId(id);
            ListOfItem oldList = _listCollection.Find(x => x.id == loi.id).Single();
            loi.items = oldList.items;
            ReplaceOneResult actionResult = await _listCollection.ReplaceOneAsync(_ => _.id.Equals(id), loi, new UpdateOptions { IsUpsert = true });

            return actionResult.IsAcknowledged && actionResult.ModifiedCount > 0;

        }
        public async Task DeleteList(string id)
        { 
            _listCollection.FindOneAndDelete(_ => _.id == new ObjectId(id));
        }
    }
}