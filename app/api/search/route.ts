import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Statically generate the search index for static export
export const dynamic = 'force-static';
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
