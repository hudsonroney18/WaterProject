namespace WaterProject.Data;

using Microsoft.EntityFrameworkCore;

public class WaterDbContext: DbContext
{
    public WaterDbContext(DbContextOptions<WaterDbContext> options) : base(options)
    {
    }
    
    public DbSet<Project> Projects { get; set; }
}