const team = require('../lib/team')

function generateHTML(team) {
    console.log(team)
    const managerCard = team.generateManagerCard()
    const engineerCards = team.generateEngineerCards()
    console.log(engineerCards)
    const internCards = team.generateInternCards()

    const engineerSection = engineerCards.join("/n")
    const internSection = internCards.join("/n")

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <h1>My Team</h1>
    ${managerCard}
    ${engineerSection}
    ${internSection}
</body>
</html>`
    
}

module.exports = generateHTML