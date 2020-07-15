import { Post } from './post.model';

const JsonPosts = [
  {
    author: 'Bram Scheerlinckx',
    title: 'Bobbejaanland',
    group: 'Toppers',
    content: 'Volgende week zondag gaan we naar Bobbejaanland dus neem zeker wat zakgeld mee en een lunchpakket.',
    comments: Comment[""],
    date: new Date()
  },
  {
    author: 'Andert De Vuyst',
    title: 'Blaaspijpen',
    group: 'Rakkers',
    content: 'Bereid jullie voor op het ultieme blaaspijpspel.',
    comments: Comment[""],
    date: new Date()
 },
 {
    author: 'Simon Baeyens',
    title: 'Naar zee',
    group: 'Aspiranten',
    content: 'Zoals jullie normaal gezien wel weten gaan wij 27 juni naar de zee. \n Neem wat zakgeld mee en een zwembroek.',
    comments: Comment[""],
    date: new Date()
 }
];
export const POSTS: Post[] = JsonPosts.map(Post.fromJSON);