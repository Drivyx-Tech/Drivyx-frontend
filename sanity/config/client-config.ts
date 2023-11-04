export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;

export const useCdn = false;
// This is the document id used for the preview secret that's stored in your dataset.
// The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
export const previewSecretId = process.env.SANITY_REVALIDATE_SECRET as string;
