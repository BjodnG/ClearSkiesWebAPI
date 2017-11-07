using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ClearSkiesWebAPI.Models
{
    public class DbMetoder
    {
        public bool hentAlleStdSporsmaal()
        {
            return false;
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

    }
}