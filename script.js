
	
function insert_Row() {
    //Write your code here
    const table =document.getElementById("sampleTable");
    const a=table.childNodes;
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>New Cell1</td> 
    <td>New Cell2</td>`
    table.insertBefore(tr,a[1]);
  
}
