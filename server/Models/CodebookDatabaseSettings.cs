namespace CodebookServer.Models
{
    public class CodebookDatabaseSettings : ICodebookDatabaseSettings
    {
        public string CodebookCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface ICodebookDatabaseSettings
    {
        string CodebookCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
