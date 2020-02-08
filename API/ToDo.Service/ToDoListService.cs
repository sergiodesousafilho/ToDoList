using System;
using ToDo.Domain.Entities;
using ToDo.Domain.Interfaces;
using ToDo.Repository.EF;
using System.Linq;

namespace ToDo.Service
{
    public class ToDoListService : IToDoListService
    {
        private readonly ToDoContext context;

        public ToDoListService(ToDoContext _context)
        {
            this.context = _context;
        }
    
        public ToDoList[] GetToDoList()
        {            
            return context.ToDoLists.ToArray();
        }
    }
}
;