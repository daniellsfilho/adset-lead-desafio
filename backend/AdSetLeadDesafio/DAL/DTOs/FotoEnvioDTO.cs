using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTOs
{
    public class FotoEnvioDTO
    {
        public int? Id {  get; set; }
        [Required]
        public string base64url { get; set; }
        [Required]
        public int FK_Veiculo { get; set; }
    }
}
