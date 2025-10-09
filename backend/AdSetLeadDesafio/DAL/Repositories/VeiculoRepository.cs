using DAL.DTOs;
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
    public class VeiculoRepository : IVeiculoRepository
    {
        private AppDbContext _db;
        public VeiculoRepository(AppDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<VeiculoReadDto>> Consultar(VeiculoFiltroDTO veiculoFiltroDto)
        {
            var query = _db.Veiculos.AsQueryable();

            if (!string.IsNullOrEmpty(veiculoFiltroDto.Placa))
                query = query.Where(x => x.Placa.Contains(veiculoFiltroDto.Placa));

            if (!string.IsNullOrEmpty(veiculoFiltroDto.Marca))
                query = query.Where(x => x.Marca.Contains(veiculoFiltroDto.Marca));

            if (!string.IsNullOrEmpty(veiculoFiltroDto.Modelo))
                query = query.Where(x => x.Modelo.Contains(veiculoFiltroDto.Modelo));

            if (veiculoFiltroDto.AnoMin != null)
                query = query.Where(x => x.Ano >= veiculoFiltroDto.AnoMin);

            if (veiculoFiltroDto.AnoMax != null)
                query = query.Where(x => x.Ano <= veiculoFiltroDto.AnoMax);

            if (veiculoFiltroDto.Preco != null)
            {
                switch (veiculoFiltroDto.Preco)
                {
                    case 1:
                        query = query.Where(x => x.Preco >= 10000 && x.Preco <= 50000);
                        break;
                    case 2:
                        query = query.Where(x => x.Preco >= 50000 && x.Preco <= 90000);
                        break;
                    case 3:
                        query = query.Where(x => x.Preco >= 90000);
                        break;
                }
            }

            if(veiculoFiltroDto.Fotos != null)
            {
                switch (veiculoFiltroDto.Fotos)
                {
                    case 0:
                        query = query.Where(x => x.Fotos.Count() > 0);
                        break;
                    case 1:
                        query = query.Where(x => x.Fotos.Count() == 0);
                        break;
                }
            }

            if (!string.IsNullOrEmpty(veiculoFiltroDto.Cor))
                query = query.Where(x => x.Cor == veiculoFiltroDto.Cor);

            if (!string.IsNullOrEmpty(veiculoFiltroDto.Opcionais))
                query = query.Where(x => x.Opcionais.Contains(veiculoFiltroDto.Opcionais));

            return await query.Select(x => new VeiculoReadDto()
            {
                Id = x.Id,
                Marca = x.Marca,
                PacoteICarros = x.PacoteICarros,
                PacoteWebMotors = x.PacoteWebMotors,
                Placa = x.Placa,
                Preco = x.Preco,
                Ano = x.Ano,
                Cor = x.Cor,
                Opcionais = x.Opcionais,
                Km = x.Km,
                Modelo = x.Modelo,
                Fotos = x.Fotos.Select(f => new FotoReadDTO()
                {
                    Id = f.Id,
                    base64url = f.base64url,
                    FK_Veiculo = f.FK_Veiculo
                })
            }).ToListAsync();
        }

        public async Task Delete(int id)
        {
            Veiculo veiculo = await _db.Veiculos.Where(x => x.Id == id).FirstAsync();
            _db.Remove(veiculo);
            await _db.SaveChangesAsync();   
        }

        public async Task Salvar(Veiculo veiculo)
        {
            _db.Veiculos.Add(veiculo);
            await _db.SaveChangesAsync();
        }

        public async Task Update(Veiculo veiculo)
        {
            _db.Veiculos.Update(veiculo);
            await _db.SaveChangesAsync();
        }

        public async Task<Veiculo> GetById(int id)
        {
            return await _db.Veiculos.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<string>> GetVeiculosCores()
        {
            return await _db.Veiculos.Select(x => x.Cor).Distinct().ToListAsync();
        }

        public async Task<QuantidadeVeiculosDTO> GetQuantidadeVeiculos()
        {
            IEnumerable<Veiculo> veiculos = await _db.Veiculos.ToListAsync();
            return new QuantidadeVeiculosDTO()
            {
                Total = veiculos.Count(),
                SemFotos = veiculos.Where(x => x.Fotos.Count() == 0).Count(),
                ComFotos = veiculos.Where(x => x.Fotos.Count() > 0).Count()
            };
        }
    }
}
