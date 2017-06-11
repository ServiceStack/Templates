using System;
using System.Threading.Tasks;
using System.IO;
using Funq;
using ServiceStack;
using Squirrel;
using ReactDesktopApps.Resources;
using ReactDesktopApps.ServiceInterface;

namespace ReactDesktopApps.AppWinForms
{
    public class AppHost : AppSelfHostBase
    {
        public AppHost()
            : base("ReactDesktopApps.AppWinForms", typeof(MyServices).Assembly) { }

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
