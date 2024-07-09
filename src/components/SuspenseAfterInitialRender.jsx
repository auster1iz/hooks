import React, { Suspense, useEffect, useState } from 'react'

export const SuspenseAfterInitialRender = ({ fallback, children }) => {
  const [isInitialRender, setIsInitialRender] = useState(true)

  return isInitialRender ? (
    <>
      <Lifecycle afterRender={() => setIsInitialRender(false)} />
      {children}
    </>
  ) : (
    <Suspense fallback={fallback}>{children}</Suspense>
  )
}

function Lifecycle({ afterRender }) {
  useEffect(() => {
    afterRender()
  }, [afterRender])

  return null
}
