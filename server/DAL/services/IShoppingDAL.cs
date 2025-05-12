using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IShoppingDAL
    {
        //שליפת הכל
        public List<Shopping> GetAllShoppings();
        //הוספת קניה
        public bool AddNew(Shopping s);
    }
}
