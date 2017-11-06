using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClearSkiesWebAPI.Models;
using System.Web.Script.Serialization;
using System.Diagnostics;
using System.Text;

namespace ClearSkiesWebAPI.Controllers
{
    public class StdSpmController : ApiController
    {
        public HttpResponseMessage Get()
        {
            //??????????????
            var alleSporsmaal = new List<StandardSporsmaal>();
            using (var db = new SporsmaalDb())
            {
                alleSporsmaal = db.StdSporsmaal.ToList();
            }
            //???????????????

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(alleSporsmaal);

                Debug.WriteLine("--------------------------- \n\r" + JsonString);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }



    }
}
