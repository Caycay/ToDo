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
    public class ItemsRepository
    {
        private IMongoClient _client;
        private IMongoDatabase _datebase;
        public IMongoCollection<ListOfItem> _listCollection;

        public ItemsRepository()
        {
            _client = new MongoClient("mongodb://localhost");
            _datebase = _client.GetDatabase("db1");
            _listCollection = _datebase.GetCollection<ListOfItem>("lists");
        }


        public async Task<List<Item>> GetListItems(string id)
        {
            //  var list = _listCollection.Find(x=>x.Id == id);
        
            var result = _listCollection.Find(_ => _.id == new ObjectId(id)).FirstOrDefault();
            return result.items;
        }
    }
}