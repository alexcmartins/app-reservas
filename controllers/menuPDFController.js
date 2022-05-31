exports.menuPDF = (req, res) => {
    res.sendFile(__dirname + '/Ementa_Menu.pdf');
};