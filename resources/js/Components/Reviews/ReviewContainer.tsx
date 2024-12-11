import React from 'react'
import Reviewcard from './Reviewcard'

export default function ReviewContainer() {
        return (
            <div className="review-cont flex flex-wrap gap-x-4 gap-y-6 px-6 justify-center mx-8 bg-black">
                <Reviewcard
                    name="trissie"
                    stars={2}
                    review="error"
                />
                <Reviewcard
                    name="wout"
                    stars={5}
                    review="dit is een test review ik ben letterlijk gods kleine soldaat raaaaaaaaaaaaaaaaaaagh"
                />
                <Reviewcard
                    name="em"
                    stars={3}
                    review="dit is nog een test review meow miauw"
                />
                <Reviewcard
                    name="trent"
                    stars={4}
                    review="iets review achtig"
                />
                <Reviewcard name={"Emma"} review={"Nu moet ik niet meer bang zijn van vreemde mannen"} stars={5}/>
            </div>
        )
    }


