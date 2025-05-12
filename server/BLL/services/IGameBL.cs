using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface IGameBL
    {
        //שליפה
        public List<GameDTO> GetAllGames();
        //שליפה לפי קוד
        public GameDTO GetGameById(int id);
        //הוספה
        public bool AddGame(GameDTO g); 
        //עידכון
        public bool UpdateGame(int id,GameDTO g);
        //מחיקה
        public bool DeleteGame(int id);
        //שליפה לפי קטגוריה
        public List<GameDTO> GetGameByCategory(int id);

    }
}
