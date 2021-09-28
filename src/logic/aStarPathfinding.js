import { MapDataArr } from "../Data/MapData"

export function getAStarPath(destinationCoords, startCoords, corner){
    let start = MapDataArr[startCoords[0]][startCoords[1]]
        let dest = MapDataArr[destinationCoords[0]][destinationCoords[1]]
        let openList = []
        let closedList = []
        openList.push(start)
    
        for(let i = 0; i < 20; i++){
            for(let j = 0; i < 20; i++){
                let x = startCoords[0] + j
                let y = startCoords[1] + i
                if(!MapDataArr[x])break;
                if(!MapDataArr[x][y])break;
                MapDataArr[x][y].f = 0;
                MapDataArr[x][y].g = 0;
                MapDataArr[x][y].h = 0;
                MapDataArr[x][y].parent = null;
            }
        }
        
        while(openList.length > 0){
            let lowInd = 0;
            for(let i = 0; i < openList.length; i++){
                if(openList[i].f < openList[lowInd].f){
                    lowInd = i;
                }
            }
            let currentNode = openList[lowInd];
            if(currentNode === dest){
                let curr = currentNode
                let path = []
                while(curr.parent){
                        path.push(curr)
                        curr = curr.parent
                }
                return path.reverse();
            }

            let toRemove = openList.findIndex(node => node === currentNode)
            if(toRemove !== -1){
                openList.splice(toRemove,1)
            }
            closedList.push(currentNode)

            let neighbors = getNeighbors(currentNode)
            for(let i = 0; i < neighbors.length; i++){
                let neighbor = neighbors[i]
                if(neighbor.hasObj || closedList.includes(neighbor)){
                    continue;
                }
                
                let gScore = currentNode.g + 1;
                let isBestG = false;
                
                if(!openList.includes(neighbor)){
                    isBestG = true;
                    neighbor.h = manhattanDist(dest.coords, neighbor.coords)
                    openList.push(neighbor)
                }
                else if(gScore < neighbor.g){
                    isBestG = true
                }

                if(isBestG){
                    neighbor.parent = currentNode;
                    neighbor.g = gScore;
                    neighbor.f = neighbor.g + neighbor.h;

                }
            }
        }
        return []
}

function manhattanDist(destination, current){
    let x = Math.abs(destination[0] - current[0])
    let y = Math.abs(destination[1] - current[1])
    return x + y
}

function getNeighbors(node){
    let neighbors = []
    let x = node.coords[0]
    let y = node.coords[1]

    if(MapDataArr[x-1] && MapDataArr[x-1][y]){
        neighbors.push(MapDataArr[x-1][y])
    }
    if(MapDataArr[x+1] && MapDataArr[x+1][y]){
        neighbors.push(MapDataArr[x+1][y])
    }

    if(MapDataArr[x] && MapDataArr[x][y-1]){
        neighbors.push(MapDataArr[x][y-1])
    }
    if(MapDataArr[x] && MapDataArr[x][y+1]){
        neighbors.push(MapDataArr[x][y+1])
    }
    return neighbors
}

export function getStepsFromPath(path, startCoords){
    let steps = []
    let current = {coords:startCoords}
    
    for(let i = 0; i < path.length; i++){
        let xDiff = current.coords[0] - path[i].coords[0]
        let yDiff = current.coords[1] - path[i].coords[1]
        if(xDiff === 1)steps.push(4)
        else if(xDiff === -1)steps.push(2)
        else if(yDiff === 1)steps.push(1)
        else if(yDiff === -1)steps.push(3)
        current = path[i]
    }
    return steps.reverse()
}