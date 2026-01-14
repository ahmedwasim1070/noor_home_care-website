/**
* @param template - It is an html file in emails/templates
* @param variables - Object of variable to be replaced with variable in html file 
* @returns - HTML with filled variables in it
*/

// 
export const renderTemplate = (template: string, variables: Record<string, string>): string => {
    // Fix the could expected record string to something usefull
    const safeVariables =
        variables.phone.length === 0
            ? { ...variables, phone: "Not Provided" }
            : variables;

    //
    return template.replace(/\$\{([^}]+)\}/g, (match, key) => {
        const value = safeVariables[key.trim()];
        return value !== undefined ? String(value) : match;
    });
};