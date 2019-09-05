using GestionDeInventarios.Models;
using Microsoft.EntityFrameworkCore;

namespace GestionDeInventarios.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // table name from db is t_product
            modelBuilder.Entity<Product>().ToTable("t_product");
        }
    }
}
