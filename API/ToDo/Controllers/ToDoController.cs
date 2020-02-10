using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDo.Domain.Entities;
using ToDo.Domain.Interfaces;

namespace ToDo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private IToDoListService Service { get; set; }

        public ToDoController(IToDoListService service)
        {
            this.Service = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var lists = this.Service.GetToDoList();
            var retVal = from ToDoList list in lists
                         select new { Name = list.Name, CategoryName = list.Category.Name, Done = list.Done };
            return Ok(retVal);
        }
        
        [HttpPost]
        public IActionResult Post(ToDoList newList)
        {
            this.Service.CreateToDoList(newList);
            return Ok(newList);
        }
               
        /// <summary> API para avaliação da Metatron. </summary>
        [HttpGet("Info")]
        public ActionResult Info()
        {
            return Content("TODO List API runing.");
        }
    }

    
}
