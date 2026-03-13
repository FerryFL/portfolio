'use client'

export const AnimatedBackground = () => {

    return (
        <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-700/30 to-indigo-900/30"></div>
        </div>
    )
}

export default AnimatedBackground

