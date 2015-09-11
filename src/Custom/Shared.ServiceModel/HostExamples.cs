using System.Collections.Generic;
using ServiceStack;

namespace Shared.ServiceModel
{
    //Request DTO
    public class Hello
    {
        public string Name { get; set; }
    }

    //Response DTO
    public class HelloResponse
    {
        public string Result { get; set; }

        public ResponseStatus ResponseStatus { get; set; } //Where Exceptions get auto-serialized
    }

    //REST Resource DTO
    [Route("/todos")]
    [Route("/todos/{Ids}")]
    public class Todos : IReturn<List<Todo>>
    {
        public long[] Ids { get; set; }
        public Todos(params long[] ids)
        {
            this.Ids = ids;
        }
    }

    [Route("/todos", "POST")]
    [Route("/todos/{Id}", "PUT")]
    public class Todo : IReturn<Todo>
    {
        public long Id { get; set; }
        public string Content { get; set; }
        public int Order { get; set; }
        public bool Done { get; set; }
    }
}