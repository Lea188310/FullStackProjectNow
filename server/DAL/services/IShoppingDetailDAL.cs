using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IShoppingDetailDAL
    {
     
        
        //שליפה
        public List<ShoppingDetail> GetAll();
        //הוספה
        public bool Add(ShoppingDetail s);

    }
}
