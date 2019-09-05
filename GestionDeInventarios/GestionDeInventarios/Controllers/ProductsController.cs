using GestionDeInventarios.Data;
using GestionDeInventarios.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDeInventarios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext _context;

        public ProductsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct()
        {
            return await _context.Products.ToListAsync();
        }

        // GET: api/Products/5 or api/Products/ART0000005
        [HttpGet("{idOrCode}")]
        public async Task<ActionResult<Product>> GetProduct(string idOrCode)
        {
            Product product;

            if (int.TryParse(idOrCode, out int id))
            {
                product = await _context.Products.FindAsync(id);
            }
            else
            {
                product = await _context.Products.SingleOrDefaultAsync(p => p.Code == idOrCode);
            }

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.ID }, product);
        }

        // PUT: api/Products/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> PutProduct(int id, Product product)
        {
            if (id != product.ID)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();

                return product;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }

        // DELETE: api/Products/5 or api/Products/ART0000005
        [HttpDelete("{idOrCode}")]
        public async Task<ActionResult<Product>> DeleteProduct(string idOrCode)
        {
            Product product;

            if (int.TryParse(idOrCode, out int id))
            {
                product = await _context.Products.FindAsync(id);
            }
            else
            {
                product = await _context.Products.SingleOrDefaultAsync(p => p.Code == idOrCode);
            }

            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);

            await _context.SaveChangesAsync();

            return product;
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.ID == id);
        }
    }
}
