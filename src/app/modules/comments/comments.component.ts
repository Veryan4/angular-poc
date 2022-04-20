import { Component } from '@angular/core';
import { News } from 'src/app/models/news';
import { Comment } from 'src/app/models/comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['comments.component.css'],
})
export class CommentsComponent {
  story: News;
  comments: Comment[];

  constructor(private route: ActivatedRoute) {
    this.story = this.route.snapshot.data['storyWithComments'].story;
    this.comments = this.route.snapshot.data['storyWithComments'].comments;
  }
}
