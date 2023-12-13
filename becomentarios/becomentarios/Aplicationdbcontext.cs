using becomentarios.Models;
using Microsoft.EntityFrameworkCore;

namespace becomentarios
{
    public class Aplicationdbcontext: DbContext
    {
           public DbSet <Comentario> Comentarios { get; set; }

        public Aplicationdbcontext(DbContextOptions<Aplicationdbcontext> options): base(options)
        {
        
        }
    }
}
