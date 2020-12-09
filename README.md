# Node.js Coding Challenge

Your task is to create a REST API with a single GET endpoint which returns a list of project summaries pertaining to a user. Summaries contain only the following information:

- Project `_id`, `title`, `description` and `elements`
- Elements `_id`, `title` and `description`

Use the user_id `5fb5d7d5e77b3749e751906c` for your query. Your output should look like this:

```
[
    {
        _id: "5fb55700730639bcaaf9024e",
        title: "Words",
        description: "A list of meaningful words",
        elements: [
            {
                _id: "5fb55d72fcce2c6a00e90e39",
                title: "Idea",
                description: "A thought or suggestion as to a possible course of action",
            },
            {
                _id: "5fb55d7e3963cb95c53a2c58",
                title: "Concept",
                description: "An abstract idea; a general notion",
            },
            {
                _id: "5fb55d85bec06754045af6d9",
                title: "Thought",
                description: "An idea or opinion produced by thinking, or occurring suddenly in the mind",
            },
            {
                _id: "5fb55d89a78d3bc939bff0ac",
                title: "Aspiration",
                description: "A strong desire, longing, or aim",
            },
            {
                _id: "5fb55d8ccc433b1de8f33080",
                title: "Goal",
                description: "The object of a person's ambition or effort; an aim or desired result",
            },
        ]
    }
]
```

# Important Notes

You will need to use the following API to get the necessary data for this assignment:

> P.S.: Allow some time (~10s) for Heroku to boot the app

## Projects API

Returns a list of projects. Optional filters include `user_id`.

GET `https://nodejs-tech-assignment.herokuapp.com/projects?user_id=5fb5d7d5e77b3749e751906c`

```
[
  {
    "_id": "5fb55700730639bcaaf9024e",
    "title": "Words",
    "description": "A list of meaningful words",
    "user_id": "5fb5d7d5e77b3749e751906c",
    "rootElement": "5fb55d85bec06754045af6d9"
  }
]
```

## Elements API

Returns a list of elements. Optional filters include `project_id`.

GET `https://nodejs-tech-assignment.herokuapp.com/elements?project_id=5fb55700730639bcaaf9024e`

```
[
  {
    "_id": "5fb55d72fcce2c6a00e90e39",
    "project_id": "5fb55700730639bcaaf9024e",
    "title": "Idea",
    "description": "A thought or suggestion as to a possible course of action",
    "parentElement": null,
    "createdDate": "2020-10-15T01:53:52.180+00:00",
    "lastModifiedDate": "2020-10-15T01:53:52.180+00:00"
  },
  {
    "_id": "5fb55d7e3963cb95c53a2c58",
    "project_id": "5fb55700730639bcaaf9024e",
    "title": "Concept",
    "description": "An abstract idea; a general notion",
    "parentElement": "5fb55d72fcce2c6a00e90e39",
    "createdDate": "2020-10-15T01:53:52.180+00:00",
    "lastModifiedDate": "2020-10-15T01:53:52.180+00:00"
  },
  {
    "_id": "5fb55d85bec06754045af6d9",
    "project_id": "5fb55700730639bcaaf9024e",
    "title": "Thought",
    "description": "An idea or opinion produced by thinking, or occurring suddenly in the mind",
    "parentElement": "5fb55d7e3963cb95c53a2c58",
    "createdDate": "2020-10-15T01:53:52.180+00:00",
    "lastModifiedDate": "2020-10-15T01:53:52.180+00:00"
  },
  {
    "_id": "5fb55d89a78d3bc939bff0ac",
    "project_id": "5fb55700730639bcaaf9024e",
    "title": "Aspiration",
    "description": "A strong desire, longing, or aim",
    "parentElement": "5fb55d85bec06754045af6d9",
    "createdDate": "2020-10-15T01:53:52.180+00:00",
    "lastModifiedDate": "2020-10-15T01:53:52.180+00:00"
  },
  {
    "_id": "5fb55d8ccc433b1de8f33080",
    "project_id": "5fb55700730639bcaaf9024e",
    "title": "Goal",
    "description": "The object of a person's ambition or effort; an aim or desired result",
    "parentElement": "5fb55d89a78d3bc939bff0ac",
    "createdDate": "2020-10-15T01:53:52.180+00:00",
    "lastModifiedDate": "2020-10-15T01:53:52.180+00:00"
  }
]
```

# BONUS POINTS:

**In order to validate your solution, include integration tests.**
