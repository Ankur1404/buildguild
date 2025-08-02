import { getAccessDenied, getUnauthorized } from "../utils/httpErrors";
import { AuthUser } from "./authMiddleware.ts";

export default function preAuthorize(entity_code: string, right_code: string) {
  return function(_req: any, res: any, next: any) {
    const user = res?.locals?.user as AuthUser;
    if (!user) {
      return next(getUnauthorized())
    }

    if (user?.is_admin) {
      return next()
    }

    const entity_right = user?.entity_rights[entity_code] ?? []

    if (!entity_right?.rights?.map(right => right.code).includes(right_code)) {
      return next(getAccessDenied())
    }

    next();
  };
}
