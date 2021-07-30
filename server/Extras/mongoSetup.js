db.Codebook.drop();
db.Codebook.insert({
  dateLastModified: Date.now(),
  fileName: 'sample.txt',
  source: 'Hello world!',
});
