using System.Configuration;
using System.Web.Mvc;
using Funq;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Configuration;
using ServiceStack.Mvc;
using AspNetMvc4.ServiceInterface;
using AspNetMvc4.ServiceModel;

[assembly: WebActivator.PreApplicationStartMethod(typeof(AspNetMvc4.AppHost), "Start")]
//More info on how to integrate with MVC: https://github.com/ServiceStack/ServiceStack/wiki/Mvc-integration

namespace AspNetMvc4
{
    public class AppHost : AppHostBase
    {
        /// <summary>
        /// Default constructor.
        /// Base constructor requires a name and assembly to locate web service classes. 
        /// </summary>
        public AppHost()
            : base("AspNetMvc4", typeof(MyServices).Assembly)
        {

        }

        /// <summary>
        /// Application specific configuration
        /// This method should initialize any IoC resources utilized by your web service classes.
        /// </summary>
        /// <param name="container"></param>
        public override void Configure(Container container)
        {
            SetConfig(new HostConfig
            {
                HandlerFactoryPath = "api",
            });
            //Config examples
            //this.Plugins.Add(new PostmanFeature());
            //this.Plugins.Add(new CorsFeature());

            //Set MVC to use the same Funq IOC as ServiceStack
            ControllerBuilder.Current.SetControllerFactory(new FunqControllerFactory(container));
        }

        public static void Start()
        {
            new AppHost().Init();
        }
    }
}
