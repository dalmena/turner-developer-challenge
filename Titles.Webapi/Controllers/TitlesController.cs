using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Titles.Webapi.Models;

namespace Titles.Webapi.Controllers
{
    public class TitlesController : ApiController
    {
        [Route("titles")]
        public IEnumerable<Title> GetTitles()
        {
            using (TitlesEntitiesConnection db = new TitlesEntitiesConnection()) {
                var titles = db.Titles.ToList();
                return titles;
            }
        }
    }
}
