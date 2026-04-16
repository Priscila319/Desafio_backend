const CachorroEntry = require('../models/CachorroEntry');

exports.listEntries = async (req, res) => {
  const entries = await CachorroEntry.find();
  res.json(entries);
};

exports.getEntryById = async (req, res) => {
  const entry = await CachorroEntry.findById(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Registro de cachorro não encontrado.' });
  res.json(entry);
};

exports.createEntry = async (req, res) => {
  const entry = await CachorroEntry.create(req.body);
  res.status(201).json(entry);
};

exports.updateEntry = async (req, res) => {
  const entry = await CachorroEntry.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!entry) return res.status(404).json({ message: 'Registro de cachorro não encontrado.' });

  res.json(entry);
};

exports.deleteEntry = async (req, res) => {
  const entry = await CachorroEntry.findByIdAndDelete(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Registro de cachorro não encontrado.' });
  res.json({ message: 'Registro de cachorro removido com sucesso.' });
};