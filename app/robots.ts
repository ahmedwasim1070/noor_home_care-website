// Imports
import { MetadataRoute } from 'next'

// 
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://noorhomecare.co.uk/sitemap.xml',
    }
}