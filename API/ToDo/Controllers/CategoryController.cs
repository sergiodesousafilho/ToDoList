using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDo.Domain.Entities;
using ToDo.Domain.Interfaces;

namespace ToDo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController: ControllerBase
    {
        private ICategoryService Service { get; set; }

        public CategoryController(ICategoryService service)
        {
            this.Service = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var categories = this.Service.GetCategories();
            var retVal = from Category category in categories
                         select new { Name = category.Name, Id = category.Id };
            return Ok(retVal);
        }

    }
}
