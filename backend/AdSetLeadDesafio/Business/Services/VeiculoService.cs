using Business.Services.Interfaces;
using DAL.Entities;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public class VeiculoService : IVeiculoService
    {
        private IVeiculoRepository _veiculoRepository;
        public VeiculoService(IVeiculoRepository veiculoRepository) 
        { 
            _veiculoRepository = veiculoRepository;
        }
        public async Task Salvar(Veiculo veiculo)
        {
            await _veiculoRepository.Salvar(veiculo);
        }
    }
}
