using DAL.Entities;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class FotoRepository : IFotoRepository
    {
        private AppDbContext _db;
        public FotoRepository(AppDbContext db)
        {
            _db = db;
        }
        public async Task ExcluirFotos(IEnumerable<Foto> Fotos)
        {
            _db.RemoveRange(Fotos);
            await _db.SaveChangesAsync();
        }

        public async Task SalvarFotos(IEnumerable<Foto> Fotos)
        {
            _db.AddRange(Fotos);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Foto>> GetFotos(int fK_Veiculo)
        {
            return await _db.Fotos.AsNoTracking().Where(x => x.FK_Veiculo == fK_Veiculo).ToListAsync();
        }
    }
}
