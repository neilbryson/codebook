using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Swashbuckle.AspNetCore.Annotations;

namespace CodebookServer.Models
{
    public class Code
    {
        [SwaggerSchema(ReadOnly = true)]
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [SwaggerSchema(ReadOnly = true)]
        public DateTime DateLastModified { get; set; }

        public string FileName { get; set; }

        public string Source { get; set; }
    }
}
