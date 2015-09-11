using System.ComponentModel;
using System.Configuration.Install;

namespace WindowsService
{
    [RunInstaller(true)]
    public partial class WinServiceInstaller : Installer
    {
        public WinServiceInstaller()
        {
            InitializeComponent();
        }
    }
}
