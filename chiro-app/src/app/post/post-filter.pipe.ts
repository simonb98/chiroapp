import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'postFilter',
  pure: false
})
export class PostFilterPipe implements PipeTransform {

  transform(posts: Post[], group: string): Post[] {
    if(!group || group.length === 0){
      return posts;
    }
    return posts.filter(p => p.group.toLowerCase().startsWith(group.toLowerCase()));
  }

}
