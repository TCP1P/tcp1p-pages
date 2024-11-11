const NotFound: React.FC = () => {
    return (
        <main className="flex-1 min-h-screen flex items-center justify-center">
            <div className="relative z-10 text-center px-4">
                <div className="error-404">404</div>
                <h1 className="text-white text-5xl md:text-6xl font-bold mt-8 mb-6">Page Not Found!</h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">

                    <a href="/" className="px-8 py-3 bg-transparent text-white border border-red-600/40 rounded-full font-medium hover:border-red-400 hover:bg-red-500/10 transition-all duration-300">
                        Back Home
                    </a>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
