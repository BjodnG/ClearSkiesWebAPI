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
        DbMetoder dbMetoder = new DbMetoder();

        [HttpGet]
        [Route("api/StdSpm/StdSpmList")]
        public HttpResponseMessage StdSpmList()
        {

            var alleSporsmaal = dbMetoder.hentAlleStdSporsmaal();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(alleSporsmaal);

                Debug.WriteLine("--------------------------- \n\r" + JsonString);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        public HttpResponseMessage Post(NyttSporsmaal NyttSpm)
        {
            Debug.WriteLine("--------------------------- \n\r" + "Utenfor validering");
            if (ModelState.IsValid)
            {
                Debug.WriteLine("--------------------------- \n\r" + "Innenfor validering");
                bool ok = dbMetoder.leggTilNyttSporsmaal(NyttSpm);
                if (ok)
                {
                    Debug.WriteLine("--------------------------- \n\r" + "Godkjent LeggTil.");
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };
                }

            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.NotFound,
                Content = new StringContent("innsending av spørsmål feilet. Prøv igjen senere.")
            };
        }

        [HttpGet]
        [Route("api/StdSpm/NyeSpmList")]
        public HttpResponseMessage NyeSpmList()
        {

            var alleSporsmaal = dbMetoder.hentAlleNyeSporsmaal();

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
