import { useEffect, useState } from 'react'

export function useIntervalRender(delay: number | null) {
    const [_frame, setFrame] = useState(0) // To trigger re-render

    useEffect(() => {
        if (delay === null) {
            return
        }

        const id = setInterval(() => {
            setFrame((n) => n + 1)
        }, delay)

        return () => {
            clearInterval(id)
        }
    }, [delay])
}
