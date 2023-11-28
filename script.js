

// {dp:'https://images.unsplash.com/photo-1588373215588-90f0d0fd9ea7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', content:'https://images.unsplash.com/photo-1518553552028-b1ba6f77cf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}

// ]
// console.log(arr)

var arr=[
    {dp:"https://images.unsplash.com/photo-1615212049275-95561aebe1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", contents:"https://plus.unsplash.com/premium_photo-1664537981346-57b2b72d1ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60", contents:"https://images.unsplash.com/photo-1579259788374-b3e9e81f8c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1614430440602-6d11323cdc75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", contents:"https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1468112014733-deb9e1f8ddd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", contents:"https://images.unsplash.com/photo-1630568321790-65edcc51b544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://plus.unsplash.com/premium_photo-1675789510054-ea3b18017937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", contents:"https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1588373215588-90f0d0fd9ea7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", contents:"https://images.unsplash.com/photo-1518553552028-b1ba6f77cf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGZlbWFsZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
]
var story=document.querySelector("#story")
var clutter=""
arr.forEach(function(pic,idx){
   clutter+= ` <div class="content">
    <img id=${idx} src="${pic.dp}" alt="">
    
    </div>
    `

})

story.innerHTML=clutter

story.addEventListener("click",function(val){
    // console.log(arr[val.target.id].contents)
document.querySelector("#fulls").style.display="block"
document.querySelector("#fulls").style.backgroundImage=`url(${arr[val.target.id].contents})`

setTimeout(function(){
    document.querySelector("#fulls").style.display="none"
},1650)


});