const marks = [23,16,94,13]
let largest = marks[0]
for(const num of marks)
{
    if(num > largest){
        largest =num
    }
}
console.log(largest)