import { Item } from './item';
import { News } from './news';

export class Comment extends Item {
  parent: number;
  text: string;
  type: 'comment';

  constructor(values: Comment) {
    super(values);
    Object.assign(this, values);
  }
}

export class StoryWithComments {
  story: News;
  comments: Comment[];
}
