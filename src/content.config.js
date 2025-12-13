import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/data/blog-posts" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishDate: z.union([z.string(), z.date()]),
		category: z.enum(['tech', 'books']).optional().default('tech'),
		// 添加books相关字段
		coverImage: z.string().optional(),    // 封面图片路径
		readingStatus: z.enum(['to-read', 'reading', 'finished', 'abandoned']).optional(),  // 阅读状态
		rating: z.number().min(0).max(5).optional(),  // 评级，0-5分
		finishDate: z.string().optional(),    // 完成阅读日期
	}),
});

export const collections = { posts };