namespace Shared.ServiceModel
{
    public class Cached
    {
        public string Id { get; set; }
    }

    public class CachedResponse
    {
        public string Result { get; set; }
        public int Counter { get; set; }
    }
}