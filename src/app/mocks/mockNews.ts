import { News } from '../models/news';

export default function mockNews(): News {
  return new News({
    id: 1,
    by: 'Veryan',
    score: 42,
    title: 'Hot off the press!',
    url: 'https://truba.news/',
    type: 'story',
    kids: [10, 11, 12, 13, 14],
    time: new Date(650472582),
    descendants: 928,
  });
}
