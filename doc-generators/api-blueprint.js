function getDoc(service, cb) {
  let docs = `FORMAT: 1A

# ${service.getId()}\n\n`;

  service.getGroups().forEach(g => {
    docs += `# Group ${g.getName()}\n${g.getDescription()}\n\n`;
    g.getRoutes().forEach(r => {
      docs += `# ${r.getMethod().toUpperCase()} ${r.getPath()}\n`;
      docs += `+ Response 200 (text/plain)\n`;
    });
  });

  cb(null, docs);
}

module.exports = getDoc;
