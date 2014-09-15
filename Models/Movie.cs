using System;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;

namespace MediaManager.Models
{
    public class Movie
    {
        public int ID { get; set; }
        public int OwnerID { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public string Year { get; set; }
        public string Length { get; set; }
        public string Format { get; set; }

        [Display(Name = "On Loan")]
        public string OnLoan { get; set; }

        [Display(Name = "Loaned To")]
        public int LoanedToID { get; set; }

        [Display(Name = "Date Loaned")]
        public DateTime LoanedDate { get; set; }

        [Display(Name = "Loan Length")]
        public string LoanLength
        {
            get
            {
                string loanedLength = String.Empty;

                using (MovieDBContext db = new MovieDBContext())
                {
                    DateTime? loanDate = (from movies in db.Movies
                                          where movies.ID == ID
                                          select LoanedDate).SingleOrDefault();

                    if (loanDate.HasValue)
                    {
                        TimeSpan elapsed = DateTime.Now.Subtract(loanDate.Value);
                        loanedLength = elapsed.TotalDays.ToString("0") + " days";
                    }
                }

                return loanedLength;
            }
        }
    }

    public class MovieDBContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
    }
}