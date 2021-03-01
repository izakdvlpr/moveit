import mongoose from 'mongoose';

interface UserTypes extends mongoose.Document {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  html_url: string;
  level?: number;
  currentExperience?: number;
  totalExperience?: number;
  challengesCompleted?: number;
}

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,  
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  bio: {
    type: String,
  },
  avatar: {
    type: String,
  },
  html_url: {
    type: String,
  },
  level: {
    type: Number,
    default: 0,
  },
  currentExperience: {
    type: Number,
    default: 0,
  },
  totalExperience: {
    type: Number,
    default: 0,
  },
  challengesCompleted: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.users ||
  mongoose.model<UserTypes>('users', UserSchema);
