import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const message = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});


export default mongoose.models.Message || mongoose.model('Message', message);

