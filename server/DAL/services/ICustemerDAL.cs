using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface ICustemerDAL
    {
        //שליפה
        public List<Custemer> GetCustemers();
        //הוספה
        public bool AddCustemer(Custemer c);
        //מחיקה
        public bool RemoveCustemer(int id);
        //עידכון
        public bool UpdateCustemer(int id, Custemer c);
    }
}
