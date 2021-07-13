# Remove Containers
```
docker rm -f kafkaui zookeeper kafka
```
# Add Containers
```
docker run -d --name zookeeper -p 2181:2181 -e ALLOW_ANONYMOUS_LOGIN=yes bitnami/zookeeper

docker run -d --name kafka -p 9092:9092 --link zookeeper -e KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181 -e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://:9092 -e ALLOW_PLAINTEXT_LISTENER=yes bitnami/kafka

docker run -d --name kafkaui -p 8180:8080 --link kafka --link zookeeper -e KAFKA_CLUSTERS_0_NAME=local -e KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS=kafka:9092 -d provectuslabs/kafka-ui:latest
```

# Stop Containers
```
docker stop kafka zookeeper kafkaui
```

# Start Containers  
```
docker start zookeeper kafka kafkaui
```

# Docker Logs
```
docker logs -tf kakfa
docker logs -tf zookeeper
```
