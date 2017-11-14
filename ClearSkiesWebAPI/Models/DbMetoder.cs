using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ClearSkiesWebAPI.Models
{
    public class DbMetoder
    {
        public List<StandardSporsmaal> hentAlleStdSporsmaal()
        {

            var alleSporsmaal = new List<StandardSporsmaal>();
            using (var db = new SporsmaalDb())
            {
                alleSporsmaal = db.StdSporsmaal.ToList();
            }
            return alleSporsmaal;
        }

        public bool leggTilNyttSporsmaal(NyttSporsmaal NyttSpm)
        {
            Debug.WriteLine("--------------------------- \n\r" + "Innenfor LeggTilMetode");
            using (var db = new SporsmaalDb())
            {
                try
                {
                    db.NyeSporsmaal.Add(NyttSpm);
                    db.SaveChanges();
                    return true;
                }
                catch (Exception feil)
                {
                    Debug.WriteLine("--------------------------- \n\r" + "FEIL innenfor LeggTilMetode \n\r " + feil);
                    return false;
                }
            }
        }

        public List<NyttSporsmaal> hentAlleNyeSporsmaal()
        {
            var alleSporsmaal = new List<NyttSporsmaal>();
            using (var db = new SporsmaalDb())
            {
                alleSporsmaal = db.NyeSporsmaal.ToList();
            }
            return alleSporsmaal;
        }

        public bool slettNyeSpm(int id)
        {
            try
            {
                using (var db = new SporsmaalDb())
                {
                    var slettSpm = db.NyeSporsmaal.Find(id);
                    db.NyeSporsmaal.Remove(slettSpm);
                    db.SaveChanges();
                }
                return true;
            }
            catch (Exception error)
            {
                Debug.WriteLine("-------------------- \n\r" + error);
                return false;
            }
        }

    }
}