using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface ICustemerBL
    {
        //שליפה
        public List<CustemerDTO> GetCustemers();
        //הוספה
        public bool Add(CustemerDTO c);
        //בדיקה האם לקוח קיים
        public bool IsExsist(string pass,string name);
    }
}
