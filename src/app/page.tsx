import Button from "./_components/button";

export default function Home() {
  return <>
    <main className="flex-1 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="mb-8">
          <span className="px-4 py-1 text-sm text-red-300 bg-red-900/30 rounded-full border border-red-400/30">
            The CTF Player 1P - Indonesia Team
          </span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-semibold mb-6 leading-tight text-center">
          The Largest Community <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-950">(CTF)<br />Capture the Flags</span> in the Nusantara.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl text-center">
          TCP1P is Indonesian CTF community dedicated to organizing engaging Capture The Flag events and collaborating with local competitions. Our mission is to elevate the quality of CTF challenges in Indonesia and foster a thriving cybersecurity ecosystem through knowledge sharing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button text={"Get Started"}></Button>
          <Button text={"Join Community"} variant="secondary"></Button>
        </div>
      </div>
    </main>
  </>
}
