using System.Collections.Generic;
using System.Linq;
using ServiceStack;
using Shared.ServiceModel;

namespace Shared.ServiceInterface
{
    public class HelloService : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = "Hello, " + request.Name };
        }
    }

    public class TodosService : Service
    {
        public TodoRepository Repository { get; set; }  //Injected by IOC

        public object Get(Todos request)
        {
            return request.Ids.IsEmpty()
                ? Repository.GetAll()
                : Repository.GetByIds(request.Ids);
        }

        public object Post(Todo todo)
        {
            return Repository.Store(todo);
        }

        public object Put(Todo todo)
        {
            return Repository.Store(todo);
        }

        public void Delete(Todos request)
        {
            Repository.DeleteByIds(request.Ids);
        }
    }

    public class TodoRepository
    {
        List<Todo> todos = new List<Todo>();

        public List<Todo> GetByIds(long[] ids)
        {
            return todos.Where(x => ids.Contains(x.Id)).ToList();
        }

        public List<Todo> GetAll()
        {
            return todos;
        }

        public Todo Store(Todo todo)
        {
            var existing = todos.FirstOrDefault(x => x.Id == todo.Id);
            if (existing == null)
            {
                var newId = todos.Count > 0 ? todos.Max(x => x.Id) + 1 : 1;
                todo.Id = newId;
                todos.Add(todo);
            }
            else
            {
                existing.PopulateWith(todo);
            }
            return todo;
        }

        public void DeleteByIds(params long[] ids)
        {
            todos.RemoveAll(x => ids.Contains(x.Id));
        }
    }

    /*  Example calling above Service with ServiceStack's C# clients:

        var client = new JsonServiceClient(BaseUri);
        List<Todo> all = client.Get(new Todos());           // Count = 0

        var todo = client.Post(
            new Todo { Content = "New TODO", Order = 1 });      // todo.Id = 1
        all = client.Get(new Todos());                      // Count = 1

        todo.Content = "Updated TODO";
        todo = client.Put(todo);                            // todo.Content = Updated TODO

        client.Delete(new Todos(todo.Id));
        all = client.Get(new Todos());                      // Count = 0

    */
}