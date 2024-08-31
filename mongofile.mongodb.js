use('School')

//  Query Writing


/*
basic Query

db.help()
db.hostInfo()
db.getName()   // Show data bes name
db.getMongo()  // Show Connection String
db.currentOp()  // Show current operation 
db.dropDatabase()  // Delete Database
db.getCollectionInfos()
db.getCollectionNames()  // Show collection list
db.getLastError()  // Show Error
db.getLastErrorObj()  // Show Error
db.isMaster()
db.getReplicationInfo()
db.listCommands()  // Show mongoDB Comment list
db.logout()
db.printCollectionStats()
db.serverBuildInfo()
db.serverStatus()
db.shutdownServer()
db.stats()
db.version()
db.createCollection("Demo Data") // Create Table
db.DemoData.drop()  // DemoData = Table name
*/


/*
application label Query 

...................InsErt Data..................

db.Result.insertOne(
    {
        "subject": "Math", 
        "score": 7,
    }
)

db.Result.insert(
    [
        {
            "student_id": 6,
            "name": "Frank",
            "results": [
              { "subject": "Literature", "score": 70 },
              { "subject": "History", "score": 75 }
            ]
          },
          {
            "student_id": 7,
            "name": "Grace",
            "results": [
              { "subject": "Math", "score": 80 },
              { "subject": "Science", "score": 85 },
              { "subject": "Literature", "score": 90 }
            ]
          }
    ]
)

...................Find Data..................
db.Result.find()
db.Result.findOne(
    {"name": "David"}
)
db.Result.find(
    {},
    {"_id":0, "results":0}
)

db.Result.find(
    {},
    {"_id":1, "results":1}
)


comparison Operator
$eq: Equal Operator
$lt: Less Than Operator
$lte: Less Than or Equal Operator
$lte: Less Than or Equal Operator
$gt: Greater Then Operator
$gte: Greater Then or Equal Operator
$ne: Not Equal Operator
$in: in Operator
$nin: Not in Operator

Logical Operator
$and: Logical AND 
$or: Logical OR 
$not: Logical NOT  
$nor: Logical NOR
*/

