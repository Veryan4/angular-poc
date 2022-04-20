import { Comment } from '../models/comment';

export default function mockComment(): Comment {
  return new Comment({
    id: 9,
    by: 'Steve',
    type: 'comment',
    kids: [30, 31, 32, 33, 34],
    time: new Date(650472582),
    parent: 98231,
    text: 'Fake news!!!',
  });
}
