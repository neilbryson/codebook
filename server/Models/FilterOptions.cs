using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace CodebookServer.Models
{
    public class FilterOptions
    {
        [FromQuery(Name = "sortBy")]
        [SwaggerParameter("1 = descending ; 0 = ascending (DateLastModified)")]
        public byte SortBy { get; set; }

        [FromQuery(Name = "pageSize")]
        [SwaggerSchema("To return all contents, pass 0")]
        public int PageSize { get; set; }

        [FromQuery(Name = "pageNumber")]
        public int PageNumber { get; set; }
    }
}
