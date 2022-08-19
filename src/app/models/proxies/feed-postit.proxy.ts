import { PostitProxy } from './postit.proxy';
import { UserProxy } from './user.proxy';

export interface FeedPostitProxy extends PostitProxy {
  userId: number;
  hasLiked: boolean;
  user?: UserProxy;
}
