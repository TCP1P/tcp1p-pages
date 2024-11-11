interface TimelineYearProps {
    year: string
    children: React.ReactNode
  }

  export const TimelineYear = ({ year, children }: TimelineYearProps) => {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <div className="flex justify-between items-center my-4">
          <span className="px-4 py-1 text-sm text-red-300 bg-red-900/30 rounded-full border border-red-400/30">
            {year}
          </span>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-2xl border border-red-500/10 p-6">
          <div className="space-y-6">
            {children}
          </div>
        </div>
      </div>
    )
  }
