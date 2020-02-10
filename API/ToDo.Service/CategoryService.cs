using System;
using System.Collections.Generic;
using System.Text;
using ToDo.Domain.Entities;
using ToDo.Domain.Interfaces;
using ToDo.Repository.EF;
using System.Linq;

namespace ToDo.Service
{
    public class CategoryService: ICategoryService
    {
        private readonly ToDoContext context;

        public CategoryService(ToDoContext _context)
        {
            this.context = _context;
        }

        public Category[] GetCategories()
        {
            return context.Categories.ToArray();
        }
    }
}
