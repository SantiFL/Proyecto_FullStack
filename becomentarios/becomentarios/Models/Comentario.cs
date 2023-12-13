using System.ComponentModel.DataAnnotations;

namespace becomentarios.Models
{
    public class Comentario
    {
        public int id { get; set; }
       
        public string titulo { get; set; }
        [Required]
        public string creador { get; set;}
        [Required]
        public string texto { get; set;}
        [Required]
        public DateTime FechaCreacion { get; set;}
        [Required]
    }
}
