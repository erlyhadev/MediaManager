using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MediaManager.Models;

namespace MediaManager.Models
{
    public class CollectionViewModel
    {
        public IEnumerable<Models.Music> MusicList { get; set; }
        public IEnumerable<Models.Movie> MoviesList { get; set; }
        public IEnumerable<Models.Game> GamesList { get; set; }
        public IEnumerable<Models.RequestedItem> RequestsList { get; set; }

        public Models.Music Music { get; set; }
        public Models.Movie Movie { get; set; }
        public Models.Game Game { get; set; }
        public Models.RequestedItem RequestedItem { get; set; }
    }
}