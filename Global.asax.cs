using MediaManager.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace MediaManager
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            Database.SetInitializer<MusicDBContext>(new DropCreateDatabaseIfModelChanges<MusicDBContext>());
            Database.SetInitializer<MovieDBContext>(new DropCreateDatabaseIfModelChanges<MovieDBContext>());
            Database.SetInitializer<GameDBContext>(new DropCreateDatabaseIfModelChanges<GameDBContext>());
            Database.SetInitializer<RequestDBContext>(new DropCreateDatabaseIfModelChanges<RequestDBContext>());
        }
    }
}
