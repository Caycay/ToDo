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
        [Route("api/list/{idList}/item/{idItem}")]
        [HttpGet]
        public Task<Item> GetItem(string idList, string idItem)
        {       
            return itemReposiotry.GetItemById(idItem, idList);
            
        }

        [HttpPut]
        public HttpResponseMessage UpdateItem(string id, Item item)
        {
            itemReposiotry.UpdateItem(id, item);
            return Request.CreateResponse<Item>(HttpStatusCode.OK, item);
        }
        [Route("api/list/{idList}/item/{idItem}")]
        [HttpDelete]
        public HttpResponseMessage Delete(string idList, string idItem)
        {
            itemReposiotry.DeleteList(idList, idItem);
            return Request.CreateResponse(HttpStatusCode.OK, "Delete");
        }
    }
}
