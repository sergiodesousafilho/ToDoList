using Microsoft.EntityFrameworkCore;
using System;
using ToDo.Domain.Entities;

namespace ToDo.Repository.EF
{
    public class ToDoContext: DbContext
    {
        public ToDoContext(DbContextOptions options): base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }

        public DbSet<ToDoList> ToDoLists { get; set; }

        public DbSet<ToDoTask> ToDoTasks { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
