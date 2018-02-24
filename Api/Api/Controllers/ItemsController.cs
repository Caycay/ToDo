using Api.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ItemsController : ApiController
    {
        ItemsRepository itemsRepository = new ItemsRepository();
        public ItemsController()
        {

        }
        [Route("api/list/{id}/items")]
        [HttpGet]
        public async Task<List<Item>> GetItemsInList(string id)
        {
            return await itemsRepository.GetListItems(id);        
        }
    }
}
