const calculateScore = (player) => {
  function passingPoints() {
    let combinePassing = player.stats.passing
    const passingYards = (combinePassing.yards / 25)
    const passingTouchdowns = (combinePassing.touchdowns * 6)
    const passingInterceptions = (combinePassing.interceptions * (-3))


    return (passingYards + passingTouchdowns + passingInterceptions)
  }


  const rushingPoints = () => {
    let combineRushing = player.stats.rushing
    const rushingYards = (combineRushing.yards / 10)
    const rushingTouchdowns = (combineRushing.touchdowns * 6)
    const rushingFumbles = (combineRushing.fumbles * (-3))


    return rushingYards + rushingTouchdowns + rushingFumbles
  }
  const receivingPoints = () => {
    const combineReceiving = player.stats.receiving
    const receivingYards = (combineReceiving.yards / 10)
    const receivingTouchdowns = (combineReceiving.touchdowns * 6)
    const receivingReceptions = (combineReceiving.receptions * 1)
    const receivingFumbles = (combineReceiving.fumbles * (-3))


    return receivingYards + receivingTouchdowns + receivingReceptions + receivingFumbles
  }
  const kickreturnPoints = () => {
    let combineKickreturn = player.stats.return.kickreturn
    const kickreturnYards = (combineKickreturn.yards / 15)
    const kickreturnTouchdowns = (combineKickreturn.touchdowns * 6)
    const kickreturnFumbles = (combineKickreturn.fumbles * (-3))


    return kickreturnYards + kickreturnTouchdowns + kickreturnFumbles
  }
  const puntreturnPoints = () => {
    let combinePuntreturn = player.stats.return.puntreturn
    const puntreturnYards = (combinePuntreturn.yards / 15)
    const puntreturnTouchdowns = (combinePuntreturn.touchdowns * 6)
    const puntreturnFumbles = (combinePuntreturn.fumbles * (-3))


    return puntreturnYards + puntreturnTouchdowns + puntreturnFumbles
  }


  switch (player.position) {
    case 'QB':
      return (passingPoints() + rushingPoints())
    case 'RB':
      return (rushingPoints() + receivingPoints() + kickreturnPoints() + puntreturnPoints())

    case 'WR':
      return (rushingPoints() + receivingPoints() + kickreturnPoints() + puntreturnPoints())
    case 'TE':
      return receivingPoints()

    default:
    case 'Position Unknown':
      return 0
  }
}


module.exports = calculateScore

