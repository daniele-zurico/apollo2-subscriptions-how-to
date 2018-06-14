# Apollo server 2.0 
This project is a good starting point for all the people that want to have apollo-server 2.0 ready to use.
It integrates:
- queries
- mutations
- subscriptions (real-time data)
- authentication and authorisation (using google sign-on as provider server)
- schema stitching
- mongo db

## Installation:

- install mongodb
https://treehouse.github.io/installation-guides/mac/mongo-mac.html

- npm install

## Environment
In the root folder is available a file called `.env`. It contains all the configuration environment for:
1. mongo db
2. google-sign-in as identity server for authentication and authorisation. More info available at http://www.dzurico.com/apollo-server-2-0-auth-with-google-signin/ 

## available commands

### to run in your local environment:
`npm run dev`

it will automatically rerun your code all the time you save and will check for tslint errors and formatting style errors.

#### Webstorm
![alt text](https://github.com/daniele-zurico/apollo2-subscriptions-how-to/blob/master/webstorm-prettier.jpg)
#### VS Code
prettier-vscode can be installed using the extension sidebar. Search for Prettier - Code formatter. It can also be installed using ext install prettier-vscode in the command palette.
#### Other editors
https://prettier.io/docs/en/editors.html


#### graphiQl
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

![alt text](https://github.com/daniele-zurico/apollo2-subscriptions-how-to/blob/master/subscription.gif)

For a better explanation on how I setup this repro please refer to:
1. http://www.dzurico.com/apolloserver-2-0-how-to-create-a-graphql-server/
2. http://www.dzurico.com/apollo-server-2-0-auth-with-google-signin/
3. http://www.dzurico.com/apollo-server-2-0-real-time-data-with-subscriptions/



