

'use client' // Error boundaries must be Client Components
 
import ErorrHandleNoDataFound from '@/components/empty-data-2'
import { useEffect } from 'react'
 
export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
     <ErorrHandleNoDataFound/>
    </div>
  )
}