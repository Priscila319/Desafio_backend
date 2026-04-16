const mongoose = require('mongoose');

const cachorroEntrySchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    raca: { type: String, required: true, trim: true },
    dataNascimento: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('CachorroEntry', cachorroEntrySchema);