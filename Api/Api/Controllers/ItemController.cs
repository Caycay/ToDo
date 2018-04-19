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
            if (!ModelState.IsValid)
            {
                var allErrors = ModelState.Values.SelectMany(v => v.Errors);

                return Request.CreateResponse(HttpStatusCode.BadRequest, allErrors);
            }

            itemReposiotry.InsertItem(item);
            return Request.CreateResponse<Item>(HttpStatusCode.Created, item);
        }
        [Route("api/list/{idList}/item/{idItem}")]
        [HttpGet]
        public async Task<IHttpActionResult> GetItem(string idList, string idItem)
        {       
            var item = await itemReposiotry.GetItemById(idItem, idList);
            if(item != null)
            {
                return Ok(item);
            }
            return NotFound();
        }

        [HttpPut]
        public HttpResponseMessage UpdateItem(string id, Item item)
        {
            if (!ModelState.IsValid)
            {
                var allErrors = ModelState.Values.SelectMany(v => v.Errors);

                return Request.CreateResponse(HttpStatusCode.BadRequest, allErrors);
            }
            var newItem = itemReposiotry.UpdateItem(id, item);
            if(newItem != null && !newItem.IsFaulted)
            {
                return Request.CreateResponse(HttpStatusCode.OK, item);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound, item);
        }
        [Route("api/list/{idList}/item/{idItem}")]
        [HttpDelete]
        public HttpResponseMessage Delete(string idList, string idItem)
        {
            var item = itemReposiotry.DeleteList(idList, idItem);
            if (!item.Status.Equals(TaskStatus.Faulted))
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
            return Request.CreateResponse(HttpStatusCode.OK, "Delete");
        }
    }
}
