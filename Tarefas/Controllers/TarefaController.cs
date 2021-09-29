using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Tarefas.Data;
using Tarefas.Models;

namespace Tarefas.Controllers
{
    [ApiController]
    [Route("Tarefas/tarefa")]
    public class TarefaController : ControllerBase
    {
        private readonly DataContext _context;
        public TarefaController(DataContext context)
        {
            _context = context;
        }

        [Route("create")]
        [HttpPost]
        public IActionResult Create([FromBody] Tarefa tarefas)
        {
            _context.Tarefas.Add(tarefas);
            _context.SaveChanges();
            return Created("", tarefas);
        }

        [Route("list")]
        [HttpGet]
        public IActionResult List() => Ok(_context.Tarefas.ToList()); 
    }
}