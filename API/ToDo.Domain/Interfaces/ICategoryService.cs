using System;
using System.Collections.Generic;
using System.Text;
using ToDo.Domain.Entities;

namespace ToDo.Domain.Interfaces
{
    public interface ICategoryService
    {
        Category[] GetCategories();
    }
}
