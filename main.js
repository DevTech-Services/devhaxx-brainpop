// Dependencies
window.dragElement = e => { var n = 0, t = 0, o = 0, u = 0; function d(e) { (e = e || window.event).preventDefault(), o = e.clientX, u = e.clientY, document.onmouseup = m, document.onmousemove = l } function l(d) { (d = d || window.event).preventDefault(), n = o - d.clientX, t = u - d.clientY, o = d.clientX, u = d.clientY, e.style.top = e.offsetTop - t + "px", e.style.left = e.offsetLeft - n + "px" } function m() { document.onmouseup = null, document.onmousemove = null } document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = d : e.onmousedown = d };
window.showToast=(t,e)=>{let o=document.createElement("div"),d=document.createElement("div");o.style.cssText=`position: fixed; bottom: -100px; right: 20px; background-color: ${e||"purple"}; color: white; border-radius: 10px; z-index: 9999; transition: bottom 0.5s ease-in-out; max-width: 300px; padding: 10px;`,d.style.cssText="font-size: 18px; word-wrap: break-word;",d.textContent=t,o.appendChild(d),document.body.appendChild(o),setTimeout(()=>{o.style.bottom="20px"},100),setTimeout(()=>{o.style.bottom=`-${o.offsetHeight+20}px`,setTimeout(()=>{document.body.removeChild(o)},500)},Math.max(3e3,50*t.length))};



// Watermark
var copyrightDiv = document.createElement('div');
copyrightDiv.style.cssText = 'position: fixed; bottom: 10px; width: 100%; color: black; font-size: 12px; text-align: center;';
copyrightDiv.textContent = 'Copyright © DevTech 2023 All Rights Reserved';
document.body.appendChild(copyrightDiv);

// Welcome Toast
if (document.getElementsByClassName("username_display")[0]) {
  showToast("Welcome back to DevHaxx, "+document.getElementsByClassName("username_display")[0].innerHTML+"!", "green")
}

// Gui
var UI = document.createElement("div");
UI.innerHTML = `<div id="devhaxx" style="position: absolute; top: 158px; left: 132px; padding: 4pt; background: linear-gradient(to top, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); font-size: 15px; backdrop-filter: blur(5px); z-index: 9999; border-radius: 17pt; box-shadow: rgba(50, 50, 50, 0.7) 0px 0px 10px; width: 300px; display: block;">
<div class="dh-box" style="background-color: rgba(16, 16, 24, 255); border-radius: 15pt; backdrop-filter: blur(5px); padding: 40px;">


    <div class="devhaxxheader" style="
    font-weight: bold; text-align: center; font-size: 50px; cursor: move; background: linear-gradient(to left, rgba(128, 128, 128), rgb(128, 0, 128)); color: transparent; font-family: 'Roboto', sans-serif; font-weight: 500; 
        -webkit-background-clip: text; line-height:80px; margin-top:-35px; text-align: center;">
      HAXX
    </div>


    <div style="padding: 1.3pt; background: linear-gradient(to left, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); margin-bottom: 10px; border-radius: 12px;">
    <div id="skip" class="modMenuItem" style="cursor: pointer; padding: 12px; background-color: rgba(16, 16, 24, 255); border-radius: 12px; text-align: center; transition: all .2s ease-out;">
      <span style="font-family: 'Roboto', sans-serif; letter-spacing: 1px; font-weight: 500;">Question Skipper</span>
    </div>
    </div>
    <br>
    <h4>Made by darian™</h4>
</div>
`;
document.body.appendChild(UI);
dragElement(UI.firstElementChild);

// Buttons
document.getElementById("skip").addEventListener("click", () => {
    const quizHook = quiz_obj.player.options.quiz_content.quizFeature.questions[quiz_obj.player.options.question_offset];
    if (quizHook.correctAnswer == 0) {
      // A
      document.getElementById("answer_a").click()
    }
    if (quizHook.correctAnswer == 1) {
      // B
      document.getElementById("answer_b").click()
    }
    if (quizHook.correctAnswer == 2) {
      // C
      document.getElementById("answer_c").click()
    }
    if (quizHook.correctAnswer == 3) {
      // D
      document.getElementById("answer_d").click()
    }
});
