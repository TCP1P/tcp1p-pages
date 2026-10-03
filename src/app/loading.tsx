export default function LoadingPage() {
    return <>
        <main id="main-content" tabIndex={-1} className="site-main min-h-screen flex flex-col items-center justify-center pt-24">
            <span className="loading-indicator" role="status" aria-label="Loading" />
        </main>
    </>
}
