// Select the body where you'll append the content
const body = document.body;

// Create a container for the whole page
const mainContainer = document.createElement('div');
mainContainer.style.maxWidth = '800px';  // Set the max width for the whole container
mainContainer.style.margin = '0 auto';   // Center the container on the page
body.appendChild(mainContainer);

// Function to create a box with text on the left and image on the right
function createBoxWithTextLeftAndImageRight(imgSrc, imgWidth, textHTML) {
    // Create a box container
    const box = document.createElement('div');
    box.style.display = 'flex';
    box.style.justifyContent = 'space-between';  // Push text and image to opposite sides
    box.style.alignItems = 'center';             // Vertically align text and image
    box.style.marginBottom = '20px';             // Space between boxes
//    box.style.border = '1px solid #333';         // Optional: border around the box
    box.style.padding = '10px';                  // Optional: padding inside the box
    box.style.width = '100%';                    // Ensure boxes fill the width of the container

    // Create the text element (paragraph)
    const text = document.createElement('p');
    text.innerHTML = textHTML;
    text.style.flex = '1';  // Text takes up remaining space
    text.style.textAlign = 'left'; // Ensure text is aligned to the left
    text.style.marginRight = '20px'; // Add space between the text and the image

    // Create the image element
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.maxWidth = imgWidth + 'px';  // Set the image width
    img.style.height = 'auto';             // Maintain aspect ratio

    // Append text and image to the box
    box.appendChild(text);
    box.appendChild(img);

    return box;
}

// Function to create a box with text on the left and image/video on the right
function createBoxWithTextLeftAndVideoRight(videoSrc, videoWidth, textHTML) {
    // Create a box container
    const box = document.createElement('div');
    box.style.display = 'flex';
    box.style.justifyContent = 'space-between';  // Push text and video to opposite sides
    box.style.alignItems = 'center';             // Vertically align text and video
    box.style.marginBottom = '20px';             // Space between boxes
 //   box.style.border = '1px solid #333';         // Optional: border around the box
    box.style.padding = '10px';                  // Optional: padding inside the box
    box.style.width = '100%';                    // Ensure boxes fill the width of the container

    // Create the text element (paragraph)
    const text = document.createElement('p');
    text.innerHTML = textHTML;
    text.style.flex = '1';  // Text takes up remaining space
    text.style.textAlign = 'left'; // Ensure text is aligned to the left
    text.style.marginRight = '20px'; // Add space between the text and the video

    // Create the video element
    const video = document.createElement('video');
    video.src = videoSrc;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.maxWidth = videoWidth + 'px';  // Set the video width
    video.style.height = 'auto';               // Maintain aspect ratio
    video.controls = true;                     // Add video controls for better UX

    // Append text and video to the box
    box.appendChild(text);
    box.appendChild(video);

    return box;
}

// Function to create a box with text only (no image)
function createTextOnlyBox(textHTML) {
    // Create a box container
    const box = document.createElement('div');
    box.style.display = 'flex';
    box.style.justifyContent = 'center';  // Center the text inside the box
    box.style.alignItems = 'center';      // Vertically align text
    box.style.marginBottom = '20px';      // Space between boxes
  //  box.style.border = '1px solid #333';  // Optional: border around the box
    box.style.padding = '10px';           // Optional: padding inside the box
    box.style.width = '100%';             // Ensure the box fills the width of the container

    // Create the text element (paragraph)
    const text = document.createElement('p');
    text.innerHTML = textHTML;
    text.style.textAlign = 'left';      // Center the text in the box

    // Append the text to the box
    box.appendChild(text);

    return box;
}

// Add the introduction section (text left, image right)
const introBox = createBoxWithTextLeftAndImageRight(
    'https://github.com/QuantumChemist/QuantumChemist.github.io/blob/main/utils/pic3.png?raw=true',
    100,
    `Hi, I'm <a href="https://g.co/kgs/Bi3Bdb">Chris</a>, scientist in the theoretical and solid-state chemistry community, 
     currently PostDoc in materials chemistry and materials informatics at <a href="https://www.bam.de/">BAM</a> 
     (<a href="https://www.bam.de/Content/EN/Standard-Articles/About-us/Jobs-and-Careers/Young-Science/junior-research-group-george-computational-materials-design.html">George group</a>)
     and former <a href="http://www.cohp.de/">LOBSTER</a> developer. Here you can find more information about my research.`
);
mainContainer.appendChild(introBox);

// Add the LobsterPyGUI section (video right, text left)
const lobsterBox = createBoxWithTextLeftAndVideoRight(
    'https://quantumchemist.github.io/utils/lpglogo.mp4',
    100,
    `If you are a very beginner in using command line interfaces (cli) and/or LOBSTER/LobsterPy, 
    I made a <a href=https://github.com/QuantumChemist/LobsterPyGUI>GUI</a> for you, providing the very basic functionalities of LobsterPy. :)`
);
mainContainer.appendChild(lobsterBox);

// Add the "In my free time" section (text-only box)
const freeTimeBox = createTextOnlyBox(`
    ...I also like to code. <br> So I made a chatbot and a Discord server in homage to the video game Portal. <br> Feel free to add my bot to your server!
`);
mainContainer.appendChild(freeTimeBox);

// Embed the iframe for the top.gg bot link (after LobsterPyGUI section)
const topggIframe = document.createElement('iframe');
topggIframe.src = "https://top.gg/bot/1276530139412566186";
topggIframe.width = "350";
topggIframe.height = "750";
topggIframe.allowTransparency = "true";
topggIframe["frameBorder"] = "0";
topggIframe.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
mainContainer.appendChild(topggIframe);

// Contact section
const contactHeader = document.createElement('h3');
contactHeader.innerText = "How you can contact me";
mainContainer.appendChild(contactHeader);

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
mainContainer.appendChild(contactList);

// Footer
const footer = document.createElement('footer');
footer.innerHTML = `&copy; 2024 -- 2025 Christina Ertural`;
footer.style.marginTop = "40px";
footer.style.textAlign = 'center'; // Center the footer
mainContainer.appendChild(footer);
