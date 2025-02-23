declare module 'react-datepicker' {
  import { ComponentProps } from 'react'
  
  export interface ReactDatePickerProps extends ComponentProps<'input'> {
    selected: Date | null
    onChange: (date: Date | null) => void
    dateFormat?: string
    minDate?: Date
    locale?: string
  }

  const DatePicker: React.FC<ReactDatePickerProps>
  export default DatePicker

  export function registerLocale(localeName: string, localeData: any): void
}

declare module 'react-hot-toast' {
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