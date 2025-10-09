using Business.Services.Interfaces;
using DAL.DTOs;
using DAL.Entities;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public async Task Atualizar(int id, VeiculoEnvioDTO veiculoDTO)
        {
            Veiculo veiculo = new Veiculo()
            {
                Id = id,
                Marca = veiculoDTO.Marca,
                Modelo = veiculoDTO.Modelo,
                Ano = veiculoDTO.Ano,
                Placa = veiculoDTO.Placa,
                Cor = veiculoDTO.Cor,
                Preco = veiculoDTO.Preco,
                Km = veiculoDTO.Km,
                Opcionais = veiculoDTO.Opcionais
            };

            await _veiculoRepository.Update(veiculo);
        }

        public async Task Excluir(int id)
        {
            await _veiculoRepository.Delete(id);
        }

        public async Task<IEnumerable<VeiculoReadDto>> GetVeiculosByFiltro(VeiculoFiltroDTO veiculoFiltroDTO)
        {
            return await _veiculoRepository.Consultar(veiculoFiltroDTO);
        }

        public async Task Salvar(VeiculoEnvioDTO veiculoDTO)
        {
            Veiculo veiculo = new Veiculo()
            {
                Marca = veiculoDTO.Marca,
                Modelo = veiculoDTO.Modelo,
                Ano = veiculoDTO.Ano,
                Placa = veiculoDTO.Placa,
                Cor = veiculoDTO.Cor,
                Preco = veiculoDTO.Preco,
                Km = veiculoDTO.Km,
                Opcionais = veiculoDTO.Opcionais
            };
            await _veiculoRepository.Salvar(veiculo);
        }

        public async Task AtualizarPacotes(IEnumerable<VeiculoEnvioPacoteDTO> veiculoEnvioPacoteDTOs)
        {
            foreach(VeiculoEnvioPacoteDTO veiculoEnvioPacoteDTO in veiculoEnvioPacoteDTOs)
            {
                Veiculo veiculo = await _veiculoRepository.GetById(veiculoEnvioPacoteDTO.Id);
                veiculo.PacoteICarros = veiculoEnvioPacoteDTO.PacoteICarros;
                veiculo.PacoteWebMotors = veiculoEnvioPacoteDTO.PacoteWebMotors;

                await _veiculoRepository.Update(veiculo);
            }
        }
    }
}
