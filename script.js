const Api_key='Go platform.openai.com Create new API KEY and Copy paste here'// dont share in gethub your api it is risk 
const submitButton= document.querySelector('#submit')
const output=document.querySelector('#output')
const input=document.querySelector('input')
const history=document.querySelector('.history')
const newbutton=document.querySelector('button')
changeinput=(value)=>{
    document.querySelector('input').value=value
}
// Api Calling and generate backend using chat gpt api server its amazing I will not worked background simply I will get key insaid chat gpt and updated using async
async function getMessage(){
    console.log('clicked')
    const Options={
        method:'POST',
        headers: {
            'Authorization':`Bearer ${Api_key}`,
            "Content-Type": `application/json`},
        body: JSON.stringify({model: "gpt-3.5-turbo",
        "messages": [
          {
            role: "system",
            content: "You are a helpful assistant."
          },
          {
            role: "user",
            content: input.value
          }
        ],
        max_tokens:100
      })
    }
    try{
       const response= await fetch('Copy here your post link on API chat',Options)
      const data= await response.json()
      console.log(data)
      output.textContent=data.choices[0].message.content
      if(data.choices[0].message.content){
       const pelement=document.createElement('p')
       pelement.textContent=input.value
       pelement.addEventListener('click',()=>changeinput(pelement.textContent))
       history.append(pelement)
      }

    }
    catch (error)
    {
        console.error();
    }
}
submitButton.addEventListener("click",getMessage)
clearhistory=()=>{
    input.value=''
}
newbutton.addEventListener('click',clearhistory)