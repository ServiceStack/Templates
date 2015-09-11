using ServiceStack;
using Shared.ServiceModel;

namespace Shared.ServiceInterface
{
    public class CachedServices : Service
    {
        public static int Counter;

        public object Any(Cached request)
        {
            return base.Request.ToOptimizedResultUsingCache(this.Cache, "cache:{0}".Fmt(request.Id), () =>
                new CachedResponse { Result = request.Id, Counter = Counter++ });
        }
    }
}
