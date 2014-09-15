using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MediaManager.Models;

namespace MediaManager.Controllers
{
    public class CollectionController : Controller
    {
        private MusicDBContext dbMusic = new MusicDBContext();
        private MovieDBContext dbMovie = new MovieDBContext();
        private GameDBContext dbGame = new GameDBContext();
        //private RequestDBContext dbRequest = new RequestDBContext();

        // GET: Collection
        public ActionResult Index()
        {
            CollectionViewModel myCollection = new CollectionViewModel();
            myCollection.Music = dbMusic.Music.ToList();
            myCollection.Movies = dbMovie.Movies.ToList();
            myCollection.Games = dbGame.Games.ToList();
            //myCollection.Requests = dbRequest.Requests.ToList();

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
    }
}
