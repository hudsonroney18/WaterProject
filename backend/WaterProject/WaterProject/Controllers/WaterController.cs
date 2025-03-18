using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using WaterProject.Data;

namespace WaterProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WaterController : ControllerBase
    {
        private readonly WaterDbContext _context;
        public WaterController(WaterDbContext temp)
        {
            _context = temp;
        }

        [HttpGet ("AllProjects")]
        public IActionResult GetProjects(int pageSize = 5, int pageNum = 1)
        {
            var something = _context.Projects
                .Skip((pageNum-1) * pageSize)
                .Take(pageSize)
            .ToList();
            
            var totalNumProjects = _context.Projects.Count();

            var someObject = new
            {
                Projects = something,
                TotalNumProjects = totalNumProjects
            };
            
            return Ok(someObject);
        }
        
        [HttpGet("FunctionalProjects")]
        public IEnumerable<Project> GetFunctionalProjects()
        {
            var something = _context.Projects.Where(x => x.ProjectFunctionalityStatus == "Functional").ToList();
            return something;
        }
    }
}
