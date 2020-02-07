using System;
using System.Collections.Generic;
using System.Text;

namespace ToDo.Domain.Entities
{
    public class ToDoTask
    {
        public int Id { get; set; }
        public int ToDoListId { get; set; }
        public string Name { get; set; }
        public bool Done { get; set; }
        public int UserId { get; set; }
    }
}
