using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface ICategoryDAL
    {
        //שליפה
        public List<Category> GetCategories();
        //הוספה
        public bool AddCategory(Category c);
        //מחיקה
        public bool RemoveCategory(int id);
        //עידכון
        public bool Update(int id,Category c);

    }
}
