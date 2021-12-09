const pdfkit = require('pdfkit');
const fs = require('fs');

const pdf = new pdfkit();

pdf.image("65732773.jfif",{
    align:'center',
    height:120,
    width:120
}).fontSize(18)
.fillColor('#b22222')
.text("Nome: Manuel Bento");



pdf.fontSize(16)
.fillColor('#bbb')
.text("Techs: Node.js, React.js, React.Native, .Net Core",{
    align:'left'
});

pdf.pipe(fs.createWriteStream('ficheiro.pdf'));
pdf.end();