db.Codebook.drop();
db.Codebook.insert({
  DateLastModified: new Date(),
  FileName: 'sample.txt',
  Source: 'Hello world!',
});
