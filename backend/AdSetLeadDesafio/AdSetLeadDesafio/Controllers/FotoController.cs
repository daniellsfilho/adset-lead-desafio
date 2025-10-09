using Business.Services.Interfaces;
using DAL.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Controller]
    [Route("foto")]
    public class FotoController : Controller
    {
        private IFotoService _fotoService;
        public FotoController(IFotoService fotoService)
        {
            _fotoService = fotoService;
        }
        [HttpPost]
        public async Task<ActionResult> EnviarFotos([FromBody] IEnumerable<FotoEnvioDTO> fotoEnvioDTOs)
        {
            try
            {
                if (fotoEnvioDTOs.Count() > 15)
                {
                    return BadRequest("Podem ser enviadas somente um total de 15 fotos");
                }
                await _fotoService.SalvarFotos(fotoEnvioDTOs);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
