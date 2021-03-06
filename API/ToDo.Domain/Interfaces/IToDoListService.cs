﻿using System;
using System.Collections.Generic;
using System.Text;
using ToDo.Domain.Entities;

namespace ToDo.Domain.Interfaces
{
    public interface IToDoListService
    {
        ToDoList[] GetToDoList();
        void CreateToDoList(ToDoList newList);
    }
}
