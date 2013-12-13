using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Funq;
using ServiceStack;
using ServiceStack.Api.Swagger;
using Shared.ServiceInterface;

namespace Mvc4.VirtualPath
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            //WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AuthConfig.RegisterAuth();

            new AppHost().Init();
        }
    }

    public class AppHost : AppHostBase
    {
        public AppHost() : base("MVC / IIS / Application Virtual Path", typeof(CachedServices).Assembly) {}

        public override void Configure(Container container)
        {
            Plugins.Add(new CorsFeature());
            Plugins.Add(new SwaggerFeature());

            container.Register(new TodoRepository());
            
            Routes.AddFromAssembly(typeof(CachedServices).Assembly);
        }
    }
}