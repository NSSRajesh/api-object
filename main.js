fetch(`http://official-joke-api.appspot.com/jokes/random`)
.then((res)=>
res.json())
.then((msg)=>{
    for(m in msg){
        console.log(msg[m]);
	}
});	