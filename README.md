# G-Scores

### 1. Install dependencies

**Front-end**

```sh
cd fe
npm install
```

**Back-end**

```sh
cd be
npm install
```

### 2. Seed exam scores data

_You can choose to use either MongoDB Local or MongoDB Atlas (cloud) to seed exam score data from the CSV file._
**Using MongoDB local:**

- Change the MONGODB_URL in file _env.config.ts_ to local URL:

```
MONGODB_URL: "mongodb://127.0.0.1:27017/examdb"
```

- Make sure MongoDB is running locally (default: mongodb://localhost:27017), run:

```sh
cd be
npm run seed
```

⚡ Note: MongoDB Local is significantly faster than Atlas when reading/writing large CSV files.
**Using MongoDB Atlas:**

- Change the MONGODB_URL in file _env.config.ts_ to URL Atlas:

```
  MONGODB_URL:
    "mongodb+srv://vanlinh042004:rmzl5RaH8WkSah31@cluster0.5cvqe9s.mongodb.net/examdb?retryWrites=true&w=majority&appName=Cluster0",
```

- Run:

```sh
cd be
npm run seed
```

### 3. Run the programing

**Back-end**

```sh
cd be
npm run dev
```

_The backend will be available at http://localhost:5000._
**Front-end**

```sh
cd fe
npm start
```

_The backend will be available at http://localhost:3000._
