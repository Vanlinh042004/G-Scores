import { Request, Response, NextFunction } from "express";

export const validateSbd = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { sbd } = req.params;
  if (!sbd || !/^\d{8}$/.test(sbd)) {
    res
      .status(400)
      .json({ error: "Invalid SBD format. It should be an 8-digit number." });
    return;
  }
  next();
};
