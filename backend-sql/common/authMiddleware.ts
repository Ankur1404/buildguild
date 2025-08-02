import config from "config";
import jsonwebtoken from "jsonwebtoken";
import db from "../utils/db";

export interface Right {
  id: string
  code: string
}

export interface EntityRight {
  id: string
  code: string
  rights: Right[]
}

export interface AuthUser {
  id: string;
  email: string;
  is_admin: boolean
  entity_rights: { [entity_code: string]: EntityRight }
}

export default async function authMiddleware(req: any, res: any, next: any) {
  const token = req.headers.authorization;
  if (!token) {
    return next();
  }

  const jwt_token = token.split("Bearer ")[1];

  const jwt = jsonwebtoken.decode(jwt_token, config.get('jwt.secret')) as any;
  if (!jwt) {
    return next();
  }

  const user = await get_user(jwt.user.email);

  res.locals.user = user

  next();
}

async function get_user(email: string) {
  const user_role_query = "SELECT u.id, u.email, u.is_admin, e.code as entity_code, rer.entity_id, ri.code as right_code, rer.right_id FROM users u LEFT JOIN role_entity_rights rer ON u.role_id = rer.role_id JOIN entities e ON rer.entity_id = e.id JOIN rights ri ON rer.right_id = ri.id WHERE u.email = ?"

  const query = (await db.query(user_role_query, [email]) as any)[0]
  if (!query) {
    console.log("Nothing returned")
    return null;
  }

  const user = query[0]

  let entity_rights: { [index: string]: EntityRight } = {};

  query.forEach((element: any) => {
    entity_rights[element.entity_code] = {
      id: element.id,
      code: element.entity_code,
      rights: [{
        id: element.right_id,
        code:  element.right_code
      }, ...(entity_rights[element.entity_code]?.rights ?? [])]
    }
  });

  user.entity_rights = entity_rights

  return user as AuthUser
}

