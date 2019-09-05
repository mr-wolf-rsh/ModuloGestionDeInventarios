namespace GestionDeInventarios.Models
{
    public class Product
    {
        public int ID { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Stock { get; set; }
    }
}
