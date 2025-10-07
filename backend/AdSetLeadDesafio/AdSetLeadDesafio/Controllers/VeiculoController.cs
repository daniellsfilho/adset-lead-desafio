using Business.Services.Interfaces;
using DAL.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Controller]
    [Route("veiculo")]
    public class VeiculoController : Controller
    {
        private IVeiculoService _veiculoService;
        public VeiculoController(IVeiculoService veiculoService)
        {
            _veiculoService = veiculoService;
        }

        [HttpPost]
        public async Task<ActionResult> GravarVeiculo([FromBody] Veiculo veiculo)
        {
            try
            {
                await _veiculoService.Salvar(veiculo);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
