using Core.Entities.Concrete;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class SiteContext:DbContext
    {

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=SiteControlDb;Trusted_Connection=true;");
            }
            public DbSet<User> Users { get; set; }
            public DbSet<Apartment> Apartments { get; set; }
            public DbSet<CreditCart> CreditCards { get; set; }
            public DbSet<Invoices> Invoices { get; set; }
            public DbSet<Message> Messages { get; set; }
            public DbSet<Payment> Payments { get; set; }
            public DbSet<OperationClaim> OperationClaims { get; set; }
             public DbSet<UserOperationClaim> UserOperationClaims { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);
            }
    }
           
            
}
