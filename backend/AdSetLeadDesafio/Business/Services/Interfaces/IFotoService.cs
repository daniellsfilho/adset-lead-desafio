using DAL.DTOs;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services.Interfaces
{
    public interface IFotoService
    {
        Task SalvarFotos(IEnumerable<FotoEnvioDTO> fotoEnvioDTOs);
    }
}
