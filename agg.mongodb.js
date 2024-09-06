use('School')

/*

// basic aggregation
db.Budget.aggregate([])


// aggregation total Count
db.Budget.aggregate(
    [
        {$count: 'total'}
    ]
)

// aggregation sort
db.Budget.aggregate(
    [
        {$sort: {
        spant: 1
        }}
    ]
)

db.Budget.aggregate(
    [
        {$sort: {
        spant: -1
        }}
    ]
)


// aggregation limit
db.Budget.aggregate(
    [
        {$limit: 5}
    ]
)

// aggregation match
db.Budget.aggregate([
    {$match: {
        spant:{
            $eq:150
        }
    }}
])

// aggregation match And / Or
db.Budget.aggregate([
    {$match: {
      $and:[
        {spant:{$gt:1200}},
        {budget:{$gt:1200}}
      ]
    }}
])

db.Budget.aggregate([
    {$match: {
      $or:[
        {spant:{$lt:80}},
        {budget:{$lt:80}}
      ]
    }}

])

// aggregation match Like
db.Budget.aggregate(
    [
        {$match:{category:/TV/}}
    ]
)

// aggregation match in
db.Budget.aggregate(
    [
        {$match:{category:{$in:['Groceries','Transportation']}}}
    ]
)

// aggregation Projection
db.Budget.aggregate(
    [
        {$project:{
                _id:0,
                category:1,
                budget:1
            }
        }
    ]
)

// aggregation skip
db.Budget.aggregate(
    [
        {$skip:10},
        {$limit:4}
    ]
)



// aggregation Group (show unique)
db.Budget.aggregate(
    [
        {$group:{_id:"$budget"}}
    ]
)



// aggregation Group sum (show Group Sum Result)
db.Budget.aggregate(
    [
        {$group:{_id:"$category",total:{$sum:"$budget"}}}
    ]
)



// aggregation Group avg (show Group Average Result)
db.Budget.aggregate(
    [
        {$group:{_id:"$category",total:{$avg:"$budget"}}}
    ]
)



// aggregation Group avg (show Group Average Result)
db.Budget.aggregate(
    [
        {$group:{_id:"$category",max:{$max:"$budget"}}}
    ]
)


db.Budget.aggregate(
    [
        {$group:{_id:"$category",min:{$min:"$budget"}}}
    ]
)

// aggregation (max, min, avg)
db.Budget.aggregate(
    [
        {$group:{_id:0,max:{$max:"$budget"}}}
    ]
)

db.Budget.aggregate(
    [
        {$group:{_id:0,min:{$min:"$budget"}}}
    ]
)

db.Budget.aggregate(
    [
        {$group:{_id:0,avg:{$avg:"$budget"}}}
    ]
)

db.Budget.aggregate(
    [
        {$group:{_id:{Category:"$category", budget:"$budget"}, sum:{$sum:"$budget"}}}
    ]
)

db.Budget.aggregate(
    [
        {$lookup: {
          from: collection,
          localField: field,
          foreignField: field,
          as: result
        }}
    ]
)


*/



