declare module 'react-datepicker' {
  import { ComponentProps } from 'react'
  
  export interface ReactDatePickerProps extends ComponentProps<'input'> {
    selected: Date | null
    onChange: (date: Date | null) => void
    dateFormat?: string
    minDate?: Date
    locale?: string
    placeholderText?: string
    className?: string
  }

  const DatePicker: React.FC<ReactDatePickerProps>
  export default DatePicker

  export function registerLocale(localeName: string, localeData: any): void
}

declare module 'react-hot-toast' {
  import { ReactNode } from 'react'

  export interface ToasterProps {
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
    toastOptions?: {
      className?: string
      duration?: number
      style?: React.CSSProperties
    }
    children?: ReactNode
  }

  export const Toaster: React.FC<ToasterProps>

  const toast: {
    (message: string): void
    success: (message: string) => void
    error: (message: string) => void
  }
  export default toast
}

declare module 'date-fns/locale' {
  const nl: any
  export { nl }
} 