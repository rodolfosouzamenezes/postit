import { PostitColorEnum } from '../enums/postit-color.enum';

export interface PostitPayload {
    id?: number;
    title: string;
    annotation: string;
    color: PostitColorEnum;
}
