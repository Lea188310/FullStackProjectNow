using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface ICategoryBL
    {
        //שליפה
        public List<CategoryDTO> GetAllCategories();
        //שליפה לפי קוד
       public CategoryDTO GetCategoryByID(int id);
        //הוספה
       public bool AddCAtegory(CategoryDTO c);
        //עידכון
        public bool Update(int id,CategoryDTO c);
        //מחיקה
        public bool Delete(int id);
    }
}
