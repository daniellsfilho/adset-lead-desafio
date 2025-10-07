using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class AppDbContext : DbContext
    {
        public DbSet<Veiculo> Veiculos { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        { }
    }
}
