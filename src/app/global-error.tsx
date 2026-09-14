

'use client'
import ErorrHandleNoDataFound from "@/components/empty-data-2"

 // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <ErorrHandleNoDataFound/>
      </body>
    </html>
  )
}