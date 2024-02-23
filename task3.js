function binarySearch(arr,target){
    let x=0;
    let y=arr.length-1;
    while(x<=y){
      let mid=Math.floor((x+y)/2);
      if(arr[mid]===target){
        return mid;
      }
      else if(arr[mid]<target){
        x=mid+1;
      }
      else{
        y=mid-1;
      }
      
      
      
      
      
      
      
   
    }
    
  
      return 0; 
  } 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   const sortedArray=[1,2,3,4,5,6,7,8,10];
   const searchElement=5;
   
   
   const result=binarySearch(sortedArray,searchElement);
   
   if(result===0){
     console.log("Not found");
   }
   else{
     console.log("Found");
   }
   
   