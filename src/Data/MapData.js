import {TileSprites} from "./TileSprites"

export const SpacerCells = 2;
export const WorldCellHeight = 100 + SpacerCells
export const WorldCellWidth = 100 + SpacerCells

export const MapArr = []
export const MapDataArr = []

for(let i = 0; i<WorldCellHeight+1; i++){
  const row = []
  const MapDataRow = []
  for(let p = 0; p < WorldCellWidth+1; p++){
    if(p%2 === 1){
      let mapTileObj = {tileType:TileSprites.grass, coords:[i,p]}
      let chance = getRandomInt(101)
      if(chance < 15){
        //mapTileObj.hasObj = true;    
      }
    MapDataRow.push(mapTileObj)
    }else{
      MapDataRow.push({tileType:TileSprites.grass, items:["coins"], coords:[i,p]})
    }
    row.push(`${p+1},${i+1}`)
  } 
  MapArr.push(row)
  MapDataArr.push(MapDataRow)
}

for(let i = 12;i<25;i++)
  MapDataArr[i][15].hasObj = true

for(let i = 15;i<25;i++)
  MapDataArr[12][i].hasObj = true

for(let i = 15;i<25;i++)
  MapDataArr[25][i].hasObj = true

for(let i = 12;i<24;i++)
  MapDataArr[i][24].hasObj = true


MapDataArr[5][5].hasObj = true

MapDataArr[13][18].hasObj = true
MapDataArr[14][17].hasObj = true
MapDataArr[14][18].hasObj = true
MapDataArr[16][17].hasObj = true
MapDataArr[16][18].hasObj = true
MapDataArr[16][19].hasObj = true
MapDataArr[16][19].hasObj = true
MapDataArr[17][19].hasObj = true
MapDataArr[18][19].hasObj = true
MapDataArr[19][19].hasObj = true
MapDataArr[20][18].hasObj = true
MapDataArr[18][17].hasObj = true
MapDataArr[19][17].hasObj = true
MapDataArr[20][17].hasObj = true
MapDataArr[14][20].hasObj = true
MapDataArr[14][21].hasObj = true
MapDataArr[15][21].hasObj = true
MapDataArr[14][23].hasObj = true
MapDataArr[16][22].hasObj = true
MapDataArr[17][22].hasObj = true
MapDataArr[18][22].hasObj = true
MapDataArr[19][22].hasObj = true
MapDataArr[19][23].hasObj = true
MapDataArr[21][16].hasObj = true
MapDataArr[21][17].hasObj = true
MapDataArr[21][20].hasObj = true
MapDataArr[21][21].hasObj = true
MapDataArr[22][21].hasObj = true
MapDataArr[23][17].hasObj = true
MapDataArr[23][18].hasObj = true
MapDataArr[23][21].hasObj = true
MapDataArr[23][22].hasObj = true
MapDataArr[24][19].hasObj = true


//MapDataArr[86][16].hasObj = true
//MapDataArr[86][17].hasObj = true
//MapDataArr[86][18].hasObj = true
//MapDataArr[86][19].hasObj = true
//MapDataArr[86][20].hasObj = true
//MapDataArr[86][21].hasObj = true
//MapDataArr[86][22].hasObj = true
//MapDataArr[86][23].hasObj = true
//MapDataArr[86][24].hasObj = true


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }