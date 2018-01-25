using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
namespace Api.Models
{
    public class Item
    {
        [BsonElement("property")]
        public string propertyString { get; set; }
        [BsonElement("property_2")]
        public string propertyString2 { get; set; }
        [BsonElement("property_number")]
        public int propertyNumber { get; set; }
        [BsonId]
        public ObjectId id { get; set; }
        [BsonElement("done")]
        public bool done { get; set; }
        [BsonElement("idList")]
        public string listId { get; set; }
    }
}