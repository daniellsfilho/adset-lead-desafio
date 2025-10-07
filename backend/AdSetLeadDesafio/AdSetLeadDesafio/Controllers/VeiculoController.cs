using Business.Services.Interfaces;
using DAL.DTOs;
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
        public async Task<ActionResult> GravarVeiculo([FromBody] VeiculoEnvioDTO veiculoDTO)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("Preencha os campos obrigatórios.");
                }
                await _veiculoService.Salvar(veiculoDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("/getByFiltro")]
        public async Task<ActionResult> GetVeiculosByFiltro([FromBody] VeiculoFiltroDTO veiculoFiltroDTO)
        {
            try
            {
                IEnumerable<Veiculo> veiculos = await _veiculoService.GetVeiculosByFiltro(veiculoFiltroDTO);
                return Ok(veiculos);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarVeiculo(int id, [FromBody] VeiculoEnvioDTO veiculoDTO)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("Preencha os campos obrigatórios.");
                }
                await _veiculoService.Atualizar(id, veiculoDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete]
        public async Task<ActionResult> ExcluirVeiculo(int id)
        {
            try
            {
                await _veiculoService.Excluir(id);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
