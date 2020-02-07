using System;
using System.Collections.Generic;
using System.Text;

namespace ToDo.Domain.Entities
{
    public class ToDoList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public bool Done { get; set; }
    }
}
