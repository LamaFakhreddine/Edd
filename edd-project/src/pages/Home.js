import React from 'react'
import Welcome from '../components/Welcome'
import TodayPlans from '../components/TodayPlans'

function Home() {
    return (
        <>
            <Welcome name="Lama" />
            <TodayPlans />
        </>
    )
}

export default Home
