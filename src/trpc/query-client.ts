import {
    defaultShouldDehydrateQuery,
    QueryClient,
} from '@tanstack/react-query';
// import superjson from 'superjson';
export function makeQueryClient() {
    // A single tanstack query client for the app
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 30 * 1000,
            },
            dehydrate: {
                // serializeData: superjson.serialize,
                shouldDehydrateQuery: (query) =>
                    defaultShouldDehydrateQuery(query) ||
                    query.state.status === 'pending',
            },
            hydrate: {
                // deserializeData: superjson.deserialize,
            },
        },
    });
}