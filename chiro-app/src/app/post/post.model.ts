interface PostJson {
    author: string;
    title: string;
    group: string;
    content: string;
    comments: Comment[];
    date: Date;
}

export class Post{
    constructor(
        private _author: string,
        private _title: string,
        private _group: string,
        private _content: string,
        private _comments = new Array<Comment>(),
        private _date = new Date()
    ) {}

    static fromJSON(json: PostJson): Post {
        const post = new Post(json.author, json.title, json.group, json.content, json.comments, new Date(json.date));
        return post;
    }

    get author(): string{
        return this._author;
    }

    get title(): string{
        return this._title;
    }

    get group(): string{
        return this._group;
    }

    get content(): string{
        return this._content;
    }

    get comments(): Comment[]{
        return this._comments;
    }

    get date(): Date{
        return this._date;
    }

    addComment(content:string){
        //this._comments.push(`${content}`);
    }
}