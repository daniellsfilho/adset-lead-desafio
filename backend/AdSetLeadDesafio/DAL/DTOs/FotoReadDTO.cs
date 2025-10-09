using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTOs
{
    public class FotoReadDTO
    {
        public int Id { get; set; }
        public string base64url { get; set; }
        public int FK_Veiculo { get; set; }
    }
}
