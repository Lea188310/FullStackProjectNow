using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IGameDAL
    {
        //שליפה
        public List<Game> GetGames();
        //הוספה
        public bool AddGame(Game c);
        //מחיקה
        public bool RemoveGame(int id);
        //עידכון
        public bool Update(int id, Game g);

    }
}
