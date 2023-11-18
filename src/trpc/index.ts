import { router, procedure } from './trpc';

export const appRouter = router({
    test: procedure.query(() => {
        return 'hello'
    })
});

// export type definition of API
export type AppRouter = typeof appRouter;