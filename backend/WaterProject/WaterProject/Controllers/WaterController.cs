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
        public IEnumerable<Project> GetProjects()
        {
            var something = _context.Projects.ToList();
            return something;
        }
        
        [HttpGet("FunctionalProjects")]
        public IEnumerable<Project> GetFunctionalProjects()
        {
            var something = _context.Projects.Where(x => x.ProjectFunctionalityStatus == "Functional").ToList();
            return something;
        }
    }
}
