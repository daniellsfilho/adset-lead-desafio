using Business.Services.Interfaces;
using DAL.DTOs;
using DAL.Entities;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public class FotoService : IFotoService
    {
        private IFotoRepository _fotoRepository;
        public FotoService(IFotoRepository fotoRepository)
        {
            _fotoRepository = fotoRepository;
        }
        public async Task SalvarFotos(IEnumerable<FotoEnvioDTO> fotoEnvioDTOs)
        {
            IEnumerable<Foto> fotosExistentes = await _fotoRepository.GetFotos(fotoEnvioDTOs.FirstOrDefault().FK_Veiculo);
            IEnumerable<Foto> fotosASerDeletadas = fotosExistentes.Where(x => !fotoEnvioDTOs.Any(f => f.Id == x.Id));

            await _fotoRepository.ExcluirFotos(fotosASerDeletadas);

            IEnumerable<Foto> fotosASerSalvas = fotoEnvioDTOs.Where(x => x.Id == null).Select(x => new Foto()
            {
                base64url = x.base64url,
                FK_Veiculo = x.FK_Veiculo
            });

            await _fotoRepository.SalvarFotos(fotosASerSalvas);
        }
    }
}
