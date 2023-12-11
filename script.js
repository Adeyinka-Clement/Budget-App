function submit() {
    if (list1.value <= "0" || list2.value <= "0" || list3.value <= "0" || list4.value <= "0" )
        {
    alert("input a valid items")
        }
        else {
            var confirmation = confirm("Are you sure you want to proceed?")
            if (confirmation == true){
                var sum = ( Number(list1.value) + Number(list2.value) + Number(list3.value) + Number(list4.value) )
            if (sum > "10000"){
                show.innerHTML = "You cant spend more than 10K"
            }
            else{
            total.innerHTML = "Total =$" + sum 
            list1R.innerHTML = " =$" + list1.value
            list2R.innerHTML = " =$" + list2.value
            list3R.innerHTML = " =$" + list3.value
            list4R.innerHTML = " =$" + list4.value
    
            listName1R.innerHTML = listName1.value
            listName2R.innerHTML = listName2.value
            listName3R.innerHTML = listName3.value
            listName4R.innerHTML = listName4.value
            var available =  ( "10000" - sum ) 
            avail.innerHTML = "aval bal =$" + available

            show.style.display = "none"
            }
            }
            else{
                console.log("retry");
            }
        }
        
        
        
}