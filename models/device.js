import mongoose from 'mongoose';

const Schema = mongoose.Schema({
  _id: {
    type: String,
    isRequired: true,
  },
  url: {
    type: String,
  },
});

export default mongoose.model('device', Schema);
