import { project } from '@/constants/projects'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://ferryfebrian.com'

	const projectUrls = project.map((item) => ({
		url: `${baseUrl}/project/${item.id}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: 0.7,
	}))

	return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    ...projectUrls,
  ]
}
