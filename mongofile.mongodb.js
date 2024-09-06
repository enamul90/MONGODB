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


......comparison Operator......
$eq: Equal Operator  
db.juleJSON.find(
  {
    "salary":{$eq:75000}
  }
)

$lt: Less Than Operator
db.juleJSON.find(
  {
    "salary":{$lt:75000}
  }
)

$lte: Less Than or Equal Operator
db.juleJSON.find(
  {
    "salary":{$lte:75000}
  }
)

$gt: Greater Then Operator
$gte: Greater Then or Equal Operator
$ne: Not Equal Operator

$in: in Operator
db.juleJSON.find(
  {
    "salary":{$in:[32000,75000]}
  }
)

$nin: Not in Operator
db.juleJSON.find(
  {
    "salary":{$nin:[32000,75000]}
  }
)

.....Logical Operator.....
$and: Logical AND 
db.juleJSON.find({
  $and:[
    {"salary":{$eq: 62000}},
    {"name":{$eq:"Kamrul Islam"}}
  ]
}
)

$or: Logical OR 
db.juleJSON.find({
  $or:[
    {"salary":{$eq:75000}},
    {"name":{$eq:"Kamrul Islam"}}
  ]
}
)

$not: Logical NOT  
$nor: Logical NOR

.....Element Query Operator.....
$exists: 
db.Result.find(
  {
    fatherName:{$exists:true}
  }
)

$type:
db.juleJSON.find(
  {
    salary:{$type:2}
  }
)



db.Budget.find({
  $expr:{
    $eq:["$budget","$spant"]
  }
})


db.Budget.find({
  spant:{
    $mod:[4,3]
  }
})

db.Budget.find({
  category:{
    $regex:"R"
  }
})



db.Budget.find().sort({
  category:1
})

db.Budget.find().count('total')



db.Budget.find().limit(2)

db.Budget.find().sort({"_id":-1}).limit(2)

db.Budget.distinct('category')

db.Budget.deleteOne({
  "_id":ObjectId("66d492533df84c191254d47e")
})


db.Budget.deleteMany({
  budget:{$eq:200}
})



db.Budget.find({ $where: "this.spant>this.budget"
})


*/

// db.Budget.find({
//   $expr: { $eq: ["$budget", "$spant"] }
// });