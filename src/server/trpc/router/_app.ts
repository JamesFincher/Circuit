import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { imageRouter } from "./getImages";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  images: imageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
