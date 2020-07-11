-- TABLES
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

CREATE TABLE relationships(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL REFERENCES users(id),
    following_id uuid NOT NULL REFERENCES users(id)
);

CREATE UNIQUE INDEX user_follow_user ON relationships (user_id, following_id);

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
    ('ca6eb3b9-9c74-4769-9ac8-911cb4d3eac8');

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

-- FOLLOW A USER
INSERT INTO
    relationships(user_id, following_id)
VALUES
    (
        '0343b4ce-aada-4a61-b686-ad309b3309b0',
        'ca6eb3b9-9c74-4769-9ac8-911cb4d3eac8'
    );

-- GET ALL POSTS
SELECT
    posts.id AS post_id,
    content,
    posts.user_id,
    handle,
    bio,
    photo,
    (
        SELECT
            COUNT(id)
        FROM
            likes
        WHERE
            post_id = posts.id
    ) AS numLikes,
    (
        SELECT
            COUNT(id)
        FROM
            comments
        WHERE
            post_id = posts.id
    ) AS numComments
FROM
    posts
    INNER JOIN users ON posts.user_id = users.id
    INNER JOIN profiles ON posts.user_id = profiles.user_id;

-- GET ALL COMMENTS OF A POST
SELECT
    comments.id AS comment_id,
    post_id,
    content,
    comments.user_id,
    handle,
    photo
FROM
    comments
    INNER JOIN users ON comments.user_id = users.id
    INNER JOIN profiles on comments.user_id = profiles.user_id
WHERE
    post_id = '6ef72082-0c23-495a-a3da-6cfbc0b82bca';

-- GET USER PROFILE
SELECT
    profiles.id AS profile_id,
    user_id,
    bio,
    photo,
    handle,
    (
        SELECT
            COUNT(id)
        FROM
            relationships
        WHERE
            user_id = 'ca6eb3b9-9c74-4769-9ac8-911cb4d3eac8'
    ) AS numFollowings,
    (
        SELECT
            COUNT(id)
        FROM
            relationships
        WHERE
            following_id = 'ca6eb3b9-9c74-4769-9ac8-911cb4d3eac8'
    ) AS numFollowers
FROM
    profiles
    INNER JOIN users ON profiles.user_id = users.id
WHERE
    user_id = 'ca6eb3b9-9c74-4769-9ac8-911cb4d3eac8';