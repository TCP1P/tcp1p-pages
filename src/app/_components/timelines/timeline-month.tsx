import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TimelineMonthProps {
    month: string
    progress: number
    children: React.ReactNode
  }

  export const TimelineMonth = ({ month, progress, children }: TimelineMonthProps) => {
    return (
      <div className="relative">
        <div className="flex items-start">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCalendar} className="fas fa-calendar text-red-400 mr-2"/>
              <span className="font-medium text-white">{month}</span>
            </div>
            <div className="h-1 bg-gray-800 rounded">
              <div
                className="h-1 bg-gradient-to-r from-red-600 to-red-500 rounded"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="ml-6 mt-4 space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
