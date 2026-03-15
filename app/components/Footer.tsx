export const Footer = () => {   
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 px-6 py-6 text-center">
            <p className="text-sm text-black/65">&copy; 2024 AI Store. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
                <a className="transition-colors hover:text-black/60" href="https://www.facebook.com/AIStore" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a className="transition-colors hover:text-black/60" href="https://www.twitter.com/AIStore" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a className="transition-colors hover:text-black/60" href="https://www.instagram.com/AIStore" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
    );
}