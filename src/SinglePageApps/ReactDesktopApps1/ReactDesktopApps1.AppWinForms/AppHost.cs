using System;
using System.Threading.Tasks;
using System.IO;
using Funq;
using ServiceStack;
using Squirrel;
using ReactDesktopApps1.Resources;
using ReactDesktopApps1.ServiceInterface;

namespace ReactDesktopApps1.AppWinForms
{
    public class AppHost : AppSelfHostBase
    {
        public AppHost()
            : base("ReactDesktopApps1.AppWinForms", typeof(MyServices).Assembly) { }

        public override void Configure(Container container)
        {
            SetConfig(new HostConfig
            {
                DebugMode = true,
                EmbeddedResourceBaseTypes = { typeof(AppHost), typeof(SharedEmbeddedResources) },
                UseCamelCase = true,
            });
        }
    }
}
