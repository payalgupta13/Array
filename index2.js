const numbers = [23,16,13,4,94]
let sum =0;
for(let i=0; i<numbers.length; i++)
{
    if(numbers[i]%2==1){
        sum+= numbers[i]
    }
}
console.log(`sum:${sum}`)