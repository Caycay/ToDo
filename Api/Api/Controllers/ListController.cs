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
using System.Web.Http.Description;


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
        public async Task<IHttpActionResult> GetAllList()
        {
            var lists = await listRepository.GetAllList();
            return Ok(lists);
        }
        [HttpPost]
        public HttpResponseMessage InsertList(ListOfItem list)
        {

            if (!ModelState.IsValid)
            {
                var allErrors = ModelState.Values.SelectMany(v => v.Errors);

                return Request.CreateResponse(HttpStatusCode.BadRequest, allErrors);
            }

            listRepository.InsertList(list);
            return Request.CreateResponse(HttpStatusCode.Created, list);
        }

        [ResponseType(typeof(ListOfItem))]
        [HttpGet]
        public async Task<IHttpActionResult> GetList(string id)
        {
            var list = await listRepository.GetListById(id);
            if(list != null)
            {
                return Ok(list);
            }
            return NotFound();
        }

        [HttpPut]
        public HttpResponseMessage UpdateList(string id, ListOfItem listOfItem)
        {
            
            if (!ModelState.IsValid)
            {
                var allErrors = ModelState.Values.SelectMany(v => v.Errors);

                return Request.CreateResponse(HttpStatusCode.BadRequest, allErrors);
            }
            var list = listRepository.UpdateList(id, listOfItem);

            if (list != null && !list.IsFaulted)
            {
                return Request.CreateResponse(HttpStatusCode.OK, listOfItem);
            }

            return Request.CreateResponse(HttpStatusCode.NotFound, "Sorry !");
        }

        [HttpDelete]
        public HttpResponseMessage Delete(string id)
        {
            var list =  listRepository.DeleteList(id);
            if (!list.Status.Equals(TaskStatus.Faulted)) 
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }

            return Request.CreateResponse(HttpStatusCode.NotFound, "Sorry!");
        }
    }
}
