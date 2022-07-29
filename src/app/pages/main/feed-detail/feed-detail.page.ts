import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.page.html',
  styleUrls: ['./feed-detail.page.scss'],
})
export class FeedDetailPage implements OnInit {
  public postitArray: PostitProxy[] = [
    {
      id: 0,
      title: 'Titulo do post 0',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.RED,
      comments: [],
    },
    {
      id: 1,
      title: 'Titulo do post 1',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.GREEN,
      comments: [],
    },
    {
      id: 2,
      title: 'Titulo do post 2',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.YELLOW,
      comments: [],
    },
    {
      id: 3,
      title: 'Titulo do post 3',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.PINK,
      comments: [
        {
          comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender'
        },
        {
          comment: 'QUE POST INCRIVEL'
        },
        {
          comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehenderLorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehenderlit. Eligendi, itaque! Consectetur dolores praesentium reprehenderLorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehen'
        },
      ],
    },
    {
      id: 4,
      title: 'Titulo do post 4',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.PURPLE,
      comments: [],
    },
    {
      id: 5,
      title: 'Titulo do post 5',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.RED,
      comments: [],
    },
    {
      id: 6,
      title: 'Titulo do post 6',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praes',
      color: PostitColorEnum.BLUE,
      comments: [],
    },
    {
      id: 7,
      title: 'Titulo do post 7',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostitColorEnum.GREEN,
      comments: [],
    },
  ];

  public postit: PostitProxy;
  public isLiked = false;
  private postitId = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    ) {
      this.postitId = +this.activatedRoute.snapshot.params.id;
    }

    public ngOnInit(): void {
      this.getPostit();
    }

  public getPostit(): void {
    this.postit = this.postitArray.find(post => post.id === this.postitId);
  }

  public setLikeOnToPostIt(): void {
    this.isLiked = !this.isLiked;
  }
}
