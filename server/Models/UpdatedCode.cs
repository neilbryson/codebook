using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Swashbuckle.AspNetCore.Annotations;

namespace CodebookServer.Models
{
    public class UpdatedCode
    {
        [SwaggerSchema(ReadOnly = true)]
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [SwaggerSchema(ReadOnly = true)]
        public DateTime DateLastModified { get; set; }
    }
}
