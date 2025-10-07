using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTOs
{
    public class VeiculoEnvioDTO
    {
        [Required]
        public string Marca { get; set; }
        [Required]
        public string Modelo { get; set; }
        [Required]
        public int Ano { get; set; }
        [Required]
        public string Placa { get; set; }
        [Required]
        public string Cor { get; set; }
        [Required]
        public double Preco { get; set; }
        public int Km { get; set; }
        public string Opcionais { get; set; }
    }
}
