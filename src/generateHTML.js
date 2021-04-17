const Team = require("../lib/team")

function generateHTML(team) {
    const managerCard = team.generateManagerCard()
    const engineerCards = team.generateEngineerCards()
    const internCards = team.generateInternCards()

    const engineerSection = engineerCards.join("/n")
    const internSection = internCards.join("/n")

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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