const db = require('../dbConfig/init');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.description = data.description;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query('SELECT * FROM posts');
                let posts = postData.rows.map(b => new Post(b));
                resolve (posts);
            } catch (err) {
                reject('Post not found');
            }
        });
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query('SELECT * FROM posts WHERE id = $1;', [ id ]);
                let post = new Post(postData.rows[0]);
                resolve(post);
            } catch (err) {
                reject('Post not found');
            };
        });
    };

    static async create(postData){
        return new Promise (async (resolve, reject) => {
            try {
                const { title, name, description} = postData;
                let newPost = await db.query('INSERT INTO posts (title, name, description) VALUES ($1,$2,$3) RETURNING*;',[postData.title, postData.name, postData.description]);
                let result = new Post(newPost.rows[0])
                resolve (result.rows[0]);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    };

}
