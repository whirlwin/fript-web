INSERT INTO users(id, email, name, picture_url) VALUES(1, 'john.doe@example.org', 'John Doe', '');
INSERT INTO users(id, email, name, picture_url) VALUES(2, 'jane.doe@example.org', 'Jane Doe', '');
INSERT INTO users(id, email, name, picture_url) VALUES(3, 'joe.doe@example.org', 'Joe Doe', '');
INSERT INTO users(id, email, name, picture_url) VALUES(4, 'zoe.doe@example.org', 'Zoe Doe', '');

INSERT INTO facebook_token(token, user_id) VALUES('test', 1);

INSERT INTO gym_type_preference(id, gym_type_id, user_id, status) VALUES(1, 1, '1', 'active');
INSERT INTO gym_type_preference(id, gym_type_id, user_id, status) VALUES(2, 2, '1', 'active');
INSERT INTO gym_type_preference(id, gym_type_id, user_id, status) VALUES(3, 1, '10210441441654812', 'active');

INSERT INTO gym_center_preference(id, gym_center_id, status) VALUES(1, 1, 'active');
INSERT INTO gym_center_preference(id, gym_center_id, status) VALUES(2, 2, 'active');
INSERT INTO gym_center_preference(id, gym_center_id, status) VALUES(3, 1, 'active');

INSERT INTO pending_matches(id, user_id, match_user_id, status) VALUES(1, 1, 2, 'active');
INSERT INTO pending_matches(id, user_id, match_user_id, status) VALUES(2, 1, 3, 'active');
INSERT INTO pending_matches(id, user_id, match_user_id, status) VALUES(3, 1, 4, 'active');
