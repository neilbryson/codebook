using System.Collections.Generic;
using CodebookServer.Models;
using MongoDB.Driver;

namespace CodebookServer.Services
{
    public class CodeService
    {
        private readonly IMongoCollection<Code> _code;

        public CodeService(ICodebookDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var db = client.GetDatabase(settings.DatabaseName);
            _code = db.GetCollection<Code>(settings.CodebookCollectionName);
        }

        public List<Code> Get(byte sortBy, int pageNumber, int pageSize)
        {
            var items = _code.Find(code => true);

            if (sortBy == 1)
            {
                items.SortByDescending(field => field.DateLastModified);
            }
            else
            {
                items.SortBy(field => field.DateLastModified);
            }

            if (pageSize > 0 && pageNumber > 0)
            {
                items.Limit(pageSize).Skip(pageSize * pageNumber);
            }

            return items.ToList();
        }

        public Code Get(string id) => _code.Find(code => code.Id == id).FirstOrDefault();

        public void Create(Code code) => _code.InsertOne(code);

        public void Update(string id, Code codeIn) => _code.ReplaceOne(code => code.Id == id, codeIn);

        public void Delete(string id) => _code.DeleteOne(code => code.Id == id);
    }
}
