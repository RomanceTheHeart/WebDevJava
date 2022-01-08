/*let letter = ('Hello World');
let country; 
let continent;
let population;

let isIsland = true; 
continent = isIsland;
if(continent){isIsland = true; console.log('This is an island.')}
else console.log('This is not an island.')

isIsland = country; 
*/
// coding challenge:  BMI calculation:
{
const markMass = (130.5);
const markHeight = (6.1);
const markBMI = (markMass/markHeight);
Math.pow(markBMI,2);
const johnMass = (150.4); 
const johnHeight = (5.5);
const johnBMI = (johnMass/johnHeight);
Math.pow(johnBMI);
const markBMIGreater = markBMI > johnBMI; 
// this is called a templete literal
const marksInfo = ` This is Mark's Weight: ${markMass},
This is Mark's height: ${markHeight}
`;
const johnInfo =` This is John's weight: ${johnMass},
This is John's height ${johnHeight}`;


if(markBMIGreater)
{
    console.log(marksInfo);

}
else
{

 console.log(`John's BMI is Greater${johnInfo}, 
 His BMI level is: ${Number(johnBMI)}`);
}
}

const numberOfMatches=(3);
const dolphins = (96+108+89)/numberOfMatches;
const koalas = (88+91+110)/numberOfMatches;

if(dolphins > koalas && dolphins >100 || koalas > 90) 
{console.log(`The Dolphins Win, with an average of: ${Number(dolphins)}`);
console.log(`The Dolpins win the trophy!!!`)
}
else if (koalas > dolphins)
{
    {console.log(`The Dolphins Win, with an average of: ${Number(koalas)}`);
}
}




