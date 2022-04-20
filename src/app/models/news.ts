import { Item } from './item';

export class News extends Item {
  descendants: number;
  score: number;
  title: string;
  type: 'story';
  url: string;

  domainName?: string;

  constructor(values: News) {
    super(values);
    Object.assign(this, values);
    this.domainName = this.url ? new URL(this.url).hostname.replace('www.', '') : '';
  }
}
