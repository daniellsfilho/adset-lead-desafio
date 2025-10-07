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
        Task<IEnumerable<Veiculo>> Consultar(VeiculoFiltroDTO veiculoFiltroDto);
    }
}
