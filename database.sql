CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    handle VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE profiles(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL REFERENCES users(id),
    bio VARCHAR(255),
    photo VARCHAR(255) DEFAULT 'default.jpeg'
);

CREATE TABLE posts(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL REFERENCES users(id),
    content TEXT NOT NULL
);

CREATE TABLE comments(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id uuid NOT NULL REFERENCES posts(id),
    user_id uuid NOT NULL REFERENCES users(id),
    content TEXT NOT NULL
);

CREATE TABLE likes(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id uuid NOT NULL REFERENCES posts(id),
    user_id uuid NOT NULL REFERENCES users(id)
);