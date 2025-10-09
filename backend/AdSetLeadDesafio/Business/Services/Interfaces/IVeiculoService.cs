using DAL.DTOs;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services.Interfaces
{
    public interface IVeiculoService
    {
        Task Atualizar(int id, VeiculoEnvioDTO veiculoDTO);
        Task Excluir(int id);
        Task<IEnumerable<VeiculoReadDto>> GetVeiculosByFiltro(VeiculoFiltroDTO veiculoFiltroDTO);
        Task Salvar(VeiculoEnvioDTO veiculoDTO);
        Task AtualizarPacotes(IEnumerable<VeiculoEnvioPacoteDTO> veiculoEnvioPacoteDTOs);
    }
}
