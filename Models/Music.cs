using System;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;

namespace MediaManager.Models
{
    public enum MusicOnLoan
    {
        No,
        Yes
    }
    public class Music
    {
        public int ID { get; set; }
        public int OwnerID { get; set; }
        public string Artist { get; set; }

        [Display(Name = "Album Title")]
        public string AlbumTitle { get; set; }
        public string Year { get; set; }
        public string Genre { get; set; }

        [Display(Name = "Available")]
        public MusicOnLoan OnLoan { get; set; }

        [Display(Name = "Loaned To")]
        public int? LoanedToID { get; set; }

        [Display(Name = "Date Loaned")]
        public DateTime? LoanedDate { get; set; }

        [Display(Name = "Loan Length")]
        public string LoanLength
        {
            get
            {
                string loanedLength = String.Empty;

                using (MusicDBContext db = new MusicDBContext())
                {
                    DateTime? loanDate = (from music in db.Music
                                          where music.ID == ID
                                          select LoanedDate).SingleOrDefault();

                    if (loanDate.HasValue)
                    {
                        TimeSpan elapsed = DateTime.Now.Subtract(loanDate.Value);
                        loanedLength = elapsed.Days.ToString("0") + ((elapsed.Days == 1) ? " day" : " days");
                    }
                }

                return loanedLength;
            }
        }

        public Music()
        {
            this.OnLoan = MusicOnLoan.No;
            this.LoanedToID = null;
            this.LoanedDate = null;
        }
    }

    public class MusicDBContext : DbContext
    {
        public DbSet<Music> Music { get; set; }
    }
}