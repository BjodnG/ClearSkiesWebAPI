using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Diagnostics;
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

        [Required(ErrorMessage = "Et spørsmål må oppgis")]
        public string Sporsmaal { get; set; }

        [Required(ErrorMessage = "Epost må oppgis")]
        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,4})+)$", ErrorMessage = "Skriv inn gyldig epost-adresse")]
        public string Epost { get; set; }
    }




    public class SporsmaalDb : DbContext
    {
        public SporsmaalDb() : base("name=Sporsmaal")
        {
            //Database.CreateIfNotExists();

            if (!Database.Exists())
            {
                Database.Create();
                this.Seed(this);
            }
            Debug.WriteLine("------------------ \r\n" + Database.Exists());

        }

        public DbSet<StandardSporsmaal> StdSporsmaal { get; set; }
        public DbSet<NyttSporsmaal> NyeSporsmaal { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public void Seed(SporsmaalDb context)
        {
            var spørsmål = new List<StandardSporsmaal>
                         {
                              new StandardSporsmaal
                              {
                                      Sporsmaal = "Hvor sent kan jeg sjekke inn?",
                                      Svar = "Senest en time før avreise."
                              },
                              new StandardSporsmaal
                              {
                                      Sporsmaal = "Hvor mye koster ekstra bagasje?",
                                      Svar = "Ekstra bagasje koster 500kr"
                              },
                              new StandardSporsmaal
                              {
                                      Sporsmaal = "Hva er fristen for å avbestille billetter",
                                      Svar = "24 timer før avreise."
                              }
                         };

            spørsmål.ForEach(r => context.StdSporsmaal.Add(r));
            context.SaveChanges();
        }

    }
}