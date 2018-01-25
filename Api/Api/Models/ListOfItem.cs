using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Api.Models
{
    public class ListOfItem
    {
        [BsonId]
        public ObjectId id { get; set; }
        [BsonElement("name")]
        public string name { get; set; }
        [BsonElement("description")]
        public string description { get; set; }
        [BsonElement("items")]
        public List<Item> items { get; set; }
    }
}