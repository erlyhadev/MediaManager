using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MediaManager.Models;

namespace MediaManager.Models
{
    public class CollectionViewModel
    {
        public IEnumerable<Models.Music> Music { get; set; }
        public IEnumerable<Models.Movie> Movies { get; set; }
        public IEnumerable<Models.Game> Games { get; set; }
        //public IEnumberable<Models.Request> Requests { get; set; }
    }
}