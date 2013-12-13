using System;
using System.Diagnostics;
using Funq;
using ServiceStack;
using ServiceStack.Api.Swagger;
using Shared.ServiceInterface;

namespace HttpListener.RootPath
{
    class Program
    {
        private const string ListeningOn = "http://*:7337/";

        static void Main(string[] args)
        {
            new AppHost()
                .Init()
                .Start(ListeningOn);

            Process.Start(ListeningOn.Replace("*", "127.0.0.1"));
            Console.WriteLine("Press Enter to Stop...");
            Console.ReadLine();
        }
    }

    public class AppHost : AppHostHttpListenerBase
    {
        public AppHost() : base("HttpListener / Root Path", typeof(CachedServices).Assembly) { }

        public override void Configure(Container container)
        {
            Plugins.Add(new CorsFeature());
            Plugins.Add(new SwaggerFeature());

            container.Register(new TodoRepository());
            
            Routes.AddFromAssembly(typeof(CachedServices).Assembly);
        }
    }
}
