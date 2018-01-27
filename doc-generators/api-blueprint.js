const indentString = require('indent-string');

function getDoc(service, cb) {
  let docs = `FORMAT: 1A

# ${service.getId()} (v${service.getVersion()})

Tags: ${service.getTags().join(',')} 
Endpoint: ${service.getEndpoint()}/${service.getPort()} 
Contact: ${service.getContact()} 

`;

  service.getGroups().forEach(g => {
    docs += `# Group ${g.getName()}\n\n${g.getDescription()}\n\n`;
    g.getRoutes().forEach(r => {
      const response = r.getResponse();
      const responseSchema = response.getSchema();
      const responseSchemaStr = JSON.stringify(responseSchema, null, 2);
      docs += `# ${r.getMethod().toUpperCase()} ${r.getPath()}\n\n`;
      docs += `${r.getDescription()}\n\n`;
      docs += `+ Request\n\n`;
      docs += `    + Parameters\n\n`;
      r
        .getRequest()
        .getParameters()
        .forEach(p => {
          docs += `        + ${p.getName()} (${p.getType()})\n`;
        });
      docs += `\n+ Response 200 (application/json)\n\n`;
      docs += `    + Schema\n\n`;
      docs += `${indentString(responseSchemaStr, 8)}\n\n`;
    });
  });

  cb(null, docs);
}

module.exports = getDoc;
