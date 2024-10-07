// Select the body where you'll append the content
const body = document.body;

// Create a container to hold all the elements, centered using flexbox
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column'; // Stack items vertically
container.style.alignItems = 'center';    // Center items horizontally
container.style.maxWidth = '800px';       // Optional: limit the width
container.style.margin = '0 auto';        // Center the container on the page
body.appendChild(container); // Append container to body

// Add a circular image (research-related)
const researchImg = document.createElement('img');
researchImg.src = "https://github.com/QuantumChemist/QuantumChemist.github.io/blob/main/utils/pic3.png?raw=true";
researchImg.style.maxWidth = "100px";  // Set a maximum width
researchImg.style.height = "auto";     // Maintain aspect ratio
researchImg.style.marginBottom = "15px"; // Add some space between image and text
container.appendChild(researchImg);

// Create a paragraph for introduction
const introParagraph = document.createElement('p');
introParagraph.innerHTML = `
    Hi, I'm <a href="https://g.co/kgs/Bi3Bdb">Chris</a>, scientist in the theoretical and solid-state chemistry community, <br>
    currently PostDoc in materials chemistry and materials informatics at <a href="https://www.bam.de/">BAM</a> 
    (<a href="https://www.bam.de/Content/EN/Standard-Articles/About-us/Jobs-and-Careers/Young-Science/junior-research-group-george-computational-materials-design.html">George group</a>) <br>
    and former <a href="http://www.cohp.de/">LOBSTER</a> developer. Here you can find more information about my research.
`;
introParagraph.style.textAlign = 'center'; // Center the text
container.appendChild(introParagraph);

// Section: LobsterPyGUI
const lobsterSectionHeader = document.createElement('h2');
lobsterSectionHeader.innerText = "LobsterPyGUI";
container.appendChild(lobsterSectionHeader);

// Add LobsterPyGUI video
const lobsterVideo = document.createElement('video');
lobsterVideo.src = "https://quantumchemist.github.io/utils/lpglogo.mp4";
lobsterVideo.autoplay = true;
lobsterVideo.loop = true;
lobsterVideo.muted = true;
lobsterVideo.style.maxWidth = "100px";    // Set a maximum width
lobsterVideo.style.height = "auto";       // Maintain aspect ratio
lobsterVideo.style.marginBottom = "15px"; // Add some space between video and text
container.appendChild(lobsterVideo);

const lobsterParagraph = document.createElement('p');
lobsterParagraph.innerHTML = `
    If you are a very beginner in using command line interfaces (cli) and/or LOBSTER/LobsterPy, <br>
    I made a <a href=https://github.com/QuantumChemist/LobsterPyGUI>GUI</a> for you, providing the very basic functionalities of LobsterPy. :)
`;
lobsterParagraph.style.textAlign = 'center'; // Center the text
container.appendChild(lobsterParagraph);

// Section: Free time
const topggSectionHeader = document.createElement('h2');
topggSectionHeader.innerText = "In my free time...";
container.appendChild(topggSectionHeader);

const topggParagraph = document.createElement('p');
topggParagraph.innerHTML = `
    ...I also like to code. <br> So I made a chatbot and a Discord server in homage to the video game Portal. <br> Feel free to add my bot to your server!
`;
topggParagraph.style.textAlign = 'center'; // Center the text
container.appendChild(topggParagraph);

// Embed the iframe for the top.gg bot link (after LobsterPyGUI section)
const topggIframe = document.createElement('iframe');
topggIframe.src = "https://top.gg/bot/1276530139412566186";
topggIframe.width = "350";
topggIframe.height = "750";
topggIframe.allowTransparency = "true";
topggIframe.frameBorder = "0";
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
contactList.style.textAlign = 'center'; // Center the contact list
container.appendChild(contactList);

// Footer
const footer = document.createElement('footer');
footer.innerHTML = `&copy; 2024 -- 2025 Christina Ertural`;
footer.style.marginTop = "40px";
footer.style.textAlign = 'center'; // Center the footer
container.appendChild(footer);

// Clear any floats to prevent overlap (this is mostly unnecessary with flexbox)
const clearDiv = document.createElement('div');
clearDiv.style.clear = 'both';
container.appendChild(clearDiv);
