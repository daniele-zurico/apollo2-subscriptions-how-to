# Installation:

- install mongodb
https://treehouse.github.io/installation-guides/mac/mongo-mac.html

- npm install

# available commands

## to run in your local environment:
`npm run dev`

it will automatically rerun your code all the time you save and will check for tslint errors and formatting style errors.

### Webstorm
![alt text](https://github.com/daniele-zurico/graphql-setup/blob/graph2/webstorm-prettier.jpg)
### VS Code
prettier-vscode can be installed using the extension sidebar. Search for Prettier - Code formatter. It can also be installed using ext install prettier-vscode in the command palette.
### Other editors
https://prettier.io/docs/en/editors.html


### graphiQl
- http://localhost:4000
here you can run some queries:

1. fetch all the users (you need to be authenticated with google identity server):
For more information how to setup: http://www.dzurico.com/apollo-server-2-0-auth-with-google-signin/
```
query{
  users {
    id
    name
    surname
  }
}
```

2. fetch all the posts:
```
query {
  posts {
    author
    comment
  }
}
```
3. add a new post
```
mutation {
  addPost(author: "Daniele Zurico", comment: "www.dzurico.com") {
    author
    comment
  }
}
```

4. realtime data (Subscription) for post

```
subscription {
    postAdded {
      author
      comment
    }
}
```

For a quick tutorial on how I setup this repro please refer to: http://www.dzurico.com/apolloserver-2-0-how-to-create-a-graphql-server/



