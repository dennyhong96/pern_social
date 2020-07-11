CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    handle VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE profiles(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL REFERENCES users(id) UNIQUE,
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

CREATE UNIQUE INDEX user_like_post ON likes (post_id, user_id);

-- QUERIES
-- CREATE A USER
INSERT INTO
    users(handle, email, password)
VALUES
    ('hhy666', 'hong@gmail.com', '12341234');

-- CREATE A PROFILE
INSERT INTO
    profiles(user_id)
VALUES
    ('10a91530-1cda-49f6-9cd2-ebac1a3f2059');

-- CREATE A POST
INSERT INTO
    posts(user_id, content)
VALUES
    (
        '10a91530-1cda-49f6-9cd2-ebac1a3f2059',
        'This is a test post.'
    );

-- CREATE A COMMENT
INSERT INTO
    comments(post_id, user_id, content)
VALUES
    (
        '6ef72082-0c23-495a-a3da-6cfbc0b82bca',
        '10a91530-1cda-49f6-9cd2-ebac1a3f2059',
        'This is a test comment'
    );

-- LIKE A POST
INSERT INTO
    likes(post_id, user_id)
VALUES
    (
        '6ef72082-0c23-495a-a3da-6cfbc0b82bca',
        '10a91530-1cda-49f6-9cd2-ebac1a3f2059'
    );