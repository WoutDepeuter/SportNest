
export function Normalize(str: string): string {
    return str.toLowerCase();
}

export function Titleize(str: string): string {
    const words = str.split('_').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    );
    return words.join(' ');
}

export function Paragraphize(str: string): string {
    const formattedString = str.replace(/_/g, ' ');
    return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
}
