using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MediaManager.Startup))]
namespace MediaManager
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
