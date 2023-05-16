// Home assignment
// 1. find the maximum element in an array
// 2. find the minimum element in an array
// 3. find the second largest element in an array
// 4. find the second smallest element in an array
// 5. find the sum of all elements in an array
// 6. find the average of all elements in an array
// 7. find the sum of all even elements in an array
// 8. find the sum of all odd elements in an array
// 9. find the number of even elements in an array
// 10. find the number of odd elements in an array

//1)

let arr = [1, 2, 3, 43, 132, 41, 1]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

        }
    }


}
console.log("max ele is=",arr[arr.length-1]);
console.log("min ele is =",arr[0]);
console.log("second small ele =",arr[1]);
console.log("second large ele =",arr[arr.length-2]);



//================//

let arr2 = [2, 4, 3, 23, 24, 55, 56]
count = 0
avg=0
for (let i = 0; i < arr2.length; i++) {
    count = arr[i] + count
    avg = count / arr2.length

}
console.log("sum of all ele is=", count);
console.log("avg of ele is",avg);

//===================//
count=0
sumOfEven=0
oddCount=0
oddSum=0
for(let j=0;j<arr2.length;j++){
    if(arr2[j]%2==0){
count++
sumOfEven=sumOfEven+arr2[j]
    }else{
oddCount++
oddSum=oddSum+arr2[j]
    }
}
console.log("no.of even no is =",count);
console.log("sum of even no.is=",sumOfEven);
console.log("no.of odd no is =",oddCount);
console.log("sum of odd no.is=",oddSum);