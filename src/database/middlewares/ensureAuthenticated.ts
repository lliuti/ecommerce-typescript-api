import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IPayload {
  sub: string;
}

const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ error: "Missing token" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { sub } = jwt.verify(token, process.env.JWT_SECRET) as IPayload;

    request.user_id = sub;
    next();
  } catch (err) {
    return response.status(401).json({ error: "Invalid token" });
  }
};

export { ensureAuthenticated };
