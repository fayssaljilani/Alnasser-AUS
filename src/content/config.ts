import { z, defineCollection } from 'astro:content';

const collectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['mens-clothing', 'womens-fashion', 'kids-wear', 'footwear', 'seasonal', 'brands']),
    featured: z.boolean().default(false),
    images: z.array(z.string()),
    inStore: z.boolean().default(true),
    newSeason: z.boolean().default(false),
    priceRange: z.string(),
    brands: z.array(z.string()).optional(),
    highlights: z.array(z.string()),
    season: z.string().optional(),
    targetAudience: z.string().optional(),
  }),
});

const storesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    address: z.string(),
    suburb: z.string(),
    postcode: z.string(),
    shopNumber: z.string(),
    phone: z.string().optional(),
    hours: z.object({
      monday: z.string(),
      tuesday: z.string(),
      wednesday: z.string(),
      thursday: z.string(),
      friday: z.string(),
      saturday: z.string(),
      sunday: z.string(),
    }),
    services: z.array(z.string()),
    specialties: z.array(z.string()),
    image: z.string(),
    googleMapsUrl: z.string().optional(),
    parkingInfo: z.string().optional(),
  }),
});

const promotionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    validUntil: z.date(),
    image: z.string(),
    terms: z.string(),
    storeSpecific: z.boolean().default(false),
    discount: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = {
  collections: collectionsCollection,
  stores: storesCollection,
  promotions: promotionsCollection,
};