using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Api.Models;
using Api.Repo;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Net.Http;
using System.Net;
using System.Web.Http.Cors;

namespace Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ListController : ApiController
    {
        ListRepository listRepository = new ListRepository();
        public ListController()
        {
            listRepository.CheckConnection();
        }
        [HttpGet]
        public async Task<List<ListOfItem>> GetAllList()
        {
            return await listRepository._listCollection.Find(new BsonDocument()).ToListAsync();
        }
        [HttpPost]
        public HttpResponseMessage InsertList(ListOfItem list)
        {
            listRepository.InsertList(list);
            return Request.CreateResponse<ListOfItem>(HttpStatusCode.Created, list);
        }
        
        public HttpResponseMessage GetList(string id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.Found, listRepository.GetListById(id));
            }
            catch (System.Exception)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "No Data found");
            }
        }
        [HttpPut]
        public HttpResponseMessage UpdateList(string id, ListOfItem listOfItem)
        {
            listRepository.UpdateList(id, listOfItem);
            return Request.CreateResponse<ListOfItem>(HttpStatusCode.OK, listOfItem);
        }
        [HttpDelete]
        public HttpResponseMessage Delete(string id)
        {
            listRepository.DeleteList(id);
            return Request.CreateResponse(HttpStatusCode.OK, "Delete");
        }
    }
}
