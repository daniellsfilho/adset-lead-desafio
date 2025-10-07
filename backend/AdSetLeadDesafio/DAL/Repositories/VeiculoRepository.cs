using DAL.DTOs;
using DAL.Entities;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class VeiculoRepository : IVeiculoRepository
    {
        private AppDbContext _db;
        public VeiculoRepository(AppDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Veiculo>> Consultar(VeiculoFiltroDTO veiculoFiltroDto)
        {
            throw new NotImplementedException();
        }

        public async Task Salvar(Veiculo veiculo)
        {
            await _db.Veiculos.AddAsync(veiculo);
            _db.SaveChanges();
        }

    }
}
