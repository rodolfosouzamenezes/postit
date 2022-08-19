import { Injectable } from '@angular/core';
import { AsyncResult } from 'src/app/models/interfaces/async-result';
import { PostitPayload } from 'src/app/models/payloads/postit.payload';
import { CommentProxy } from 'src/app/models/proxies/comment.proxy';
import { FeedPostitProxy } from 'src/app/models/proxies/feed-postit.proxy';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';
import { apiRoutes } from 'src/environments/api-routes';
import { HttpAsyncService } from './http-async.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(
    private readonly http: HttpAsyncService,
  ) {}

  public async getMyNotes(): Promise<AsyncResult<PostitProxy[]>> {
    const [success, error] = await this.http.get<PostitProxy[]>(
      apiRoutes.notes.me
    );

    if (error) { return [[], error.error.message]; }

    return [success];
  }

  public async create(postit: PostitPayload): Promise<AsyncResult<PostitProxy>> {
    const [success, error] = await this.http.post<PostitProxy>(apiRoutes.notes.create, postit);

    if (error) { return [null, error.error.message]; }

    return [success];
  }

  public async update(postit: PostitPayload): Promise<AsyncResult<PostitProxy>> {
    const url = apiRoutes.notes.update.replace('{noteId}', postit.id.toString());
    const [success, error] = await this.http.put<PostitProxy>(url, postit);

    if (error) { return [null, error.error.message]; }

    return [success];
  }

  public async delete(id: number): Promise<AsyncResult<boolean>> {
    const url = apiRoutes.notes.delete.replace('{noteId}', id.toString());
    const [, error] = await this.http.delete(url);

    if (error) { return [false, error.error.message]; }

    return [true];
  }

  public async publish(postit: PostitPayload): Promise<AsyncResult<PostitProxy>> {
    return this.update({
      ...postit,
      isPublic: true,
    });
  }

  public async getFeedNotes(): Promise<AsyncResult<FeedPostitProxy[]>> {
    const [success, error] = await this.http.get<FeedPostitProxy[]>(
      apiRoutes.notes.feed
    );

    if (error) { return [[], error.error.message]; }

    return [success];
  }

  public async setLikeOnPostit(postit: FeedPostitProxy): Promise<AsyncResult<boolean>> {
    const url = postit.hasLiked
      ? apiRoutes.notes.like.delete.replace('{noteId}', postit.id.toString())
      : apiRoutes.notes.like.create.replace('{noteId}', postit.id.toString());
    const [, error] = postit.hasLiked
      ? await this.http.delete(url)
      : await this.http.post(url);

    if (error) {return [false, error.error.message];};

    return [true];
  }

  public async get(id: number): Promise<AsyncResult<FeedPostitProxy>> {
    const url = apiRoutes.notes.get.replace('{noteId}', id.toString());
    const [success, error] = await this.http.get<FeedPostitProxy>(url);

    if (error) {return [null, error.error.message];};

    return [success];
  }

  public async sendComment(id: number, commentText: string): Promise<AsyncResult<CommentProxy>> {
    const url = apiRoutes.notes.comment.create
    .replace('{noteId}', id.toString());

    const [success, error] = await this.http.post<CommentProxy>(url, { comment: commentText});

    if (error) {return [null, error.error.message];};

    return [success];
  }
}
