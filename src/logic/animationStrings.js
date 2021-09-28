export function getCompAnimationString(first, second){
    let string = ""
    if(first === null || second === null)return string
    const firstAsString = first.toString()
    switch(true){

        case first < 10 && first === second:{
            string = "noneCompNoneMain" + firstAsString[0]
            break;
        }
        case first > 10 && first === second:{
            string = "noneCompNoneAlt" + firstAsString[0]
            break;
        }
        case first === second * 11:{
            string = "noneCompNoneMainAlt" + firstAsString[0]
            break;
        }
        case first * 11 === second:{
            string = "noneCompNoneAltMain" + firstAsString[0]
            break;
        }
        case first === 1 && second === 2:{
            string = "upCompRightMain"
            break;
        }
        case first === 11 && second === 22:{
            string = "upCompRightAlt"
            break;
        }
        case first === 11 && second === 2:{
            string = "upCompRightAltMain"
            break;
        }
        case first === 1 && second === 22:{
            string = "upCompRightMainAlt"
            break;
        }
        case first === 1 && second === 3:{
            string = "upCompDownMain"
            break;
        }
        case first === 11 && second === 33:{
            string = "upCompDownAlt"
            break;
        }
        case first === 11 && second === 3:{
            string = "upCompDownAltMain"
            break;
        }
        case first === 1 && second === 33:{
            string = "upCompDownMainAlt"
            break;
        }
        case first === 1 && second === 4:{
            string = "upCompLeftMain"
            break;
        }
        case first === 11 && second === 44:{
            string = "upCompLeftAlt"
            break;
        }
        case first === 11 && second === 4:{
            string = "upCompLeftAltMain"
            break;
        }
        case first === 1 && second === 44:{
            string = "upCompLeftMainAlt"
            break;
        }
        //
        case first === 2 && second === 1:{
            string = "rightCompUpMain"
            break;
        }
        case first === 22 && second === 11:{
            string = "rightCompUpAlt"
            break;
        }
        case first === 22 && second === 1:{
            string = "rightCompUpAltMain"
            break;
        }
        case first === 2 && second === 11:{
            string = "rightCompUpMainAlt"
            break;
        }
        case first === 2 && second === 3:{
            string = "rightCompDownMain"
            break;
        }
        case first === 22 && second === 33:{
            string = "rightCompDownAlt"
            break;
        }
        case first === 22 && second === 3:{
            string = "rightCompDownAltMain"
            break;
        }
        case first === 2 && second === 33:{
            string = "rightCompDownMainAlt"
            break;
        }
        case first === 2 && second === 4:{
            string = "rightCompLeftMain"
            break;
        }
        case first === 22 && second === 44:{
            string = "rightCompLeftAlt"
            break;
        }
        case first === 22 && second === 4:{
            string = "rightCompLeftAltMain"
            break;
        }
        case first === 2 && second === 44:{
            string = "rightCompLeftMainAlt"
            break;
        }
        //
        case first === 3 && second === 1:{
            string = "downCompUpMain"
            break;
        }
        case first === 33 && second === 11:{
            string = "downCompUpAlt"
            break;
        }
        case first === 33 && second === 1:{
            string = "downCompUpAltMain"
            break;
        }
        case first === 3 && second === 11:{
            string = "downCompUpMainAlt"
            break;
        }
        case first === 3 && second === 2:{
            string = "downCompRightMain"
            break;
        }
        case first === 33 && second === 22:{
            string = "downCompRightAlt"
            break;
        }
        case first === 33 && second === 2:{
            string = "downCompRightAltMain"
            break;
        }
        case first === 3 && second === 22:{
            string = "downCompRightMainAlt"
            break;
        }
        case first === 3 && second === 4:{
            string = "downCompLeftMain"
            break;
        }
        case first === 33 && second === 44:{
            string = "downCompLeftAlt"
            break;
        }
        case first === 33 && second === 4:{
            string = "downCompLeftAltMain"
            break;
        }
        case first === 3 && second === 44:{
            string = "downCompLeftMainAlt"
            break;
        }
        //
        case first === 4 && second === 1:{
            string = "leftCompUpMain"
            break;
        }
        case first === 44 && second === 11:{
            string = "leftCompUpAlt"
            break;
        }
        case first === 44 && second === 1:{
            string = "leftCompUpAltMain"
            break;
        }
        case first === 4 && second === 11:{
            string = "leftCompUpMainAlt"
            break;
        }
        case first === 4 && second === 2:{
            string = "leftCompRightMain"
            break;
        }
        case first === 44 && second === 22:{
            string = "leftCompRightAlt"
            break;
        }
        case first === 44 && second === 2:{
            string = "leftCompRightAltMain"
            break;
        }
        case first === 4 && second === 22:{
            string = "leftCompRightMainAlt"
            break;
        }
        case first === 4 && second === 3:{
            string = "leftCompDownMain"
            break;
        }
        case first === 44 && second === 33:{
            string = "leftCompDownAlt"
            break;
        }
        case first === 44 && second === 3:{
            string = "leftCompDownAltMain"
            break;
        }
        case first === 4 && second === 33:{
            string = "leftCompDownMainAlt"
            break;
        }
        default:{}
    }
    return string
}