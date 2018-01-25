using Api.Models;
using Api.Repo;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ItemController : ApiController
    {
        ItemRepository itemReposiotry = new ItemRepository();
        public ItemController()
        {
            itemReposiotry.CheckConnection();
        }
        [HttpPost]
        public HttpResponseMessage InsertItem(Item item)
        {
            itemReposiotry.InsertItem(item);
            return Request.CreateResponse<Item>(HttpStatusCode.Created, item);
        }
        [HttpGet]
        public async Task<List<Item>> GetAllList()
        {
            return await itemReposiotry._listOfItem.Find(new BsonDocument()).ToListAsync();
        }

        public HttpResponseMessage GetItem(string id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.Found, itemReposiotry.GetItemById(id));
            }
            catch (System.Exception)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "No Data found");
            }
        }
        [HttpPut]
        public HttpResponseMessage UpdateItem(string id, Item item)
        {
            itemReposiotry.UpdateItem(id, item);
            return Request.CreateResponse<Item>(HttpStatusCode.OK, item);
        }
        [HttpDelete]
        public HttpResponseMessage Delete(string id)
        {
            itemReposiotry.DeleteList(id);
            return Request.CreateResponse(HttpStatusCode.OK, "Delete");
        }
    }
}
