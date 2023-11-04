# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How to run project

## Package Manager


In the project directory, you can use Yarn as the package manager. First, run:

    yarn

This command installs all the project's dependencies. To start the local development server, use the following command:

    yarn start

The project will be accessible at [http://localhost:3000](http://localhost:3000/).
To build the project for production use the following command:

    yarn build

To serve the production build, you can use the following command:

    serve -s build

Again, the project will be accessible at [http://localhost:3000](http://localhost:3000/).

## Docker


To run the project in a Docker container, execute the following command to create an image and run a container:

    docker compose up

Now the project is available at [http://localhost:3000](http://localhost:3000/).
If you need to stop the container, first, get a list of running containers using:

    docker container ls

Then stop the container using:

    docker stop <container-name>

# Folder structure

the structure of the project is inspired by Atomic Design.


    .
    src/
    ├── components/
    │   ├── elements/
    │   │   ├── button/
    │   │   │   ├── Button.tsx
    │   │   │   └── Button.test.js
    │   │   ├── input
    │   │   ├── select
    │   │   ├── ...
    │   │   └── index.ts
    │   ├── fragments/
    │   │   ├── articleCard/
    │   │   │   ├── ArticleCard.tsx
    │   │   │   └── ArticleCard.test.js
    │   │   ├── datePicker
    │   │   ├── ...
    │   │   └── index.ts
    │   ├── layout/
    │   │   ├── header/
    │   │   │   └── Header.tsx
    │   │   ├── footer
    │   │   ├── container
    │   │   ├── pageLayout
    │   │   ├── ...
    │   │   └── index.ts
    │   └── pages/
    │       ├── home/
    │       │   ├── components/
    │       │   │   ├── Filters.tsx
    │       │   │   └── GuardianNewsList.tsx
    │       │   ├── ...
    │       │   └── Home.tsx
    │       └── index.ts
    ├── utils/
    │   ├── formateDate
    │   ├── request
    │   ├── ...
    │   └── index.ts
    ├── hooks/
    │   ├── useFetchNews.ts
    │   ├── ...
    │   └── index.ts
    ├── queries/
    │   ├── guardian/
    │   │   ├── GuardianQuery.ts
    │   │   ├── types.ts
    │   │   └── ...
    │   ├── newsAPI/
    │   │   └── newsAPIQuery.ts
    │   ├── ...
    │   └── index.ts
    └── types/
        ├── commonQueryTypes.ts
        ├── ...
        └── index.ts



components folder divided to four modules as following:

1.  Elements: This folder contains shared components, also known as common components, that cannot be further divided into smaller independent components.
2.  Fragments: Fragments are reusable components that are built using elements. They combine multiple elements to form more complex and self-contained components.
3.  Layouts: The layouts folder encompasses components related to the overall layout and container structure of the application. These components define the high-level structure and positioning of other components.
4.  Pages: The pages folder contains components specific to individual pages. These components are unique to a particular.

In addition to these modules, there are other ones such as utils, hooks, queries, ...

Within this architecture, each module has its own index file that serves as a central point of export for all the components within that module.

# About the project

The project relies on three APIs: _The Guardian_, _NewsAPI_, and _The New York Times_, to provide data. The results are displayed in a list format.

Users have the flexibility to filter this data based on search queries, date, source, and category. Importantly, these filters are maintained in the URL, and they persist even after refreshing the page. The filter parameters are sent to the API request to filter the data on the server side.

Data fetching is efficiently handled by React Query, which not only retrieves data but also caches and stores it on the client side. As a result, if the filter values (parameters) remain the same, new network requests won't be generated. However, the data does have a set expiration period (30 seconds in this project) to prevent staleness.

Since not all data sources allow filtering by author name, NewsAPI data as an example is filtered by the author's name on the client side.

It's worth noting that due to time constraints, tests were only written for specific components and cases, and not all aspects of the project were covered.
