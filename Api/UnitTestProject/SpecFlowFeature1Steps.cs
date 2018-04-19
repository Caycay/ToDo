using System.Collections.Generic;
using TechTalk.SpecFlow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Api.Models;
using RestSharp;
using System.Net;
using MongoDB.Bson;
using System.Web.Script.Serialization;


namespace UnitTestProject
{

    [Binding]
    public class SpecFlowFeature1Steps
    {
        private int result;
        private string _content;
        private IRestResponse _restResponse;
        private HttpStatusCode _statusCode;
        private ListOfItem _list;
        private List<ListOfItem> _lists;
        private ListOfItem _newList;

        [Given(@"sending a query to the database")]
        public void GivenSendingAQueryToTheDatabase()
        {
            var request = new HttpRequestWrapper()
              .SetMethod(Method.GET)
              .SetResourse("http://localhost:62848/api/list");

            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
            _content = _restResponse.Content;
        }

        [Given(@"sending a query to the database with ID")]
        public void GivenSendingAQueryToTheDatabaseWithID()
        {
            ScenarioContext.Current.Pending();
        }

        [Then(@"I got all lists")]
        public void ThenIGotAllLists()
        {
            ScenarioContext.Current.Pending();
        }

        [Then(@"I got one list")]
        public void ThenIGotOneList()
        {
            ScenarioContext.Current.Pending();
        }


        [Given(@"I can edit my list \(hello, kitty\)")]
        public void GivenICanEditMyListHelloKitty()
        {
            ScenarioContext.Current.Pending();
        }
        [Given(@"I create a new list \((.*), (.*)\)")]
        public void GivenICreateANewList(string Name, string Descritpion)
        {
          
            //_list = new ListOfItem()
            //{
            //    name = Name,
            //    id = ObjectId.Empty,
            //    description = Descritpion
            //};
            //Dictionary<string, string> header = new Dictionary<string, string>();
            //header.Add("Accept", "application/json");
            //header.Add("Content-type", "application/json");

            //var request = new HttpRequestWrapper()
            //    .SetMethod(Method.POST)
            //    .AddHeaders(header)
            //    .SetResourse("http://localhost:62848/api/list")
            //    .AddJsonContent("{\"name:\" \"sds\"}");

            //_restResponse = new RestResponse();
            //_restResponse = request.Execute();
            //_statusCode = _restResponse.StatusCode;
            //FeatureContext.Current.Set<ListOfItem>(_list);
            //FeatureContext.Current.Set(_list, "ListKey");
        }
        [Given(@"ModelState is correct")]
        public void GivenModelStateIsCorrect()
        {
            Assert.IsTrue(!string.IsNullOrEmpty(_list.name));
            Assert.IsTrue(!string.IsNullOrEmpty(_list.description));
        }
        [Then(@"the system should return (.*)")]
        public void ThenTheSystemShouldReturn(HttpStatusCode statusCode)
        {
            Assert.AreEqual(_statusCode, statusCode);
        }
        [Given(@"I request to view all list")]
        public void GivenIRequestToViewAllList()
        {
            var request = new HttpRequestWrapper()
                .SetMethod(Method.GET)
                .SetResourse("http://localhost:62848/api/list");
            //.AddParameter("id", _property.Id);
            _lists = new List<ListOfItem>();
            _lists = request.Execute<List<ListOfItem>>();
        }
        [Given(@"want to see my new list")]
        public void GivenWantToSeeMyNewList()
        {
            var listByType = FeatureContext.Current.Get<ListOfItem>();
            if (_lists != null) {
                _newList = _lists.Find(x => x.name == listByType.name && x.description == listByType.description);
            }
            else
            {
                Assert.IsTrue(true);
            }
        }
  
        [Then(@"want to get id")]
        public void ThenWantToGetId()
        {

            Assert.IsFalse(false);
        }
    }
}


