using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using System.Net.Http.Formatting;
using System.Web.Http.Cors;

namespace Titles.Webapi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API CORS
            var options = new EnableCorsAttribute("*", "*", "*", "sessionexpire");
            options.SupportsCredentials = true;
            options.PreflightMaxAge = Int64.MaxValue;
            config.EnableCors(options);
          
            // Web API routes
            config.MapHttpAttributeRoutes();

            // Web API json setup
            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.None;
            json.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
            json.SerializerSettings.MissingMemberHandling = MissingMemberHandling.Ignore;
            json.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Local;
        }
    }
}
