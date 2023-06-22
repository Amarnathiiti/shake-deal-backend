# shake-deal-backend
ShakeDeal Assignment

This project assigns tasks to teammates based on round robin algorithm.

Before testing this website, create several persons using Postman by sending POST requests as per given API below "createPerson"

After creating several persons, create Teams as per API "createTeam" mentioned below. The ObjectID of persons can be obtained from mongodb.

## APIs

# createPerson
url: http://localhost:8080/createPerson

method: POST

body: {
    "name":"Surya"
}

# createTeam
url : http://localhost:8080/createTeam

method : POST 

body : {

    "name": "Team R", // name of team
    
    "members" : ["6494a2f666541da3b285d9b9","6494a2fb66541da3b285d9bb", "6494a30266541da3b285d9bd"] // ObjectId of Persons
    
}

# createTask
url : http://localhost:8080/createTask

method: POST

body : {

    "taskName": "Sleep", 
    
    "teamId":"64948b3802486d8abdd824f7" // Object Id of team to which task needs to be assigned.
    
}

# getAllTeams
This API returns all the teams present in the database. 

url: http://localhost:8080/getAllTeams

method : GET

parameters: none

