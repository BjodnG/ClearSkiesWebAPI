using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace ClearSkiesWebAPI.Models
{

    public class StandardSporsmaal
    {
        [Key]
        public int id { get; set; }
        public string Sporsmaal { get; set; }
        public string Svar { get; set; }
    }

    public class NyttSporsmaal
    {
        [Key]
        public int id { get; set; }
        public string Sporsmaal { get; set; }
        
        public string Epost { get; set; }
    }




    public class SporsmaalDb : DbContext
    {
        public SporsmaalDb() : base("name=Sporsmaal")
        {
            Database.CreateIfNotExists();
        }

        public DbSet<StandardSporsmaal> StdSporsmaal { get; set; }
        public DbSet<NyttSporsmaal> NyeSporsmaal { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}