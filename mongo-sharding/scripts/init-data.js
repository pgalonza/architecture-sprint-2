sh.enableSharding("somedb")
sh.shardCollection("somedb.helloDoc", { "name" : "hashed" } )
somedb=db.getSiblingDB("somedb");
for(var i = 0; i < 1000; i++) somedb.helloDoc.insertOne({age:i, name:"ly"+i})
somedb.helloDoc.countDocuments()