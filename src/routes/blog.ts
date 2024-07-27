import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
blogRouter.use("/*", (c, next) => {
  next();
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  return c.text("Blog created");
});

blogRouter.put("/", (c) => {
  return c.text("Blog updated");
});

blogRouter.get("/", (c) => {
  return c.text("Blog details");
});

blogRouter.post("/bulk", (c) => {
  return c.text("Blogs created in bulk");
});
