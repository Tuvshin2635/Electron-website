import React from "react"
import { useState } from "react";


  const [stars, setStars] = useState(props.rate)
  
  export default function HandleUPVote (data) {
    setVotes(votes +1 )
      if (stars > 5) {
        setStars(0)
      } else {
        setStars(stars +1)
      }
  }
