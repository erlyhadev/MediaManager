using System;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace MediaManager.Models
{
    public class RequestedItem
    {
        public int ID { get; set; }

        [Display(Name = "Item ID")]
        public int ItemID { get; set; }

        [Display(Name = "Item Type")]
        public string ItemType { get; set; }

        [Display(Name = "Owner ID")]
        public int OwnerID { get; set; }

        [Display(Name = "Requestor ID")]
        public int RequestorID { get; set; }

        //[Display(Name = "Item Type")]
        //public string ItemType
        //{
        //    get
        //    {
        //        string itemType = String.Empty;

        //        using (RequestDBContext db = new RequestDBContext())
        //        {
        //            itemType = (from user in db.RequestedItem
        //                        where user.ID == OwnerID
        //                        select Username).SingleOrDefault();
        //        }

        //        return itemType;
        //    }
        //}

        //[Display(Name = "Requestor")]
        //public string RequestorName
        //{
        //    get
        //    {
        //        string requestorName = String.Empty;

        //        using (RequestDBContext db = new RequestDBContext())
        //        {
        //            requestorName = (from user in db.RequestedItem
        //                             where user.ID == RequestorID
        //                             select Username).SingleOrDefault();
        //        }

        //        return requestorName;
        //    }
        //}
    }

    public class RequestDBContext : DbContext
    {
        public DbSet<RequestedItem> RequestedItems { get; set; }
    }
}