using DAL.DTOs;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IVeiculoRepository
    {
        Task Salvar(Veiculo veiculo);
        Task<IEnumerable<VeiculoReadDto>> Consultar(VeiculoFiltroDTO veiculoFiltroDto);
        Task Update(Veiculo veiculo);
        Task Delete(int id);
        Task<Veiculo> GetById(int id);
        Task<IEnumerable<string>> GetVeiculosCores();
        Task<QuantidadeVeiculosDTO> GetQuantidadeVeiculos();
    }
}
