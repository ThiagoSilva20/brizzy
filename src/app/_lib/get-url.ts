export function getUrl(path?: string) {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ;
    const normaizedPath = path && !path.startsWith("/") ? `/${path}` : path || "" ;
    return `${baseUrl}${normaizedPath}`;


}