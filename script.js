let input = document.querySelector("#input");
let icon = document.querySelector("#input_icon");
let searchbox = document.querySelector(".search");
let loading_icon = document.querySelector(".loading");
let buttons = document.getElementsByClassName("button");
let chatlist = document.querySelector(".chatlist");
let refresh =document.querySelector("#refreshgpt");
let chatbot =document.querySelector(".chatting");
let chatbox =document.querySelector(".center");
let closebtngpt= document.querySelector("#close-chatgpt");


chatbot.addEventListener("click",()=>{
  chatbox.style.display="flex";
  chatbot.style.position="relative";
 
})

closebtngpt.addEventListener("click",()=>{
  chatbox.style.display="none";
  chatbot.style.position="sticky";
})


// navbar js
const closebtnnavbar =document.querySelector(".closenavbar");
const menubarbtnhead =document.querySelector(".hiddenmenubar");
const navbox =document.querySelector(".nav-box nav");
const hidden =document.querySelectorAll(".hidden");
const main_heading =document.querySelector(".main-content-heading");
// const contentnavbar = document.querySelector(".");
closebtnnavbar.addEventListener("click",()=>{
  console.log("hii");
  hidden.forEach(element => {
    element.style.display = "none";
  });
  
  navbox.style.height="50px";
  closebtnnavbar.style.display="none";
  main_heading.style.display="flex";
  menubarbtnhead.style.display="flex";
});

menubarbtnhead.addEventListener("click",()=>{
  hidden.forEach(element => {
    element.style.display = "flex";
  });
  navbox.style.height="390px";
  closebtnnavbar.style.display="flex";
  main_heading.style.display="none";
  menubarbtnhead.style.display="none";
});




















let runMessage = async (message) => {
  console.log(message);
  let language = document.getElementsByClassName("ln")[0].innerHTML;
  const API_KEY = "AIzaSyCWLLo5u-n8WEItH-gmHFZgZkegEXL8atk";
  const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const responseText = data?.candidates[0]?.content?.parts[0]?.text || "";

    // Display the incoming message
    if (responseText) {
      displayIncomingMessage(responseText);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    icon.style.cursor = "pointer";
    loading_icon.style.display = "none";
  }
};

icon.addEventListener("click", () => {
  if (input.value !== "") {
    runMessage(input.value);
    handleOutgoingChat();
    searchbox.style.boxShadow = `5px 5px 10px rgb(0,0,0,.6), inset 5px 5px 10px rgb(0,0,0,.2)`;
    loading_icon.style.display = "flex";
    loading_icon.innerHTML = `
      <div class="load">
        <h6></h6>
        <h6></h6>
        <h6></h6>
      </div>
    `;
    icon.style.cursor = "not-allowed";
  } else {
    searchbox.style.boxShadow = `5px 10px 10px rgb(0,0,0,.2), inset 5px 5px 10px rgb(255,0,0,.2)`;
  }
});

let offButton = () => {
  Array.from(buttons).forEach((el) => {
    el.classList.remove("ln");
  });
};

Array.from(buttons).forEach((el) => {
  el.addEventListener("click", () => {
    offButton();
    el.classList.add("ln");
  });
});

const displayIncomingMessage = (message) => {
  console.log(message);
  const incomingMessageDiv = document.createElement("div");
  incomingMessageDiv.className = "ans_box";
  incomingMessageDiv.innerHTML = `<p class="text">${message}</p>`;
  chatlist.appendChild(incomingMessageDiv);
};

const showLoadingAnimation = () => {
  loading_icon.innerHTML = `
    <div class="load">
      <h6></h6>
      <h6></h6>
      <h6></h6>
    </div>
  `;
  loading_icon.style.display = "flex";
};

const handleOutgoingChat = () => {
  const message = input.value;
  if (!message) return; // exit if there is no message
  const outgoingMessageDiv = document.createElement("div");
  outgoingMessageDiv.className = "ques_box";
  outgoingMessageDiv.innerHTML = `<p class="text">${message}</p>`;
  chatlist.appendChild(outgoingMessageDiv);
  input.value = ""; // clear the input field
  setTimeout(showLoadingAnimation, 500); // show loading animation after a delay
};
refresh.addEventListener("click",()=>{
  console.log("hiii");
 
  chatlist.innerHTML = "";

})