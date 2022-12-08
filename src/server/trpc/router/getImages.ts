import { router, publicProcedure, protectedProcedure } from "../trpc";

export const imageRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  getAllImages: publicProcedure.query(async () => {
    const allImages = await fetch(
      `${process.env.API_URL}/local/getAllImagesFromDb`
    );
    return allImages.json();
  }),
});
