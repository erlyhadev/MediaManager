using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MediaManager.Models;

namespace MediaManager.Controllers
{
    //[Authorize]
    public class CollectionController : Controller
    {
        private MusicDBContext dbMusic = new MusicDBContext();
        private MovieDBContext dbMovie = new MovieDBContext();
        private GameDBContext dbGame = new GameDBContext();
        private RequestDBContext dbRequest = new RequestDBContext();

        // GET: Collection
        public ActionResult Index()
        {
            CollectionViewModel myCollection = new CollectionViewModel();
            myCollection.MusicList = dbMusic.Music.ToList();
            myCollection.MoviesList = dbMovie.Movies.ToList();
            myCollection.GamesList = dbGame.Games.ToList();
            myCollection.RequestsList = dbRequest.RequestedItems.ToList();

            return View(myCollection);
        }

        // GET: Collection/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Collection/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Collection/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Collection/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Collection/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Collection/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Collection/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // POST: Collection/Request/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Request([Bind(Include = "ID,ItemID,ItemType,OwnerID,RequestorID")] RequestedItem requestedItem)
        {
            if (ModelState.IsValid)
            {
                dbRequest.RequestedItems.Add(requestedItem);
                dbRequest.SaveChanges();
                return RedirectToAction("Index", "Collection");
            }

            return View(requestedItem);
        }
    }
}
