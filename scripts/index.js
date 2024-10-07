// Select the body or main container where you'll append the content
const body = document.body;

// Create an image element and append it
const imgRight = document.createElement('img');
imgRight.src = "https://github.com/QuantumChemist/QuantumChemist.github.io/blob/main/utils/pic3.png?raw=true";
imgRight.style.width = "20%";
imgRight.style.height = "10%";
imgRight.style.hspace = "20";
imgRight.style.float = "right";
body.appendChild(imgRight);

// Create a paragraph element for intro text
const introText = document.createElement('p');
introText.innerHTML = `
  Hi, I'm <a href="https://g.co/kgs/Bi3Bdb">Chris</a>, scientist in the theoretical and solid-state chemistry community, currently PostDoc in materials chemistry and materials informatics at 
  <a href="https://www.bam.de/">BAM</a> 
  (<a href="https://www.bam.de/Content/EN/Standard-Articles/About-us/Jobs-and-Careers/Young-Science/junior-research-group-george-computational-materials-design.html">George group</a>) 
  and former <a href="http://www.cohp.de/">LOBSTER</a> developer. Here you can find more information about my research.
`;
body.appendChild(introText);

// Create an image link for LobsterPyGUI
const lobsterImage = document.createElement('img');
lobsterImage.src = "https://quantumchemist.github.io/utils/QClogohighres.png";
lobsterImage.style.width = "15%";
lobsterImage.style.float = "left";

const lobsterLink = document.createElement('a');
lobsterLink.href = "https://doi.org/10.1021/acs.chemmater.1c03349";
lobsterLink.appendChild(lobsterImage);
body.appendChild(lobsterLink);

// Add additional research-related content
const researchText = document.createElement('p');
researchText.innerHTML = `
  My research interests involve different areas of theoretical, quantum and computational chemistry as well as material informatics...
  [thermoelectrical materials](https://doi.org/10.1002/jcc.25822), [cathode and anode materials](https://doi.org/10.1021/acs.chemmater.1c03349) for battery technology or 
  [phase-change materials](https://doi.org/10.1002/anie.202115778).
`;
body.appendChild(researchText);

// Add a custom message in Japanese
const japaneseMessage = document.createElement('p');
japaneseMessage.innerText = "いつも和独のタンデムパートナーを探しています。(⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)";
body.appendChild(japaneseMessage);

// Add a section for LobsterPyGUI
const lobsterSection = document.createElement('h2');
lobsterSection.innerText = "LobsterPyGUI";
body.appendChild(lobsterSection);

const videoLobsterPyGUI = document.createElement('video');
videoLobsterPyGUI.src = "https://quantumchemist.github.io/utils/lpglogo.mp4";
videoLobsterPyGUI.autoplay = true;
videoLobsterPyGUI.loop = true;
videoLobsterPyGUI.muted = true;
videoLobsterPyGUI.style.width = "30%";
videoLobsterPyGUI.style.float = "left";

const lobsterLink2 = document.createElement('a');
lobsterLink2.href = "https://github.com/QuantumChemist/LobsterPyGUI";
lobsterLink2.appendChild(videoLobsterPyGUI);
body.appendChild(lobsterLink2);

// Add a chatbot and Discord section
const discordIframe = document.createElement('iframe');
discordIframe.src = "https://discord.com/widget?id=1277030477303382026&theme=dark";
discordIframe.width = "350";
discordIframe.height = "150";
discordIframe.allowtransparency = true;
discordIframe.frameborder = "0";
discordIframe.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
body.appendChild(discordIframe);

// Add contact information
const contactSection = document.createElement('h3');
contactSection.innerText = "How you can contact me";
body.appendChild(contactSection);

const contactList = document.createElement('dl');
contactList.innerHTML = `
  <dt>Email &#9993;</dt>
  <dd><a href="mailto:christina.ertural@bam.de">christina.ertural&commat;bam.de</a></dd>
  <dt>GitHub</dt>
  <dd><a href="https://github.com/QuantumChemist">QuantumChemist</a></dd>
  <dt>LinkedIn</dt>
  <dd><a href="https://www.linkedin.com/in/christina-ertural/">Dr. Christina Ertural</a></dd>
  <dt>ResearchGate</dt>
  <dd><a href="https://www.researchgate.net/profile/Christina-Ertural/">Dr. Christina Ertural</a></dd>
`;
body.appendChild(contactList);

// Add a footer message with copyright information
const footer = document.createElement('footer');
footer.innerHTML = `
  <p>&copy; 2020 -- 2024 Christina Ertural</p>
`;
body.appendChild(footer);
