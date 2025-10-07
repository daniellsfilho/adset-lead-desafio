using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTOs
{
    public class VeiculoFiltroDTO
    {
        public string? Marca { get; set; }
        public string? Modelo { get; set; }
        public int? AnoMin { get; set; }
        public int? AnoMax { get; set; }
        public string? Placa { get; set; }
        public int? Km { get; set; }
        public string? Cor { get; set; }
        public int? Preco { get; set; }
        public int? Fotos { get; set; }
        public string? Opcionais { get; set; }
    }
}
