import React from 'react'
import Welcome from '../components/Welcome'
import TodaysTasks from '../components/TodaysTasks'

function Home() {
    return (
        <>
            <Welcome name="Lama" />
            <TodaysTasks />
        </>
    )
}

export default Home
