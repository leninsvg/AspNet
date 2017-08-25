
using AspNet.WebApi.App_Start;
using AspNet.WebApi.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity.Owin;
using System.Web.Http.Cors;

namespace AspNet.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AccountController : ApiController
    {
        ApplicationUserManager _userManager;

        [HttpPost]
        public IHttpActionResult RegisterUser(RegisterViewModel model)
        {

            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = model.Email, Email = model.Email, Hometown = model.Hometown };
                var result = _userManager.Create(user, model.Password);
                if (result.Succeeded)
                {
                    return Ok("Exito");
                }
                AddErrors(result);
            }
            return Ok("No esta");
        }

        [HttpGet]
        public IHttpActionResult Test()
        {
            return Ok("Hola");
        }
        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error);
            }
        }
    }
}