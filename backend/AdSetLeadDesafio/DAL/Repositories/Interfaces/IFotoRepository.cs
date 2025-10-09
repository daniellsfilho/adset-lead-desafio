using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IFotoRepository
    {
        public Task SalvarFotos(IEnumerable<Foto> Fotos);
        public Task ExcluirFotos(IEnumerable<Foto> Fotos);
        Task<IEnumerable<Foto>> GetFotos(int fK_Veiculo);
    }
}
