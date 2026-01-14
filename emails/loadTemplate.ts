// Imports
import path from "path";
import fs from 'fs/promises';

/**
* @param templateName - The name of the html file in emails/templates
* @returns HTML file in emails/templates
*/

// 
export const loadTemplate = async (templateName: string): Promise<string> => {
    try {
        const templatePath = path.join(process.cwd(), 'emails', 'templates', templateName);

        const content = await fs.readFile(templatePath, 'utf-8');
        return content;
    } catch (error) {
        console.error(`Error loading template ${templateName}:`, error);
        throw new Error('Could not load email template');
    }
}