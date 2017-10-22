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

        [Route("title/{titleId}")]
        public object GetTitleDetail(int titleId)
        {
            using (TitlesEntitiesConnection db = new TitlesEntitiesConnection())
            {
                var title = (from t in db.Titles
                                            .Include("Awards")
                                            .Include("OtherNames")
                                            .Include("StoryLines")
                                            .Include("TitleGenres")
                                            .Include("TitleGenres.Genre")
                                            .Include("TitleParticipants")
                                            .Include("TitleParticipants.Participant")
                            where t.TitleId == titleId
                            select new
                            {
                                t.TitleId,
                                t.TitleName,
                                t.ReleaseYear,
                                Awards = t.Awards.Select(x => new
                                {
                                    Award = x.Award1,
                                    x.AwardCompany,
                                    x.AwardWon,
                                    x.AwardYear
                                }).ToList(),
                                OtherNames = t.OtherNames.Select(x => new
                                {
                                    x.TitleName,
                                    x.TitleNameLanguage,
                                    x.TitleNameType
                                }).ToList(),
                                StoryLines = t.StoryLines.Select(x => new
                                {
                                    x.Description,
                                    x.Language,
                                    x.Type
                                }).ToList(),
                                TitleGenres = t.TitleGenres.Select(x => new
                                {
                                    x.Genre.Name                                    
                                }).ToList(),
                                TitleParticipants = t.TitleParticipants.Select(x => new
                                {
                                    x.IsKey,
                                    x.IsOnScreen,
                                    x.RoleType,
                                    x.Participant.Name,
                                    x.Participant.ParticipantType
                                }).ToList(),

                            }).FirstOrDefault();

                return title;
            }
        }
    }
}
