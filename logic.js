

const pluselement=document.getElementById("plus")
const minuselement=document.getElementById("minus")
const valelement=document.getElementById("value")
let count=0
pluselement.addEventListener("click",()=>
{
    count++
    valelement.innerText=count

})

minuselement.addEventListener("click",()=>
{
    count--
    valelement.innerText=count

})

const mode_btn=document.getElementById("mode")
mode_btn.addEventListener("click",()=>
{
    document.body.classList.toggle("darkb")
})

const addbtn=document.getElementById("btn2")
const vall=document.getElementById("nvalue")
const cont=document.getElementById("box")
addbtn.addEventListener("click",(event)=>{
    event.preventDefault()
    let sname=vall.value
    const neww=document.createElement("li")
    neww.innerText=sname
    cont.append(neww)
    
})

const btn3=document.getElementById("btn3")
const inputt=document.getElementById("task")
const cont2=document.getElementById("box2")
btn3.addEventListener("click",(event)=>{
    event.preventDefault()
    let tname=inputt.value
    const new2=document.createElement("span")
    const new3=document.createElement("button")
    const new4=document.createElement("button")
    const listitem=document.createElement("li")
    new2.innerText=tname
    new3.innerText="⏹️"
    new4.innerText="➖"
    listitem.append(new2)
    listitem.append(new3)
    listitem.append(new4)
    cont2.append(listitem)
    new4.addEventListener("click",()=>{
        listitem.remove()

    })

    new3.addEventListener("click",(event)=>{
        new2.classList.toggle("completed")
    })
    

})
const cont3=document.getElementById("box3")
const b=document.getElementById("enter")
b.addEventListener("click",()=>{

    let n=prompt("enter name")
    let v=document.createElement("li")
    v.innerText=`hello ${n}`
    cont3.append(v)
})

const student={
    "name":"priyanshi jain",
    "age":18,
    "course":"bca",
    "city":"delhi"
};

const updateds={
    ...student,
    "age":19
}

console.log(updateds)

const {name,age,course,city}=student


const n1=[19,23]
const n2=[34,56,78,89]
const both=[...n1,...n2]
console.log(both)


const nn=[2,3,5,6,7]
const nsquare=nn.map((num)=>{
    return num*num

})

const mul=nn.map((num)=>{
    return num*10
})

console.log(mul)

console.log(nsquare)

const bign=[12,34,56,6,54,34,3,2,1,,1,3,54,78,7,6,5,4,3]
const filtered=bign.filter((num)=>
{
    return num%2==0
})

console.log(filtered)

const firstapponly=bign.find((num)=>
{
    return num%2==0

})

console.log(firstapponly)

const nums = [5,10,15];
const ad=nums.reduce((sum,num)=>{
    return sum+num;
})
console.log(ad)

console.log("loading!")
setTimeout(()=>{
    alert("data loaded")
},10)

const delaybtn=document.getElementById("delay")
delaybtn.addEventListener("click",()=>{
    delaybtn.disabled=true
    setTimeout(()=>{
        delaybtn.disabled=false


    },3000)
})

const p=new Promise((resolve,reject)=>{
    resolve("hello")
})

p.then((msg)=>{
    console.log(msg)
})

const pr2=new Promise((resolve)=>{
    resolve("rejected")
})

async function printvalue() {
    try{
        const respone=await pr2;
        console.log(respone)

    }
    catch{
        console.log("rejected!!!")

    }
    
}

const fetchbtn=document.getElementById("getuser")
const heading=document.getElementById("userdata")

fetchbtn.addEventListener("click",async function name() {
    const response=await fetch("http://127.0.0.1:8000/hello")
    const data=await response.json();
    heading.innerText=data.message
    
})


const nval=document.getElementById("n")
const nbtn=document.getElementById("goname")
const g=document.getElementById("showgreet")

nbtn.addEventListener("click",async function(event) {
    event.preventDefault()
    try{
        const response=await fetch(`http://127.0.0.1:8000/sendname/${nval.value}`,{
            method:"POST"
        })
        const data= await response.json();
        g.innerText=data.message



    }
    catch{
        g.innerText="send correct value!"
 
    }
    
})





