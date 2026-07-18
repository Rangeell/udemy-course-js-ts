class PhotoController {
  async store(req, res) {
    res.json(req.file); // Esse parâmetro .file só existe por conta do multer/middleware em photoRoutes.js
    res.json('Ok!');
  }
}

export default new PhotoController();
