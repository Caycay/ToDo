using System.Collections.Generic;
using TechTalk.SpecFlow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using RestSharp;
using System.Net;


namespace UnitTestProject
{

    [Binding]
    public class Steps
    {
        private string _content;
        private IRestResponse _restResponse;
        private HttpStatusCode _statusCode;
        private NewModelList _list;
        private NewModelItem _item;

        //List: S1 
        [Given(@"sending a query to the database")]
        public void GivenSendingAQueryToTheDatabase()
        {
            var request = new HttpRequestWrapper()
              .SetMethod(Method.GET)
              .SetResourse("http://localhost:62848/api/list");
            _restResponse = new RestResponse();
            _restResponse = request.Execute();
           // JsonConvert.DeserializeObject<NewModelList>(_restResponse.Content);
            _statusCode = _restResponse.StatusCode;
            _content = _restResponse.Content;
        }
        [Then(@"the system should return (.*)")]
        public void ThenTheSystemShouldReturn(HttpStatusCode statusCode)
        {
            Assert.AreEqual(_statusCode, statusCode);
        }

        //List: S2
        [Given(@"sending a list query to the database with (.*)")]
        public void GivenSendingAListQueryToTheDatabaseWith(string id)
        {
            var request = new HttpRequestWrapper()
                         .SetMethod(Method.GET)
                         .SetResourse("http://localhost:62848/api/list/" + id);

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
            _content = _restResponse.Content;
        }

        //List: S3
        [Given(@"I create a new list \((.*), (.*)\)")]
        public void GivenICreateANewList(string Name, string Descritpion)
        {
            List<NewModelItem> emptyListItems = new List<NewModelItem>();
            _list = new NewModelList()
            {

                name = Name,
                description = Descritpion,
                items = emptyListItems
            };
            Dictionary<string, string> header = new Dictionary<string, string>();
            header.Add("Accept", "application/json");
            header.Add("Content-type", "application/json");
            var request = new HttpRequestWrapper()
                .SetMethod(Method.POST)
                .AddHeaders(header)
                .SetResourse("http://localhost:62848/api/list")
                .AddJsonContent(_list);

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
        }

        //List: S4
        [Given(@"I can edit list \((.*), (.*), (.*)\)")]
        public void GivenICanEditList(string Name, string Descritpion, string id)
        {
            _list = new NewModelList()
            {
                name = Name,
                description = Descritpion,
            };
            Dictionary<string, string> header = new Dictionary<string, string>();
            header.Add("Accept", "application/json");
            header.Add("Content-type", "application/json");
            var request = new HttpRequestWrapper()
                .SetMethod(Method.PUT)
                .AddHeaders(header)
                .SetResourse("http://localhost:62848/api/list/" + id)
                .AddJsonContent(_list);

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
        }

        //List: S5
        [Given(@"I can delete list with (.*)")]
        public void GivenICanDeleteListWith(string id)
        {
            var request = new HttpRequestWrapper()
                                     .SetMethod(Method.DELETE)
                                     .SetResourse("http://localhost:62848/api/list/" + id);

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
            _content = _restResponse.Content;
        }

        //Item: S6
        [Given(@"I create a new item \((.*), (.*), (.*), (.*)\)")]
        public void GivenICreateANewItem(string prop1, string prop2, int propNum, string idList)
        {
            _item = new NewModelItem()
            {
                propertyString = prop1,
                propertyString2 = prop2,
                propertyNumber = propNum,
                listId = idList
            };
            Dictionary<string, string> header = new Dictionary<string, string>();
            header.Add("Accept", "application/json");
            header.Add("Content-type", "application/json");
            var request = new HttpRequestWrapper()
                .SetMethod(Method.POST)
                .AddHeaders(header)
                .SetResourse("http://localhost:62848/api/item")
                .AddJsonContent(_item);

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
        }
        //Item: S7
        [Given(@"sending a item query to the database with \((.*), (.*)\)")]
        public void GivenSendingAItemQueryToTheDatabaseWith(string idList, string idItem)
        {
            var request = new HttpRequestWrapper()
                         .SetMethod(Method.GET)
                         .SetResourse("http://localhost:62848/api/list/" + idList + "/item/" + idItem);

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
            _content = _restResponse.Content;
        }
        [Given(@"I update an item \((.*), (.*), (.*), (.*), (.*)\)")]
        public void GivenIUpdateAnItem(string prop1, string prop2, int propNum, string idItem, string idList)
        {
            _item = new NewModelItem()
            {
                propertyString = prop1,
                propertyString2 = prop2,
                propertyNumber = propNum,
                listId = idList,
            };
            Dictionary<string, string> header = new Dictionary<string, string>();
            header.Add("Accept", "application/json");
            header.Add("Content-type", "application/json");
            var request = new HttpRequestWrapper()
                .SetMethod(Method.PUT)
                .AddHeaders(header)
                .SetResourse("http://localhost:62848/api/item/"+ idItem)
                .AddJsonContent(_item);

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
        }
        [Given(@"I can delete item with \((.*), (.*)\)")]
        public void GivenICanDeleteItemWith(string idList, string idItem)
        {
            var request = new HttpRequestWrapper()
                                     .SetMethod(Method.DELETE)
                                     .SetResourse("http://localhost:62848/api/list/" + idList + "/item/" + idItem);

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
            _content = _restResponse.Content;
        }
    }


   
    public class NewModelList
    {
        public string name { get; set; }
        public string description { get; set; }
        public List<NewModelItem> items { get; set; }
       
    }
    //public class JsonList
    //{
    //    public JsonList(string json)
    //    {
    //        JObject jObject = JObject.Parse(json);
    //        name = (string)jObject["name"];
    //        description = (string)jObject["description"];
    //        items = 
    //    }
    //    public string name { get; set; }
    //    public string description { get; set; }
    //    public List<NewModelItem> items { get; set; }
    //}
    public class NewModelItem
    {
        public string propertyString { get; set; }
        public string propertyString2 { get; set; }
        public int propertyNumber { get; set; }
        public string listId { get; set; }
    }
}


