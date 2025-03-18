using System.ComponentModel.DataAnnotations;

namespace WaterProject.Data;
//keys are not null by default, but if the field says not null next to it that means it is required
public class Project
{
    [Key]
    public int ProjectId { get; set; }
    [Required]
    public string ProjectName { get; set; }
    
    public string? ProjectType { get; set; }
    
    public string? ProjectRegionalProgram { get; set; }
    
    public int? ProjectImpact { get; set; }
    
    public string? ProjectPhase  { get; set; }
    
    public string? ProjectFunctionalityStatus { get; set; }
}