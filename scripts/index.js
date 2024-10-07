// Select the body or main container where you'll append the content
const body = document.body;

// Create a container to hold all the elements
const container = document.createElement('div');
body.appendChild(container); // Append container to body

// Create a paragraph for introduction
const introParagraph = document.createElement('p');
introParagraph.innerHTML = `
    Hi, I'm <a href="https://g.co/kgs/Bi3Bdb">Chris</a>, scientist in the theoretical and solid-state chemistry community, <br>
    currently PostDoc in materials chemistry and materials informatics at <a href="https://www.bam.de/">BAM</a> 
    (<a href="https://www.bam.de/Content/EN/Standard-Articles/About-us/Jobs-and-Careers/Young-Science/junior-research-group-george-computational-materials-design.html">George group</a>) <br>
    and former <a href="http://www.cohp.de/">LOBSTER</a> developer. Here you can find more information about my research.
`;
container.appendChild(introParagraph);

// Add a circular image (research-related)
const researchImg = document.createElement('img');
researchImg.src = "https://github.com/QuantumChemist/QuantumChemist.github.io/blob/main/utils/pic3.png?raw=true";
researchImg.classList.add('right-align'); // Floating the image to the right
researchImg.style.maxWidth = "100px";  // Set a maximum width
researchImg.style.height = "auto";     // Maintain aspect ratio
container.appendChild(researchImg);

// Section: LobsterPyGUI
const lobsterSectionHeader = document.createElement('h2');
lobsterSectionHeader.innerText = "LobsterPyGUI";
container.appendChild(lobsterSectionHeader);

const lobsterParagraph = document.createElement('p');
lobsterParagraph.innerHTML = `
    If you are a very beginner in using command line interfaces (cli) and/or LOBSTER/LobsterPy, <br>
    I made a <a href=https://github.com/QuantumChemist/LobsterPyGUI>GUI</a> for you, providing the very basic functionalities of LobsterPy. :)
`;
container.appendChild(lobsterParagraph);

// Add LobsterPyGUI video
const lobsterVideo = document.createElement('video');
lobsterVideo.src = "https://quantumchemist.github.io/utils/lpglogo.mp4";
lobsterVideo.autoplay = true;
lobsterVideo.loop = true;
lobsterVideo.muted = true;
lobsterVideo.classList.add('right-align'); // Floating the video to the right
lobsterVideo.style.maxWidth = "100px";    // Set a maximum width
lobsterVideo.style.height = "auto";       // Maintain aspect ratio
container.appendChild(lobsterVideo);

// Section: LobsterPyGUI
const topggSectionHeader = document.createElement('h2');
topggSectionHeader.innerText = "In my free time...";
container.appendChild(topggSectionHeader);

const topggParagraph = document.createElement('p');
topggParagraph.innerHTML = `
    ...I also like to code. <br> So I made a chatbot and a Discord server in homage to the video game Portal. <br> Feel free to add my bot to your server!
`;
container.appendChild(topggParagraph);

// Embed the iframe for the top.gg bot link (after LobsterPyGUI section)
const topggIframe = document.createElement('iframe');
topggIframe.src = "https://top.gg/bot/1276530139412566186";
topggIframe.width = "350";
topggIframe.height = "750";
topggIframe.allowTransparency = "true";
topggIframe["frameBorder"] = "0";
topggIframe.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
container.appendChild(topggIframe);

// Contact section
const contactHeader = document.createElement('h3');
contactHeader.innerText = "How you can contact me";
container.appendChild(contactHeader);

// Create contact list
const contactList = document.createElement('dl');
contactList.innerHTML = `
    <dt>GitHub</dt>
    <dd><a href="https://github.com/QuantumChemist">QuantumChemist</a></dd>
    <dt>LinkedIn</dt>
    <dd><a href="https://www.linkedin.com/in/christina-ertural/">Dr. Christina Ertural</a></dd>
    <dt>ResearchGate</dt>
    <dd><a href="https://www.researchgate.net/profile/Christina-Ertural/">Dr. Christina Ertural</a></dd>
`;
container.appendChild(contactList);

// Footer
const footer = document.createElement('footer');
footer.innerHTML = `&copy; 2024 -- 2025 Christina Ertural`;
container.appendChild(footer);

// Clear any floats to prevent overlap
const clearDiv = document.createElement('div');
clearDiv.style.clear = 'both';
container.appendChild(clearDiv);
