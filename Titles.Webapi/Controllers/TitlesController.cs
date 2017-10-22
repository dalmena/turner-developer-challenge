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
        public IEnumerable<Title> GetTitles(string search)
        {
            using (TitlesEntitiesConnection db = new TitlesEntitiesConnection())
            {
                if (string.IsNullOrWhiteSpace(search)) return db.Titles.OrderBy(x => x.TitleNameSortable).ToList();
                return db.Titles.Where(x => x.TitleName.Contains(search) || x.ReleaseYear.ToString().Contains(search)).OrderBy(x => x.TitleNameSortable).ToList();
            }
        }

    }
}
