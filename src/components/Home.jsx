import React from 'react';
import Navigation from './Navigation';
import PlayVsIA from './PlayVsIA';

export default function Home() {

    return (
        <div className="bg-dark p-2 mt-2 rounded container">
            <Navigation/>
            <PlayVsIA/>
        </div>
    )
}