using System;
using System.Collections.Generic;
using CodebookServer.Models;
using CodebookServer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;

namespace CodebookServer.Controllers
{
    [ApiVersion("1")]
    [Consumes("application/json")]
    [Produces("application/json")]
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class CodeController : ControllerBase
    {
        private readonly ILogger<CodeController> _logger;
        private readonly CodeService _codeService;

        public CodeController(CodeService codeService, ILogger<CodeController> logger)
        {
            _codeService = codeService;
            _logger = logger;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Code>> Get([FromQuery] FilterOptions filterOptions)
        {
            var sortBy = filterOptions?.SortBy ?? 1;
            var pageSize = filterOptions?.PageSize ?? 0;
            var pageNumber = filterOptions?.PageNumber ?? 1;
            _logger.LogInformation("[{Get}] Called with {FilterOptions}", nameof(Get), filterOptions.ToJson());

            try
            {
                var result = _codeService.Get(sortBy, pageNumber, pageSize);
                _logger.LogInformation("[{Get}] Success", nameof(Get));
                return result;
            }
            catch (Exception e)
            {
                _logger.LogError("[{Get}] Error\n{ErrorMessage}", nameof(Get), e.Message);
                return Problem();
            }
        }

        [HttpGet("{id:length(24)}", Name = "GetCode")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Code> Get(string id)
        {
            _logger.LogInformation("[{Get} : {Id}] Called", nameof(Get), id);

            var code = _codeService.Get(id);

            if (code == null)
            {
                _logger.LogError("[{Get} : {Id}] ID not found", nameof(Get), id);
                return NotFound();
            }

            _logger.LogInformation("[{Get} : {Id}] Success", nameof(Get), id);
            return code;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Code> Create(Code code)
        {
            _logger.LogInformation("[{Create}] Called", nameof(Create));

            try
            {
                code.DateLastModified = DateTime.Now;
                _codeService.Create(code);
                _logger.LogInformation("[{Create}] Created {Id}", nameof(Create), code.Id);
                return CreatedAtRoute("GetCode", new {id = code.Id}, code);
            }
            catch (Exception e)
            {
                _logger.LogError("[{Create}] Error\n{ErrorMessage}", nameof(Create), e.Message);
                return Problem();
            }
        }

        [HttpPut("{id:length(24)}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<UpdatedCode> Update(string id, Code codeIn)
        {
            _logger.LogInformation("[{Update} : {Id}] Called", nameof(Update), id);

            try
            {
                var code = _codeService.Get(id);

                if (code == null)
                {
                    _logger.LogError("[{Update} : {Id}] ID not found", nameof(Update), id);
                    return NotFound();
                }

                var updated = new Code
                {
                    Id = code.Id,
                    DateLastModified = DateTime.Now,
                    FileName = codeIn.FileName,
                    Source = codeIn.Source,
                };

                _codeService.Update(id, updated);

                _logger.LogInformation("[{Update} : {Id}] Success", nameof(Update), id);

                return new UpdatedCode
                {
                    Id = updated.Id,
                    DateLastModified = updated.DateLastModified,
                };
            }
            catch (Exception e)
            {
                _logger.LogError("[{Update} : {Id}] Error\n{ErrorMessage}", nameof(Update), id, e.Message);
                return Problem();
            }
        }

        [HttpDelete("{id:length(24)}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Delete(string id)
        {
            _logger.LogInformation("[{Delete} : {Id}] Called", nameof(Delete), id);

            try
            {
                var code = _codeService.Get(id);

                if (code == null)
                {
                    _logger.LogError("[{Delete} : {Id}] ID not found", nameof(Delete), id);
                    return NotFound();
                }

                _codeService.Delete(code.Id);
                _logger.LogInformation("[{Delete} : {Id}] Success", nameof(Delete), id);
                return NoContent();
            }
            catch (Exception e)
            {
                _logger.LogError("[{Delete} : {Id}] Error\n{ErrorMessage}", nameof(Delete), id, e.Message);
                return Problem();
            }
        }
    }
}
