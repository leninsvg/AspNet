using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace AspNet.WebApi.Controllers
{
    public class DataController : ApiController
    {
        /// <summary>
        /// Acceso sin token
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet]
        [Route("Api/Data/ForAll")]
        public IHttpActionResult Get()
        {
            return Ok("Now server time is: " + DateTime.Now.ToString());
        }
        /// <summary>
        /// Acceso con token
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        [Route("Api/Data/Authenticate")]
        public IHttpActionResult GetForAuthenticate()
        {
            var identy = (ClaimsIdentity)User.Identity;
            return Ok("Hello" + identy.Name);
        }
        /// <summary>
        /// Acceso con Token
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "admin")]
        [HttpGet]
        [Route("Api/Data/Authorize")]
        public IHttpActionResult GetForAdmin()
        {
            var identity = (ClaimsIdentity)User.Identity;
            var roles = identity.Claims
                .Where(c => c.Type == ClaimTypes.Role)
                .Select(c => c.Value);
            return Ok("Hello " + identity.Name + " Role " + string.Join(",", roles.ToList()));
        }
    }
}
