import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const project = new Schema({
  slug: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  projectUrl: {
    type: String,
    required: true,
  },
  repoUrl: {
    type: String,
    required: true,
  },
  since: {
    type: Date,
    default: Date.now,
  }
});


export default mongoose.models.Project || mongoose.model('Project', project);

