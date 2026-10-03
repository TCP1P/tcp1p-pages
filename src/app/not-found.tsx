import Link from "next/link";

const NotFound: React.FC = () => {
    return (
        <main id="main-content" tabIndex={-1} className="site-main min-h-screen flex items-center justify-center pt-24">
            <div className="relative z-10 text-center px-4">
                <div className="error-404">404</div>
                <h1 className="text-white text-4xl md:text-5xl font-bold mt-8 mb-6">Page not found</h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">

                    <Link href="/" className="action-link action-link-secondary">
                        Back Home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
