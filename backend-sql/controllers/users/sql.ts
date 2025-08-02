export const GET_USERS = `
SELECT * FROM users;
`;

export const GET_USER_BY_ID = `
SELECT * FROM users WHERE id = ?;
`;

export const CREATE_USER = `
INSERT INTO users (
  id,
  username,
  firstName,
  lastName,
  email,
  profileImage,
  verified
) VALUES (?, ?, ?, ?, ?, ?, ?);
`;

export const UPDATE_USER = `
UPDATE users SET 
  username = ?, 
  firstName = ?, 
  lastName = ?, 
  email = ?, 
  profileImage = ?, 
  verified = ?
WHERE id = ?;
`;

export const DELETE_USER = `
DELETE FROM users WHERE id = ?;
`;
