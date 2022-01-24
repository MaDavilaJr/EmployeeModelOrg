const createTeam = team => {
    const generateManager = manager => {
        return `
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title ">${manager.getName()}</h2>
            <h3 class="card-title">${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    }

    const generateEngineer = engineer => {
        return `
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
        `
    }

    const generateIntern = intern => {
        return `
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager)))

    html.push(team.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer)))

    html.push(team.filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join(""));

    return html.join("")
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container-fluid bg-danger text-white">
        <div class="row">
            <div class="col-12 pageHeader" style="text-align: center;">
                <h1>Team Profile Generator</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="created-team col-12 d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `
}