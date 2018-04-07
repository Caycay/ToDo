using System;
using TechTalk.SpecFlow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Api.Models;
using RestSharp;
using System.Net;

namespace UnitTestProject
{

    [Binding]
    public class SpecFlowFeature1Steps
    {
        private int result;
        private IRestResponse _restResponse;
        private HttpStatusCode _statusCode;
        private ListOfItem _list;

        [Given(@"I can edit my list \(hello, kitty\)")]
        public void GivenICanEditMyListHelloKitty()
        {
            ScenarioContext.Current.Pending();
        }
        [Given(@"I create a new list \((.*), (.*)\)")]
        public void GivenICreateANewList(string Name, string Descritpion)
        {
            _list = new ListOfItem()
            {
                name = Name,
                description = Descritpion
            };
            var request = new HttpRequestWrapper()
                .setMethod(Method.POST)
                .SetResource("/api/list")
                .AddJsonContent(_list);
            _restResponse = new RestResponse();
            _restResponse = request.Execute();
            _statusCode = _restResponse.StatusCode;
            ScenarioContext.Current.Add("list", _list);
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
            Assert.AreEqual(statusCode, HttpStatusCode.OK);
        }

    }
}

