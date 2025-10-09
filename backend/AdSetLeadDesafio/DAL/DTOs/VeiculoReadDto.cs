using DAL.Entities;
using DAL.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTOs
{
    public class VeiculoReadDto
    {
        public int Id { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public int Ano { get; set; }
        public string Placa { get; set; }
        public string Cor { get; set; }
        public double Preco { get; set; }
        public int Km { get; set; }
        public string Opcionais { get; set; }
        public EPacote PacoteICarros { get; set; }
        public EPacote PacoteWebMotors { get; set; }
        public IEnumerable<FotoReadDTO> Fotos { get; set; }
    }
}
