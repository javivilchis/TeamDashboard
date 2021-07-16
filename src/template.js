function createHTML(teamMembers){
     let allCards = '';
     teamMembers.forEach(teamMember => {
          allCards += renderCard(teamMember);
     });

     return `
     
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="My Team content with nodejs">
    <meta name="author" content="Javier Vilchis">
    <title>My Team</title>
    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Favicons -->
    <style>
     .red-content { background: rgb(150, 27, 70); color:white;}
     .card-header {color:white;}
    </style>
  </head>
  <body>
    
<header  class="red-content p5">
  <div class="container text-center p-5">
       <div><h1>My Team</h1></div>
  </div>
</header>

<main>
  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          ${allCards}

      </div>
      </div>
    </div>
  
  </main>
  
  <footer class="text-muted py-5">
    <div class="container">
      <p class="float-end mb-1">
        <a href="#">Back to top</a>
      </p>
    </div>
  </footer>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
    </body>
  </html>
  

     `
}

function renderCard(teamMember){
    switch(teamMember.getRole()){
         case "engineer":
         return `
         <div class="col mb-4">
          <div class="card shadow-sm">
               <h5 class="card-header bg-primary">${teamMember.name}
                    <br><i class="fa fa-close"></i> ${teamMember.role}
               </h5>
            <div class="card-body bg-light">
               <ul class="list-group">
               <li class="list-group-item">ID: ${teamMember.id}</li>
               <li class="list-group-item">Email: ${teamMember.email}</li>
               <li class="list-group-item">Office Number: ${teamMember.office}</li>
               <li class="list-group-item">GitHub: ${teamMember.github}</li>
               </ul>
            </div>
          </div>
        </div>
         `
         case "employee":
          return `
          <div class="col mb-4">
          <div class="card shadow-sm">
               <h5 class="card-header bg-primary">${teamMember.name}
                    <br><i class="fa fa-close"></i> ${teamMember.role}
               </h5>
            <div class="card-body bg-light">
               <ul class="list-group">
               <li class="list-group-item">ID: ${teamMember.id}</li>
               <li class="list-group-item">Email: ${teamMember.email}</li>
               <li class="list-group-item">Office Number: ${teamMember.office}</li>
               <li class="list-group-item">GitHub: ${teamMember.github}</li>
               </ul>
            </div>
          </div>
        </div>
          `
          case "engineer":
          return `
          <div class="col mb-4">
          <div class="card shadow-sm">
               <h5 class="card-header bg-primary">${teamMember.name}
                    <br><i class="fa fa-close"></i> ${teamMember.role}
               </h5>
            <div class="card-body bg-light">
               <ul class="list-group">
               <li class="list-group-item">ID: ${teamMember.id}</li>
               <li class="list-group-item">Email: ${teamMember.email}</li>
               <li class="list-group-item">Office Number: ${teamMember.office}</li>
               <li class="list-group-item">GitHub: ${teamMember.github}</li>
               </ul>
            </div>
          </div>
        </div>
          `
          case "intern":
          return `
          <div class="col mb-4">
          <div class="card shadow-sm">
               <h5 class="card-header bg-primary">${teamMember.name}
                    <br><i class="fa fa-close"></i> ${teamMember.role}
               </h5>
            <div class="card-body bg-light">
               <ul class="list-group">
               <li class="list-group-item">ID: ${teamMember.id}</li>
               <li class="list-group-item">Email: ${teamMember.email}</li>
               <li class="list-group-item">Office Number: ${teamMember.office}</li>
               <li class="list-group-item">GitHub: ${teamMember.github}</li>
               </ul>
            </div>
          </div>
        </div>
          `
          case "manager":
          return `
          <div class="col mb-4">
          <div class="card shadow-sm">
               <h5 class="card-header bg-primary">${teamMember.name}
                    <br><i class="fa fa-close"></i> ${teamMember.role}
               </h5>
            <div class="card-body bg-light">
               <ul class="list-group">
               <li class="list-group-item">ID: ${teamMember.id}</li>
               <li class="list-group-item">Email: ${teamMember.email}</li>
               <li class="list-group-item">Office Number: ${teamMember.office}</li>
               <li class="list-group-item">GitHub: ${teamMember.github}</li>
               </ul>
            </div>
          </div>
        </div>
          `
    }
}

module.exports = createHTML;