import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { router, procedure } from "./trpc";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  authCallback: procedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.id || user?.email) throw new TRPCError({ code: "UNAUTHORIZED" });

    // check if the user is in the database
    return { success: true };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
